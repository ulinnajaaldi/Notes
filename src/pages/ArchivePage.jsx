import React, { useState, useEffect } from "react";
import { NavigationBarHome } from "../components/NavigationBarHome";
import { NoteEmpty } from "../components/NoteEmpty";

export const ArchivePage = () => {
  return (
    <div>
      <NavigationBarHome />
      <NoteEmpty />
    </div>
  );
};
