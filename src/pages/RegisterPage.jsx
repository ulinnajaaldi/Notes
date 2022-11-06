import React from "react";
import { Link } from "react-router-dom";
import GambarUtama from "../image/GambarUtama.svg";
import { useLocalization } from "../hooks/useLocalization";
import { useNavigate } from "react-router-dom";
import { useInput } from "../hooks/useInput";
import { register } from "../utils/network-data";

export const RegisterPage = () => {
  const [name, setName] = useInput("");
  const [email, setEMail] = useInput("");
  const [password, setPassword] = useInput("");
  const [confirmPassword, setConfirmPassword] = useInput("");
  const navigate = useNavigate();
  const text = useLocalization("registerPage");

  const signUp = async (addUser) => {
    const { error } = await register(addUser);

    if (!error) {
      navigate("/login");
    }
  };

  return (
    <div>
      <section className="mt-5 flex justify-center gap-32">
        <div className="text-center md:relative md:scale-100 md:visible invisible absolute scale-0">
          <img src={GambarUtama} alt="gambar-utama" />
          <h1 className="font-bold text-5xl w-96 text-primary dark:text-secondary">
            {text.heroTitle}
          </h1>
          <h3 className="font-bold text-2xl mt-6 text-primary dark:text-secondary">
            {text.heroText}
          </h3>
        </div>
        <div className="md:w-96 md:mt-16 w-80 mt-10">
          <div className="md:absolute md:scale-0 text-primary dark:text-secondary">
            <h3 className="font-bold text-2xl">{text.registerLabel}</h3>
            <p className="font-semibold">{text.registerText}</p>
          </div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              if (password === confirmPassword) {
                signUp({ name, email, password });
              } else {
                alert(`${text.passwordAlert}`);
              }
            }}
          >
            <div className="block mx-auto mt-5">
              <label className=" block text-sm font-medium text-primary dark:text-secondary">
                {text.labelName}
              </label>
              <input
                type="text"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 text-primary dark:bg-gray-600 dark:text-secondary"
                placeholder={text.namePlaceholder}
                value={name}
                onChange={setName}
                required
              />
            </div>
            <div className="block mx-auto mt-5">
              <label className=" block text-sm font-medium text-primary dark:text-secondary">
                Email
              </label>
              <input
                type="email"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 text-primary dark:bg-gray-600 dark:text-secondary"
                placeholder={text.emailPlaceholder}
                value={email}
                onChange={setEMail}
                required
              />
            </div>
            <div className="block mx-auto mt-5">
              <label className=" block text-sm font-medium text-primary dark:text-secondary">
                Password
              </label>
              <input
                type="password"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 text-primary dark:bg-gray-600 dark:text-secondary"
                placeholder={text.passwordPlaceholder}
                value={password}
                onChange={setPassword}
                required
              />
            </div>
            <div className="block mx-auto mt-5">
              <label className=" block text-sm font-medium text-primary dark:text-secondary">
                {text.confirmPassword}
              </label>
              <input
                type="password"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 text-primary dark:bg-gray-600 dark:text-secondary"
                placeholder={text.passwordConfPlaceholder}
                value={confirmPassword}
                onChange={setConfirmPassword}
                required
              />
            </div>
            <div className="grid place-items-end mt-5">
              <button
                type="submit"
                className="bg-cyan-300  hover:bg-cyan-500 w-40 h-9 drop-shadow-lg font-semibold text-base rounded-md text-primary dark:text-secondary dark:bg-cyan-500"
              >
                {text.registerBtn}
              </button>
            </div>
          </form>
          <p className="mt-5 text-end font-light text-primary dark:text-secondary">
            {text.accountAsk}
            <Link
              to={"/login"}
              className="text-blue-600 font-normal dark:text-cyan-500"
            >
              {text.loginAsk}
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};
