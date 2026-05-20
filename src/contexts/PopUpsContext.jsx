import { createContext, useState } from "react";

const PopUpContext = createContext({
  currentPopUp: null,
  setCurrentPopUp: () => {},
});

const PopUpContextProvider = ({ children }) => {
  const [currentPopUp, setCurrentPopUp] = useState(null);
    
  const contextValue = {
    currentPopUp,
    setCurrentPopUp,
  };

  return (
    <PopUpContext.Provider value={contextValue}>
      {children}
    </PopUpContext.Provider>
  );
};

export { PopUpContextProvider, PopUpContext };