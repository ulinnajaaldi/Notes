/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NoteEmpty } from "../components/NoteEmpty";
import { NoteDetail } from "../components/NoteDetail";
import { getNote } from "../utils/network-data";
import { OnLoading } from "../components/OnLoading";

export const DetailPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getNoteHandler = async () => {
    try {
      setLoading(true);
      const { error, data } = await getNote(id);
      if (!error) {
        setData(data);
      }
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
    setLoading(false);
  };

  useEffect(() => {
    getNoteHandler();
  }, []);

  return (
    <>
      {loading ? (
        <OnLoading />
      ) : (
        <div>
          {!data ? (
            <NoteEmpty className="absolute top-72 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          ) : (
            !!data && <NoteDetail note={data} />
          )}
        </div>
      )}
    </>
  );
};
