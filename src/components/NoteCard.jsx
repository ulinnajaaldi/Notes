import React from "react";
import { showFormattedDate } from "../utils";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import parser from "html-react-parser";

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
    <div>
      <p>{showFormattedDate(createdAt)}</p>
      <h1 className="font-bold">{title}</h1>
      <p>{parser(body)}</p>
    </div>
  );
};
