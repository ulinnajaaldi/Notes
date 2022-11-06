import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { useLocalization } from "../hooks/useLocalization";

export const AddNote = () => {
  const navigate = useNavigate();
  const text = useLocalization("addNote");
  return (
    <div className="fixed right-0 bottom-0 z-50">
      <button
        className="p-3 mx-8 md:mx-16 my-6 rounded-full text-white bg-sky-400 hover:bg-sky-500 drop-shadow-lg"
        onClick={() => navigate("/new")}
      >
        <AiOutlinePlus size={25} title={text.add} />
      </button>
    </div>
  );
};
