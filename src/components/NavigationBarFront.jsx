import React, { useContext } from "react";
import Logo from "../image/Logo.svg";
import { IoLanguageOutline } from "react-icons/io5";
import {
  AuthorizationContext,
  LocalizationContext,
} from "../contexts/LocaleContext";
import { useLocalization } from "../hooks/useLocalization";

export const NavigationBarFront = () => {
  //   const { authUser, setAuthUser } = useContext(AuthorizationContext);
  const { toggleLocalization } = useContext(LocalizationContext);
  const text = useLocalization("navFront");

  return (
    <nav className="flex justify-between items-center px-8 md:px-16 py-4 border-b-2 border-slate-300">
      <div className="flex">
        <img src={Logo} alt="Logo" />
      </div>
      <div>
        <button
          onClick={toggleLocalization}
          className="flex items-center gap-3"
        >
          <IoLanguageOutline size={20} />
          {text.language}
        </button>
      </div>
    </nav>
  );
};
