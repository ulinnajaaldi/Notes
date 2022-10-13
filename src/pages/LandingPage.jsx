import React, { useState, useEffect } from "react";
import { NavigationBar } from "../components/NavigationBar";
import { getArchivedNotes, deleteNote, archiveNote } from "../utils/local-data";
import { NoteCard } from "../components/NoteCard";

export const LandingPage = () => {
  return <NavigationBar />;
};
