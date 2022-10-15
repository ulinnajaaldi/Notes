import React from "react";
import { useNavigate } from "react-router-dom";
import parser from "html-react-parser";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";
import { BsFolderCheck, BsFolderX } from "react-icons/bs";
import { NoteDelete } from "./NoteDelete";

export const NoteCard = ({
  note,
  statusName,
  onDelete,
  onChangeArchiveStatus,
  setData,
  getActiveNotes,
  getArchivedNotes,
}) => {
  const { id, title, body, createdAt } = note;
  const navigate = useNavigate();
  return (
    <div className="relative group h-fit">
      <div className="bg-amber-400 max-w-[450px] xl:min-h-[250px] lg:min-h-[300px] md:min-h-[280px] min-h-[300px] rounded-lg items-center m-auto p-5 text-white relative drop-shadow-md">
        <div className="flex justify-between items-center font-bold">
          <h1
            className="text-base cursor-pointer hover:underline"
            onClick={() => {
              navigate(`/notes/${id}`);
            }}
          >
            {title}
          </h1>
          <p className="text-sm">{showFormattedDate(createdAt)}</p>
        </div>

        <div className="flex flex-col">
          <p className="mt-3 text-sm">
            {parser(body)}
            <br />
            <br />
            <br />
          </p>
          <div className="absolute bottom-0 right-0 p-5">
            <div className="flex gap-2">
              <NoteDelete
                id={id}
                onDelete={onDelete}
                setData={setData}
                getActiveNotes={getActiveNotes}
                getArchivedNotes={getArchivedNotes}
                statusName={statusName}
              />
              <button
                className={`p-2 rounded-lg ${
                  statusName === "note"
                    ? "bg-emerald-500 hover:bg-emerald-600 "
                    : "bg-teal-500 hover:bg-teal-600 "
                }`}
                onClick={(event) => {
                  event.stopPropagation();
                  if (statusName === "note") {
                    onChangeArchiveStatus(id);
                    setData(getActiveNotes);
                  } else {
                    onChangeArchiveStatus(id);
                    setData(getArchivedNotes);
                  }
                }}
              >
                <span className="flex justify-center items-center">
                  {statusName === "note" ? (
                    <div>
                      <BsFolderCheck size={20} title="Arsip" />
                    </div>
                  ) : (
                    <div>
                      <BsFolderX size={20} title="Batalkan Arsip" />
                    </div>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

NoteCard.propTypes = {
  note: PropTypes.object.isRequired,
  statusName: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onChangeArchiveStatus: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired,
  getActiveNotes: PropTypes.func,
  getArchivedNotes: PropTypes.func,
};
