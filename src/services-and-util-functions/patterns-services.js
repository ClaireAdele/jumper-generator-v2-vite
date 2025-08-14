const postPattern = async (finalJumperData) => {
    try {
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

    } catch (error) {
        throw error; 
    }
};

export { postPattern }