const postPattern = async (finalJumperData) => {
        const res = await fetch("/api/patterns", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(finalJumperData),
        });

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.message || "Error when posting pattern - try again");
        }

        const data = await res.json();

        return data;
};

const getPatternsByUser = async () => {
    const res = await fetch("/api/patterns/my-patterns");

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(
        errorData.message || "Error when getting user patterns - try again"
      );
    }

    const data = await res.json();

    return data;
}

const getPatternById = async (patternId) => {
  const res = await fetch(`/api/patterns/${patternId}`);

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(
      errorData.message || `Error when getting pattern ${patternId}  - try again`
    );
  }

  const data = await res.json();

  return data;
};

const deletePatternById = async (patternId) => {
  const res = await fetch(`/api/patterns/${patternId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(
      errorData.message ||
      `Error when deleting pattern ${patternId}  - try again`
    );
  }

  const data = await res.json();

  return data;
};

export { postPattern, getPatternsByUser, getPatternById, deletePatternById };