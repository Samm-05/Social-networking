export default function Connections() {
  return (
    <div className="page">
      <h1>Your Connections</h1>

      <div className="card">
        <h3>Ananya · IT · 3rd Year</h3>
        <button>Message</button>
      </div>

      <div className="card">
        <h3>Pending Request</h3>
        <button>Accept</button>
        <button className="danger">Reject</button>
      </div>
    </div>
  );
}
