import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../image/Logo.svg";
import { AuthorizationContext } from "../contexts/LocaleContext";
import { LocalizationContext } from "../contexts/LocaleContext";
import { ThemeContext } from "../contexts/LocaleContext";
import { useLocalization } from "../hooks/useLocalization";

export const NavigationBar = () => {
  const { authUser, setAuthUser } = useContext(AuthorizationContext);
  const { toggleLocalization } = useContext(LocalizationContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const text = useLocalization("navigationBar");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthUser(null);
    navigate("/");
  };

  return (
    <nav className="flex justify-between px-8 md:px-16 py-4 border-b-2 border-slate-300">
      <div className="flex">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="flex">
        <Link
          to={"/arsip"}
          className="border-solid border-4 rounded-full px-5 p-1 font-bold text-md hover:bg-green-500 hover:border-green-500 hover:text-white"
        >
          Arsip
        </Link>
      </div>
    </nav>
  );
};
