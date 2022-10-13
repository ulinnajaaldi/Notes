import React from "react";
import PropTypes from "prop-types";
import Kosong from "../image/Kosong.svg";

export const NoteEmpty = ({ className }) => {
  return (
    <div className={className}>
      <section class="mt-20">
        <img src={Kosong} alt="Kosong" className="flex items-center m-auto" />
        <div className="flex flex-col items-center">
          <h3 className="font-bold text-lg">Tidak ada catatan di sini...</h3>
          <p className="text-sm text-center">
            Tambahkan catatan dan dapatkan mengatur diri <br />
            Anda dengan cara terbaik!
          </p>
        </div>
      </section>
    </div>
  );
};

NoteEmpty.propTypes = {
  className: PropTypes.string,
};
