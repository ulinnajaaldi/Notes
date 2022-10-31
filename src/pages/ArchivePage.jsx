/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { NavigationBarHome } from "../components/NavigationBarHome";
import { NoteCard } from "../components/NoteCard";
import { NoteEmpty } from "../components/NoteEmpty";
import { NoteSearch } from "../components/NoteSearch";
import { AddNote } from "../components/AddNote";
import { getArchivedNotes } from "../utils/network-data";
import { OnLoading } from "../components/OnLoading";
import { useLocalization } from "../hooks/useLocalization";

export const ArchivePage = () => {
  const [data, setData] = useState([]);
  const [initialData, setInitialData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusName, setStatusName] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const title = searchParams.get("title") || "";

  const text = useLocalization("archivePage");

  const setSearchParamsHandler = (title) => {
    setSearchParams({ title });
  };

  const getArchiveNotesHandler = async () => {
    try {
      setLoading(true);
      const { error, data } = await getArchivedNotes();
      if (!error) {
        setData(data);
        setInitialData(true);
      }
    } catch (error) {
      throw new Error(`ErrorL ${error}`);
    }
    setLoading(false);
  };

  useEffect(() => {
    setStatusName("archived");
    if (!initialData) {
      getArchiveNotesHandler();
    }

    if (initialData) {
      let tempData = [...data];
      if (!title) {
        setData(tempData);
      } else {
        setData(
          tempData.filter((note) =>
            note.title.toLowerCase().includes(title.toLowerCase())
          )
        );
      }
    }
  }, [title]);

  return (
    <div>
      <NavigationBarHome />

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
                getArchivedNotes={getArchiveNotesHandler}
              />
            ))
          )}
        </div>
      )}
      <AddNote />
    </div>
  );
};
