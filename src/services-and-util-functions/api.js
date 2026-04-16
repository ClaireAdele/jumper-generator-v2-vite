/* Singleton promise -
 * If multiple requests fail with 401 simultaneously, they would each trigger
 * a refresh — a concurrency issue. Instead, all callers share the same promise,
 * so only one refresh fires regardless of how many requests are waiting.
 * They all resolve once that single refresh completes.
 */
let refreshPromise = null;

const refreshSession = async () => {
  const res = await fetch("/api/refresh-session", {
    method: "GET",
    credentials: "include",
  });

  if (!res.ok) throw new Error("Session expired");
};

const getRefreshPromise = () => {
  if (!refreshPromise) {
    refreshPromise = refreshSession().finally(() => {
      refreshPromise = null;
    });
  }
  return refreshPromise;
};

const apiFetch = async (url, options = {}) => {
  let res = await fetch(url, {
    credentials: "include",
    ...options,
  });

  if (res.status !== 401) return res;

  try {
    await getRefreshPromise();
  } catch {
    throw new Error("Session expired - please log-in again");
  }

  res = await fetch(url, {
    credentials: "include",
    ...options,
  });

  if (res.status === 401) {
    throw new Error("Session expired after refresh");
  }

  return res;
};

export { apiFetch };
