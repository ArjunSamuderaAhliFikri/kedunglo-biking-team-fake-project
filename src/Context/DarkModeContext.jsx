import { createContext, useContext, useState } from "react";

export const DarkModeContext = createContext(null);

export default function ContainerDarkMode({ children }) {
  const [isDark, setIsDark] = useState(false);
  return (
    <DarkModeContext.Provider value={isDark}>
      {children}
    </DarkModeContext.Provider>
  );
}
