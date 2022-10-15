import React, { useState } from "react";
import { NavigationBarHome } from "../components/NavigationBarHome";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/local-data";
import { AiOutlineCheck } from "react-icons/ai";

export const AddNotePage = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const navigate = useNavigate();

  return (
    <div>
      <NavigationBarHome />

      <h1 className="mx-8 md:mx-16 text-center font-bold text-3xl mt-5 text-amber-400 ">
        Tambah Catatan Baru
      </h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          addNote({
            title: title,
            body: body,
          });
          navigate("/");
          setTitle("");
          setBody("");
        }}
      >
        <div className="mx-8 md:mx-16">
          <div className="my-5">
            <input
              className="w-full text-lg font-semibold px-6 py-4 rounded-xl text-slate-500 bg-slate-50 border-2 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-slate-400 "
              type="text"
              name="title"
              placeholder="Judul.."
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
            />
          </div>

          <div>
            <textarea
              className="w-full text-lg px-6 min-h-[330px] py-4 rounded-xl text-slate-500 bg-slate-50 border-2 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-slate-400 "
              placeholder="Isi.."
              value={body}
              onChange={(event) => {
                setBody(event.target.value);
              }}
            ></textarea>
          </div>
        </div>
        <div className="fixed right-0 bottom-0 z-50">
          <button className="p-3 mx-8 md:mx-16 my-6 rounded-full text-white bg-sky-400 hover:bg-sky-500 drop-shadow-lg">
            <AiOutlineCheck size={25} title="Simpan" />
          </button>
        </div>
      </form>
    </div>
  );
};
