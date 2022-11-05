import React from "react";
import { BsTrash } from "react-icons/bs";
import PropTypes from "prop-types";
import { deleteNote } from "../utils/network-data";
import { useLocalization } from "../hooks/useLocalization";

export const NoteDelete = ({
  id,
  getActiveNotes,
  getArchivedNotes,
  statusName,
}) => {
  const text = useLocalization("noteDelete");

  const noteDeleteHandler = async (id) => {
    try {
      await deleteNote(id);
      if (statusName === "note") {
        getActiveNotes();
      } else {
        getArchivedNotes();
      }
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  };

  return (
    <div>
      <button
        title={text.delete}
        className="p-2 rounded-lg bg-red-400 hover:bg-red-500 text-white "
        onClick={(event) => {
          event.stopPropagation();
          noteDeleteHandler(id);
        }}
      >
        <BsTrash size={20} />
      </button>
    </div>
  );
};

NoteDelete.propTypes = {
  id: PropTypes.string.isRequired,
  getActiveNotes: PropTypes.func,
  getArchivedNotes: PropTypes.func,
  statusName: PropTypes.string.isRequired,
};
