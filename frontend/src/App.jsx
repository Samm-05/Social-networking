import { useState } from "react";

import Landing from "./pages/Landing";
import Feed from "./pages/Feed";
import Connections from "./pages/Connections";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";

import Navbar from "./components/Navbar";
import "./styles/app.css";

export default function App() {
  // user starts NOT logged in
  const [loggedIn] = useState(true);
  const [page, setPage] = useState("feed");

  // BEFORE signup/login → Landing page
  if (!loggedIn) {
    return <Landing />;
  }

  // AFTER signup/login → App
  return (
    <>
      <Navbar setPage={setPage} />
      {page === "feed" && <Feed />}
      {page === "connections" && <Connections />}
      {page === "chat" && <Chat />}
      {page === "profile" && <Profile />}
    </>
  );
}
