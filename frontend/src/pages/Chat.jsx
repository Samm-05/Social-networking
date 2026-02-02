import "../styles/chat.css";

export default function Chat() {
  return (
    <div className="chat-page">

      {/* LEFT SIDEBAR */}
      <div className="chat-sidebar">
        <h3>Chats</h3>

        <div className="chat-user active">
          Rahul • CSE
        </div>

        <div className="chat-user">
          Sneha • IT
        </div>

        <div className="chat-user">
          Aman • ECE
        </div>
      </div>

      {/* CHAT MAIN */}
      <div className="chat-main">

        {/* HEADER */}
        <div className="chat-header">
          Rahul • CSE (2nd Year)
        </div>

        {/* MESSAGES */}
        <div className="chat-messages">
          <div className="message other">
            Hey! Are you joining the hackathon?
          </div>

          <div className="message me">
            Yes 😄 I’m in! What about you?
          </div>

          <div className="message other">
            Same! Let’s form a team.
          </div>
        </div>

        {/* INPUT */}
        <div className="chat-input">
          <input placeholder="Type a message..." />
          <button>Send</button>
        </div>

      </div>
    </div>
  );
}
