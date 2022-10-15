import React, { useState, useEffect } from "react";
import { getActiveNotes, deleteNote, archiveNote } from "../utils/local-data";
import { NavigationBar } from "../components/NavigationBar";
import { useSearchParams } from "react-router-dom";
import { NoteCard } from "../components/NoteCard";
import { NoteEmpty } from "../components/NoteEmpty";
import { NoteSearch } from "../components/NoteSearch";
import { AddNote } from "../components/AddNote";

export const LandingPage = () => {
  const [data, setData] = useState([]);
  const [statusName, setStatusName] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const title = searchParams.get("title") || "";

  const setSearchParamsHandler = (title) => {
    setSearchParams({ title });
  };

  useEffect(() => {
    setStatusName("note");
    if (!title) {
      setData(getActiveNotes());
    } else {
      setData(
        getActiveNotes().filter((note) =>
          note.title.toLowerCase().includes(title.toLowerCase())
        )
      );
    }
  }, [title]);

  return (
    <div>
      <NavigationBar />

      <h1 className="mx-8 md:mx-16 text-center font-bold text-3xl mt-5 text-amber-400 ">
        Daftar Catatan
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
              onChangeArchiveStatus={archiveNote}
              onDelete={deleteNote}
              setData={setData}
              getActiveNotes={getActiveNotes}
            />
          ))
        )}
      </div>
      <AddNote />
    </div>
  );
};
