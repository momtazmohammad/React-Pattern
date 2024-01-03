import React from "react";
import { useState, useEffect } from "react";
import "./chat.css";
import io from "socket.io-client";

const socket = io("localhost:5000");

export default function Chat() {
  //var socket = io.connect("http://localhost:5000");
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState("");
  const [feedback, setFeedback] = useState("");
  const [messages, setmessages] = useState([]);

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
    });
    socket.on("disconnect", () => {
      setIsConnected(false);
    });
    socket.on("chat", function (data) {
      setFeedback("");
      setmessages((cur) => [...cur, data]);
    });

    socket.on("typing", function (data) {
      setFeedback(data);
    });
    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("chat");
      socket.off("typing");
    };
  }, []);

  return (
    <div>
      <div id="chat-room">
        <h2 style={{ padding: "10px 20px", color: "#575ed8" }}>
          Chat Room {isConnected ? "connected" : "disconnected"}
        </h2>
        <div id="chat-window">
          <div id="output">
            {messages.map((item, index) => (
              <p key={index}>
                <strong>{item.user} </strong>
                {item.message}
              </p>
            ))}
          </div>
          <div id="feedback">
            <p>{feedback && <em>{feedback} is typing...</em>}</p>
          </div>
        </div>
        <input
          className="chat-input"
          type="text"
          placeholder="User"
          value={user}
          onChange={({ target }) => setUser(target.value)}
        />
        <input
          className="chat-input"
          value={message}
          type="text"
          placeholder="Message"
          onChange={({ target }) => {
            setMessage(target.value);
            socket.emit("typing", user);
          }}
        />
        <button
          className="chat-button"
          onClick={() => {
            socket.emit("chat", {
              message: message,
              user: user,
            });
            setMessage("");
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
