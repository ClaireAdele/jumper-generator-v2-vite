const signUpUser = async (username, email, password) => {

    try {
        const requestBody = { username, email, password };

        const res = await fetch("/api/users", {
            method: "POST",
            headers: { "Content-Type": "application/json", },
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
}

const signInUser = async (email, password) => { 
    try {
        const requestBody = { email, password };

        const res = await fetch("/api/authentication", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestBody),
        });

        if (!res.ok) {
            const errorData = await res.json(); 
            throw new Error(errorData.message || "Sign-in Failed - try again");
        }

        return await res.json();
    } catch(error) { 
        throw error;
    }
}


export { signUpUser, signInUser };