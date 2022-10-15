import React, { useState, useEffect } from "react";
import { NavigationBarHome } from "../components/NavigationBarHome";
import { NoteCard } from "../components/NoteCard";
import { NoteEmpty } from "../components/NoteEmpty";
import { useSearchParams } from "react-router-dom";
import {
  deleteNote,
  getArchivedNotes,
  unarchiveNote,
} from "../utils/local-data";
import { NoteSearch } from "../components/NoteSearch";
import { AddNote } from "../components/AddNote";

export const ArchivePage = () => {
  const archiveNote = getArchivedNotes();
  const [data, setData] = useState(archiveNote);
  const [statusName, setStatusName] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const title = searchParams.get("title") || "";

  const setSearchParamsHandler = (title) => {
    setSearchParams({ title });
  };

  useEffect(() => {
    setStatusName("archived");
    if (!title) {
      setData(getArchivedNotes());
    } else {
      setData(
        getArchivedNotes().filter((note) =>
          note.title.toLowerCase().includes(title.toLowerCase())
        )
      );
    }
  }, [title]);

  return (
    <div>
      <NavigationBarHome />

      <h1 className="mx-8 md:mx-16 text-center font-bold text-3xl mt-5 text-amber-400 ">
        Daftar Catatan Arsip
      </h1>

      <NoteSearch
        title={title}
        setSearchParamsHandler={setSearchParamsHandler}
      />
      <div className="mx-8 md:mx-16 my-6 grid sm:grid-cols-2 md:grid-cols-2 gap-5 lg:grid-cols-3 relative">
        {data.length === 0 ? (
          <NoteEmpty className="absolute top-36 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        ) : (
          !!data &&
          data.map((item, index) => (
            <NoteCard
              key={index}
              note={item}
              statusName={statusName}
              onChangeArchiveStatus={unarchiveNote}
              onDelete={deleteNote}
              setData={setData}
              getArchivedNotes={getArchivedNotes}
            />
          ))
        )}
      </div>
      <AddNote />
    </div>
  );
};
