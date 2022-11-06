import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/network-data";
import { AiOutlineCheck } from "react-icons/ai";
import { useInput } from "../hooks/useInput";
import { useLocalization } from "../hooks/useLocalization";

export const AddNotePage = () => {
  const [title, setTitle] = useInput("");
  const [body, setBody] = useState("");

  const navigate = useNavigate();
  const text = useLocalization("addNotePage");

  const addNoteHandler = async (note) => {
    try {
      const { error } = await addNote(note);

      if (!error) {
        navigate("/");
      }
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  };

  return (
    <div>
      <h1 className="mx-8 md:mx-16 text-center font-bold text-3xl mt-5 text-amber-400 ">
        {text.header}
      </h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          addNoteHandler({
            title: title,
            body: body,
          });
        }}
      >
        <div className="mx-8 md:mx-16">
          <div className="my-5">
            <input
              className="w-full text-lg font-semibold px-6 py-4 rounded-xl text-slate-500 bg-slate-50 border-2 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-slate-400 dark:bg-gray-600 dark:text-secondary"
              type="text"
              name="title"
              placeholder={text.inputTitlePlaceholder}
              value={title}
              onChange={setTitle}
              required
            />
          </div>

          <div>
            <textarea
              className="w-full text-lg px-6 min-h-[330px] py-4 rounded-xl text-slate-500 bg-slate-50 border-2 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-slate-400 dark:bg-gray-600 dark:text-secondary"
              placeholder={text.inputTextPlaceholder}
              value={body}
              onChange={(event) => {
                setBody(event.target.value);
              }}
            ></textarea>
          </div>
        </div>
        <div className="fixed right-0 bottom-0 z-50">
          <button className="p-3 mx-8 md:mx-16 my-6 rounded-full text-white bg-sky-400 hover:bg-sky-500 drop-shadow-lg">
            <AiOutlineCheck size={25} title={text.save} />
          </button>
        </div>
      </form>
    </div>
  );
};
