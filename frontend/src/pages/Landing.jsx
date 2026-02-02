import "../styles/landing.css";

export default function Landing({ onJoin }) {
  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">CampusConnect</div>

        {/* ✅ JOIN NOW BUTTON CONNECTED */}
        <button className="nav-btn" onClick={onJoin}>
          Join Now
        </button>
      </nav>

      {/* HERO (CENTERED) */}
      <section className="hero">

        <span className="badge fade-in">
          🎓 Verified College Network
        </span>

        <h1 className="hero-title glow-text slide-up">
          Your College.<br />
          Your Private Social Network.
        </h1>

        <p className="hero-subtitle fade-in-delay">
          A secure social networking platform exclusively for verified college students.
          Share posts, build connections, and chat privately — only after mutual connection.
        </p>

        <div className="hero-actions fade-in-delay-2">
          {/* ✅ ALSO CONNECT THIS BUTTON */}
          <button className="btn-primary" onClick={onJoin}>
            Get Started
          </button>

          <button className="btn-outline">
            Learn More
          </button>
        </div>

        <div className="hero-glow"></div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2 className="section-title">What CampusConnect Offers</h2>

        <div className="features-grid">
          <div className="feature-card">
            🔐
            <h3>College-Only Access</h3>
            <p>Users can join only using verified college email or ID.</p>
          </div>

          <div className="feature-card">
            📰
            <h3>Campus Feed</h3>
            <p>Post text, images, and videos visible only within your college.</p>
          </div>

          <div className="feature-card">
            🤝
            <h3>Connection Requests</h3>
            <p>Send, accept, or reject connection requests.</p>
          </div>

          <div className="feature-card">
            💬
            <h3>Private Chat</h3>
            <p>One-to-one chat enabled only after mutual connection.</p>
          </div>

          <div className="feature-card">
            📂
            <h3>Chat History</h3>
            <p>Secure message history visible only to connected users.</p>
          </div>

          <div className="feature-card">
            🧑‍💼
            <h3>Profile & Connections</h3>
            <p>Manage your profile and list of college connections.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 CampusConnect · College-Only Social Network
      </footer>

    </div>
  );
}
