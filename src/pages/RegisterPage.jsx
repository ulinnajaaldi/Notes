import React from "react";
import { Link } from "react-router-dom";
import { NavigationBarFront } from "../components/NavigationBarFront";
import GambarUtama from "../image/GambarUtama.svg";
import { useLocalization } from "../hooks/useLocalization";

export const RegisterPage = () => {
  const text = useLocalization("registerPage");

  return (
    <div>
      <NavigationBarFront />
      <section className="mt-5 flex justify-center gap-32" data-aos="zoom-in">
        <div className="text-center">
          <img src={GambarUtama} alt="gambar-utama" />
          <h1 className="font-bold text-5xl w-96">{text.heroTitle}</h1>
          <h3 className="font-bold text-2xl mt-6">{text.heroText}</h3>
        </div>
        <div className="w-96 mt-14">
          <form>
            <div className="block mx-auto mt-5">
              <label className=" block text-sm font-medium text-slate-700">
                {text.labelName}
              </label>
              <input
                type="text"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder={text.namePlaceholder}
                required
              />
            </div>
            <div className="block mx-auto mt-5">
              <label className=" block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder={text.emailPlaceholder}
                required
              />
            </div>
            <div className="block mx-auto mt-5">
              <label className=" block text-sm font-medium text-slate-700">
                Password
              </label>
              <input
                type="password"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder={text.passwordPlaceholder}
                required
              />
            </div>
            <div className="block mx-auto mt-5">
              <label className=" block text-sm font-medium text-slate-700">
                {text.confirmPassword}
              </label>
              <input
                type="password"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder={text.passwordConfPlaceholder}
                required
              />
            </div>
            <div className="grid place-items-end mt-5">
              <button className="bg-cyan-300  hover:bg-cyan-500 w-40 h-9 drop-shadow-lg font-semibold text-base rounded-md ">
                {text.registerBtn}
              </button>
            </div>
          </form>
          <p className="mt-5 text-end font-light">
            {text.accountAsk}
            <Link to={"/login"} className="text-blue-600 font-normal">
              {text.loginAsk}
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};
