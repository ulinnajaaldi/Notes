import React from "react";
import { useNavigate } from "react-router-dom";
import { BsFillBackspaceFill } from "react-icons/bs";
import { useLocalization } from "../hooks/useLocalization";

export const PageEmpty = () => {
  const navigate = useNavigate();
  const text = useLocalization("pageEmpty");

  return (
    <section className="flex items-center h-full p-16 ">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center ">
          <h2 className="mb-8 font-extrabold text-9xl text-slate-500">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl text-slate-500">
            {text.opps}
          </p>
          <p className="m-4  text-gray-400">{text.massage}</p>
          <button
            className="flex items-center gap-3 m-auto bg-emerald-500 hover:bg-emerald-400 drop-shadow-lg px-4 py-2 rounded-full text-white"
            onClick={() => navigate(-1)}
          >
            <p className="font-semibold text-lg">Kembali</p>
            <BsFillBackspaceFill size={25} />
          </button>
        </div>
      </div>
    </section>
  );
};
