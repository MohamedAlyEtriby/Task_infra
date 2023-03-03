import { createContext, useState } from "react";
export const    Mycontext = createContext();
const ContextProvider = ({ children }) => {
  const [show, setshow] = useState(false);

  return (
    <Mycontext.Provider value={{show,setshow}}>{children}</Mycontext.Provider>
  );
};
export default ContextProvider;