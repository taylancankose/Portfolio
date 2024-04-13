import { createContext, useEffect, useState } from "react";
import { locale } from "../locale";

export const LocaleContext = createContext();

const LocaleProvider = ({ children }) => {
  const [lng, setLng] = useState({
    key: "tr",
    language: locale[0],
  });

  const toggleLng = () => {
    localStorage.setItem("lng", lng.key === "tr" ? "en" : "tr");
    setLng({
      ...lng,
      key: lng.key === "tr" ? "en" : "tr",
    });
  };

  useEffect(() => {
    const localeLng = localStorage.getItem("lng");
    setLng(
      { ...lng, key: localeLng } || {
        key: "tr",
        language: locale[0],
      }
    );
    if (lng?.key === "tr") {
      setLng({
        ...lng,
        language: locale[0],
      });
    } else {
      setLng({
        ...lng,
        language: locale[1],
      });
    }
  }, [lng.key]);

  return (
    <LocaleContext.Provider
      value={{
        toggleLng,
        lng,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

export default LocaleProvider;
