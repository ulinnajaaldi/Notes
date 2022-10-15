import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

export const AddNote = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed right-0 bottom-0 z-50">
      <button
        className="p-3 mx-8 md:mx-16 my-6 rounded-full text-white bg-sky-400 hover:bg-sky-500 drop-shadow-lg"
        onClick={() => navigate("/notes/new")}
      >
        <AiOutlinePlus size={25} title="Tambah Note" />
      </button>
    </div>
  );
};
