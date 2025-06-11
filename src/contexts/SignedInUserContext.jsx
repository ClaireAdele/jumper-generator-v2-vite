import { createContext, useState } from "react";

const SignedInUserContext = createContext({
  signedInUserData: {},
  setSignedInUserData: () => {},
});

const SignedInUserContextProvider = ({ children }) => {
    const [signedInUserData, setSignedInUserData] = useState({});
    
    const contextValue = {
      signedInUserData,
      setSignedInUserData,
    };

  return (
    <SignedInUserContext.Provider value={contextValue}>
      {children}
    </SignedInUserContext.Provider>
  );
};

export { SignedInUserContextProvider, SignedInUserContext };