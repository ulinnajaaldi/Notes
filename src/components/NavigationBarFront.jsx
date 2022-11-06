import React, { useContext } from "react";
import Logo from "../image/Logo.svg";
import {
  AuthorizationContext,
  LocalizationContext,
} from "../contexts/LocaleContext";
import { useLocalization } from "../hooks/useLocalization";
import { ThemeContext } from "../contexts/LocaleContext";
import { FiLogOut, FiMoon, FiSun } from "react-icons/fi";
import { useNavigate, Link } from "react-router-dom";

export const NavigationBarFront = () => {
  const { authUser, setAuthUser } = useContext(AuthorizationContext);
  const { toggleLocalization } = useContext(LocalizationContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const text = useLocalization("navFront");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthUser(null);
    navigate("/");
  };

  return (
    <nav className="flex md:justify-between items-center px-8 md:px-16 md:flex-row flex-col gap-3 py-4 border-b-2 border-slate-300 dark:border-slate-700">
      <div className="flex">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="grid-cols-2 items-center">
        {authUser && (
          <div className="flex items-center gap-2">
            <Link
              to={"/"}
              className="border-solid border-2 rounded-full px-6 p-1 font-bold text-md hover:bg-gray-400/50 hover:border-gray-400/0 text-primary dark:text-secondary dark:border-gray-700/50 dark:hover:bg-gray-700/95"
            >
              {text.home}
            </Link>
            <Link
              to={"/arsip"}
              className="border-solid border-2 rounded-full px-6 p-1 font-bold text-md hover:bg-gray-400/50 hover:border-gray-400/0 text-primary dark:text-secondary dark:border-gray-700/50 dark:hover:bg-gray-700/95"
            >
              {text.archive}
            </Link>
          </div>
        )}
      </div>
      <div className="flex items-center gap-3">
        <button onClick={toggleTheme}>
          {theme === "light" ? (
            <div className="bg-amber-200/50 p-2 flex items-center rounded-lg hover:scale-110 text-amber-500">
              <FiSun size={"1.2em"} title={text.changeClr} />
            </div>
          ) : (
            <div className="bg-gray-400/25 p-2 flex items-center rounded-lg hover:scale-110 text-slate-300">
              <FiMoon size={"1.2em"} title={text.changeClr} />
            </div>
          )}
        </button>
        <button
          onClick={toggleLocalization}
          className="bg-gray-400/25 p-2 flex items-center rounded-lg hover:scale-110"
        >
          {text.flag}
        </button>
        {authUser && (
          <button
            className="bg-gray-400/25 p-2 flex items-center rounded-lg hover:scale-110"
            onClick={() => logout()}
          >
            <div className="text-primary dark:text-slate-300">
              <FiLogOut size={"1.2em"} title={text.logout} />
            </div>
          </button>
        )}
      </div>
    </nav>
  );
};
