import { apiFetch } from "./api";

const signUpUser = async (username, email, password) => {
  try {
    const requestBody = { username, email, password };

    const res = await apiFetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Sign-up Failed - try again");
    }

    return await res.json();
  } catch (error) {
    throw error;
  }
};

const signInUser = async (email, password) => {
  const requestBody = { email, password };

  const res = await apiFetch("/api/authentication", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestBody),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Sign-in Failed - try again");
  }

  return await res.json();
};

const signOutUser = async () => {
  const res = await apiFetch("/api/authentication/sign-out-user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Sign-out Failed - try again");
  }

  return await res.json();
};

const resetEmailRequestUserLoggedIn = async (newEmail, password) => {
  const requestBody = { newEmail, password };

  const res = await apiFetch( "/api/authentication/email-reset-request-authenticated-user",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    },
  );

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "E-mail reset failed - try again");
  }

  return true;
}


export { signUpUser, signInUser, signOutUser, resetEmailRequestUserLoggedIn };
