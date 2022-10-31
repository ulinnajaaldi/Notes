import React from "react";
import PropTypes from "prop-types";
import Kosong from "../image/Kosong.svg";
import { useLocalization } from "../hooks/useLocalization";

export const NoteEmpty = ({ className }) => {
  const text = useLocalization("noteEmpty");

  return (
    <div className={className}>
      <section className="mt-20">
        <img src={Kosong} alt="Kosong" className="flex items-center m-auto" />
        <div className="flex flex-col items-center">
          <h3 className="font-bold text-lg">{text.none}</h3>
          <p className="text-sm text-center">
            {text.p} <br />
            {text.pbr}
          </p>
        </div>
      </section>
    </div>
  );
};

NoteEmpty.propTypes = {
  className: PropTypes.string,
};
