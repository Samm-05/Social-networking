export default function Navbar({ setPage }) {
  return (
    <nav className="app-navbar">
      <h2>CampusConnect</h2>

      <div className="nav-links">
        <button onClick={() => setPage("feed")}>Feed</button>
        <button onClick={() => setPage("connections")}>Connections</button>
        <button onClick={() => setPage("chat")}>Chat</button>
        <button onClick={() => setPage("profile")}>Profile</button>
      </div>
    </nav>
  );
}
