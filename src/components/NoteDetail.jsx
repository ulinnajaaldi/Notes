import React from "react";
import { showFormattedDate } from "../utils/showFormattedDate";
import parser from "html-react-parser";
import PropTypes from "prop-types";
import { LocalizationContext } from "../contexts/LocaleContext";

export const NoteDetail = ({ note }) => {
  const { title, createdAt, body } = note;
  const { localization } = React.useContext(LocalizationContext);
  const language = localization === "id" ? "en" : "id";

  return (
    <div>
      <div className="rounded-xl p-12 bg-amber-400 m-16 text-white ">
        <div className="flex items-center justify-between">
          <h1 className="my-5 font-bold text-6xl ">{title}</h1>
          <p className="text-xl">{showFormattedDate(createdAt, language)}</p>
        </div>
        <p className="mt-2 text-xl leading-10">{parser(body)}</p>
      </div>
    </div>
  );
};

NoteDetail.propTypes = {
  note: PropTypes.object.isRequired,
};
