import react, { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const themetogler = () => {
    console.log("event called");
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <ThemeContext.Provider value={{ theme, themetogler }}>
      {children}
    </ThemeContext.Provider>
  );
};
