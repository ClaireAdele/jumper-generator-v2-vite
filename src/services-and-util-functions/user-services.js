const getSignedInUserData = async () => {
    try { 
        const res = await fetch("/api/users/me", {
            method: "GET",
            credentials: "include",
        });

        if (!res.ok) { 
            const errorData = await res.json();
            throw new Error(errorData.message || "Could not authenticate user");
        }
             
        const { signedInUser } = await res.json();

        return signedInUser;
    } catch(error) { 
        throw error;
    }
}

const editUserDetails = async (updatedUserDetails) => {
    const reqBody = updatedUserDetails;

    try {
        const res = await fetch("/api/users/me", {
          method: "PUT",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(reqBody),
        });

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.message || "Could not update user details - try again")
        }

        const data = await res.json();
        return data.updatedUser;
    } catch(error) { 
        throw error;
    };
}

export { getSignedInUserData, editUserDetails };