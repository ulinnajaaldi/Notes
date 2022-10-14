import React from "react";
import { BsTrash } from "react-icons/bs";
import PropTypes from "prop-types";

export const NoteDelete = ({
  id,
  onDelete,
  setData,
  getActiveNotes,
  getArchivedNotes,
  statusName,
}) => {
  return (
    <div>
      <button
        title="Hapus"
        className="p-2 rounded-lg bg-red-400 hover:bg-red-500 text-white "
        onClick={(event) => {
          event.stopPropagation();
          if (statusName === "note") {
            onDelete(id);
            setData(getActiveNotes);
          } else {
            onDelete(id);
            setData(getArchivedNotes);
          }
        }}
      >
        <BsTrash size={20} />
      </button>
    </div>
  );
};

NoteDelete.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired,
  getActiveNotes: PropTypes.func,
  getArchivedNotes: PropTypes.func,
  statusName: PropTypes.string.isRequired,
};
