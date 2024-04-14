import { createContext } from "react";

export const LocaleContext = createContext();

const LocaleProvider = ({ children }) => {
  return <LocaleContext.Provider>{children}</LocaleContext.Provider>;
};

export default LocaleProvider;
