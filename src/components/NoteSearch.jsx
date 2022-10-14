import React from "react";
import PropTypes from "prop-types";

export const NoteSearch = ({ title, setSearchParamsHandler }) => {
  return (
    <div className="flex justify-end">
      <input
        type="text"
        className="w-full mx-8 md:mx-16 mt-6 px-6 py-3 bg-slate-50 border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-amber-500 block rounded-full sm:text-sm focus:ring-1 text-slate-500 "
        placeholder="Cari catatan disini..."
        name="search"
        value={title}
        onChange={(event) => setSearchParamsHandler(event.target.value)}
      />
    </div>
  );
};

NoteSearch.propTypes = {
  title: PropTypes.string.isRequired,
  setSearchParamsHandler: PropTypes.func.isRequired,
};
