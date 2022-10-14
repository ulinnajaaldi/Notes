import React from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { ArchivePage } from "./pages/ArchivePage";
import { DetailPage } from "./pages/DetailPage";

export const App = () => {
  const paths = [
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/arsip",
      element: <ArchivePage />,
    },
    {
      path: "/detail/:id",
      element: <DetailPage />,
    },
  ];

  return (
    <>
      <Routes>
        {paths.map((item, index) => (
          <Route key={index} {...item} />
        ))}
      </Routes>
    </>
  );
};
