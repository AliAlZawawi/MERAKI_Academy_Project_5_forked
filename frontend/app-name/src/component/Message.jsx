import React, { useState, useEffect } from "react";
import "./Message.css";

const Message = ({ socket, user_id }) => {
  const [to, setTo] = useState("");
  const [message, setMessage] = useState("");
  const [allMessages, setAllMessages] = useState([]);

  useEffect(() => {
    const receiveMessage = (data) => {
      setAllMessages((prev) => [...prev, data]);
    };

    socket.on("message", receiveMessage);

    return () => {
      socket.off("message", receiveMessage);
    };
  }, [socket]);

  const sendMessage = () => {
    if (!message || !to) return;

    socket.emit("message", {
      to,
      from: user_id,
      message,
    });

    setMessage("");
  };

  return (
  <div className="chat-container">
    <h2 className="chat-title">Messages</h2>

    <div className="chat-box">
      {allMessages.map((msg, index) => (
        <div
          key={index}
          className={`chat-message ${
            msg.from === user_id ? "sent" : "received"
          }`}
        >
          <span className="chat-user">{msg.from}</span>
          <p>{msg.message}</p>
        </div>
      ))}
    </div>

    <div className="chat-inputs">
      <input
        type="text"
        placeholder="Message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <input
        type="text"
        placeholder="To (user id)"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />

      <button onClick={sendMessage}>Send</button>
    </div>
  </div>
);
}

export default Message
