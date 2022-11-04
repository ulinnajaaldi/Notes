/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { NoteCard } from "../components/NoteCard";
import { NoteEmpty } from "../components/NoteEmpty";
import { NoteSearch } from "../components/NoteSearch";
import { AddNote } from "../components/AddNote";
import { getActiveNotes } from "../utils/network-data";
import { OnLoading } from "../components/OnLoading";
import { useLocalization } from "../hooks/useLocalization";

export const LandingPage = () => {
  const [data, setData] = useState([]);
  const [initialData, setInitialData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusName, setStatusName] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get("title") || "";
  const setSearchParamsHandler = (title) => {
    setSearchParams({ title });
  };

  const text = useLocalization("landingPage");

  const activeNotesHandler = async () => {
    try {
      setLoading(true);
      const { error, data } = await getActiveNotes();

      if (!error) {
        setData(data);
        setInitialData(true);
      }
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
    setLoading(false);
  };

  useEffect(() => {
    setStatusName("note");
    if (!initialData) {
      activeNotesHandler();
    }

    if (initialData) {
      let tempData = [...data];
      if (!title) {
        activeNotesHandler();
      } else {
        setData(
          tempData.filter((note) =>
            note.title.toLowerCase().include(title.toLowerCase)
          )
        );
      }
    }
  }, [title]);

  return (
    <div>
      <h1 className="mx-8 md:mx-16 text-center font-bold text-3xl mt-5 text-amber-400 ">
        {text.header}
      </h1>

      <NoteSearch
        title={title}
        setSearchParamsHandler={setSearchParamsHandler}
      />

      {loading ? (
        <OnLoading />
      ) : (
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
                getActiveNotes={activeNotesHandler}
              />
            ))
          )}
        </div>
      )}
      <AddNote />
    </div>
  );
};
