import React from "react";
import { useParams } from "react-router-dom";
import { getNoteId } from "../utils/local-data";
import { NavigationBarHome } from "../components/NavigationBarHome";
import { NoteEmpty } from "../components/NoteEmpty";
import { NoteDetail } from "../components/NoteDetail";

export const DetailPage = () => {
  const { id } = useParams();
  const data = getNoteId(id);

  return (
    <div>
      <NavigationBarHome />
      {!data ? (
        <NoteEmpty className="absolute top-72 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      ) : (
        !!data && <NoteDetail note={data} />
      )}
    </div>
  );
};
