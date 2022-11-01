/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { AuthorizationContext } from "./contexts/LocaleContext";
import { getUserLogged } from "./utils/network-data";
import { path } from "./routes/paths";
import { LocalizationContext } from "./contexts/LocaleContext";
import { ThemeContext } from "./contexts/LocaleContext";

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

  // useEffect(() => {
  //   initialDataUser();
  //   if(theme === 'dark'){

  //   }
  // });
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

  return (
    <AuthorizationContext.Provider value={authContextValue}>
      <LocalizationContext.Provider value={localizationContextValue}>
        <>
          <main>
            <Routes>
              {path.map((item, index) => (
                <Route key={index} {...item} />
              ))}
            </Routes>
          </main>
        </>
      </LocalizationContext.Provider>
    </AuthorizationContext.Provider>
  );
};
