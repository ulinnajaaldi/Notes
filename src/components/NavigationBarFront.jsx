import React, { useContext } from "react";
import Logo from "../image/Logo.svg";
import {
  AuthorizationContext,
  LocalizationContext,
} from "../contexts/LocaleContext";
import { useLocalization } from "../hooks/useLocalization";
import { ThemeContext } from "../contexts/LocaleContext";
import { FaMoon, FaSun } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
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
    <nav className="flex justify-between items-center px-8 md:px-16 py-4 border-b-2 border-slate-300">
      <div className="flex">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="flex items-center">
        {authUser && (
          <Link
            to={"/arsip"}
            className="border-solid border-4 rounded-full px-5 p-1 font-bold text-md hover:bg-green-500 hover:border-green-500 hover:text-white"
          >
            Arsip
          </Link>
        )}
      </div>
      <div className="flex items-center gap-4">
        <button onClick={toggleLocalization}>{text.flag}</button>
        <button onClick={toggleTheme}>
          {theme === "light" ? <FaSun /> : <FaMoon />}
        </button>
        {authUser && (
          <button onClick={() => logout()}>
            <FiLogOut />
          </button>
        )}
      </div>
    </nav>
  );
};
