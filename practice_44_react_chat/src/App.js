import logo from "./logo.svg";
import "./App.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io.connect("http://localhost:8000");

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  // useEffect(() => {
  //   socket.on

  // }, [socket]);

  const handleChangeInputMessage = (event) => {
    // console.log(e.target.value);
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message !== "") {
      socket.emit("message", message);
    } else {
      alert("Please enter message");
    }
  };

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages, socket]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <ul>
            {messages.map((msg, index) => (
              <li key={index}>{msg}</li>
            ))}
          </ul>
        </div>
        <input
          type="text"
          onChange={(event) => handleChangeInputMessage(event)}
        />
        <button onClick={() => handleSendMessage()}>Send Message</button>
      </header>
    </div>
  );
}

export default App;
