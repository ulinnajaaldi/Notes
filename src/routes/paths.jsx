import { RoutesProtected } from "../layouts/RoutesProtected";
import { AddNotePage } from "../pages/AddNotePage";
import { ArchivePage } from "../pages/ArchivePage";
import { DetailPage } from "../pages/DetailPage";
import { LandingPage } from "../pages/LandingPage";
import { PageEmpty } from "../components/PageEmpty";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

export const path = [
  {
    path: "/",
    element: (
      <RoutesProtected mode="auth">
        <LandingPage />
      </RoutesProtected>
    ),
  },
  {
    path: "/arsip",
    element: (
      <RoutesProtected mode="auth">
        <ArchivePage />
      </RoutesProtected>
    ),
  },
  {
    path: "/new",
    element: (
      <RoutesProtected mode="auth">
        <AddNotePage />
      </RoutesProtected>
    ),
  },
  {
    path: "/notes/:id",
    element: (
      <RoutesProtected mode="auth">
        <DetailPage />
      </RoutesProtected>
    ),
  },
  {
    path: "/*",
    element: <PageEmpty />,
  },
  {
    path: "/login",
    element: (
      <RoutesProtected mode="public">
        <LoginPage />
      </RoutesProtected>
    ),
  },
  {
    path: "/register",
    element: (
      <RoutesProtected mode="public">
        <RegisterPage />
      </RoutesProtected>
    ),
  },
];
