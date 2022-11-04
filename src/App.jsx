/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthorizationContext } from "./contexts/LocaleContext";
import { getUserLogged } from "./utils/network-data";
import { paths } from "./routes/paths";
import { LocalizationContext } from "./contexts/LocaleContext";
import { ThemeContext } from "./contexts/LocaleContext";
import { NavigationBarFront } from "./components/NavigationBarFront";

export const App = () => {
  const [authUser, setAuthUser] = useState(null);
  const [localization, setLocalization] = useState(
    localStorage.getItem("localization") || "id"
  );
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const initialDataUser = async () => {
    const { error, data } = await getUserLogged();
    if (!error) {
      setAuthUser(data);
    }
  };

  useEffect(() => {
    initialDataUser();
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      document.body.classList.add("dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      document.body.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));

    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      document.body.classList.remove("dark");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      document.body.classList.add("dark");
    }
  };

  const toggleLocalization = () => {
    localStorage.setItem("localization", localization === "id" ? "en" : "id");
    setLocalization((prevState) => (prevState === "id" ? "en" : "id"));
  };

  const authContextValue = useMemo(
    () => ({
      authUser,
      setAuthUser,
    }),
    [authUser]
  );

  const localizationContextValue = useMemo(
    () => ({
      localization,
      toggleLocalization,
    }),
    [localization]
  );

  const themeContextValue = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),

    [theme]
  );

  return (
    <AuthorizationContext.Provider value={authContextValue}>
      <LocalizationContext.Provider value={localizationContextValue}>
        <ThemeContext.Provider value={themeContextValue}>
          <>
            <header>
              <NavigationBarFront />
            </header>
            <main>
              <Routes>
                {paths.map((item, index) => (
                  <Route key={index} {...item} />
                ))}
              </Routes>
            </main>
          </>
        </ThemeContext.Provider>
      </LocalizationContext.Provider>
    </AuthorizationContext.Provider>
  );
};
