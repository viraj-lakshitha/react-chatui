import Message from "../../component/message/Message";
import { useEffect, useRef, useState } from "react";
import { getChatHistory, USER } from "../../mock-data/Chat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import "./Chat.scss";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const bottomRef = useRef(null);

  const handleSend = (e) => {
    if (newMessage !== null && newMessage !== "") {
      const nm = {
        message: newMessage,
        timestamp: "",
        sender: USER,
      };
      setMessages([...messages, nm]);
      resetInput();
    }
  };

  const resetInput = (e) => {
    setNewMessage("");
  };

  const handleOnKeyDown = (e) => {
    if (e?.key === "Enter") {
      handleSend(e)
    }
  };

  useEffect(() => {
    setMessages([...getChatHistory()?.history]);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-screen w-100 d-flex flex-column justify-content-between">
      <div className="chat-screen-messages p-3">
        {messages?.map((message, idx) => (
          <Message key={idx} data={message} />
        ))}
        <div ref={bottomRef} />
      </div>
      <div className="chat-screen-engage align-items-center px-3 d-flex flex-row">
        <input
          type="text"
          className="chat-screen-engage-input me-3 px-3"
          placeholder="Enter your message"
          onChange={(e) => setNewMessage(e?.target?.value)}
          onKeyDown={(e) => handleOnKeyDown(e)}
          value={newMessage}
        />
        <button
          onClick={(e) => handleSend(e)}
          className="chat-screen-engage-submit btn btn-primary d-flex justify-content-center align-items-center"
        >
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </div>
  );
};

export default Chat;
