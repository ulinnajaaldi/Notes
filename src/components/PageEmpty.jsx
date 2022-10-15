import React from "react";
import { useNavigate } from "react-router-dom";
import { BsFillBackspaceFill } from "react-icons/bs";

export const PageEmpty = () => {
  const navigate = useNavigate();
  return (
    <section class="flex items-center h-full p-16 ">
      <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div class="max-w-md text-center ">
          <h2 class="mb-8 font-extrabold text-9xl text-slate-500">
            <span class="sr-only">Error</span>404
          </h2>
          <p class="text-2xl font-semibold md:text-3xl text-slate-500">
            Opps, kami tidak dapat menemukan halaman ini.
          </p>
          <p class="m-4  text-gray-400">
            Tapi jangan khawatir, Anda dapat menemukan banyak hal lain di
            beranda kami.
          </p>
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
