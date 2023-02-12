import { Avatar } from "@nextui-org/react";
import { BOT } from "../../mock-data/Chat";
import "./Message.scss";

const Message = ({ data }) => {
  const isBot = data?.sender === BOT ?? false;

  return (
    <div
      className={
        isBot
          ? "chat-message d-flex align-items-center my-2 w-100"
          : "chat-message d-flex align-items-center my-2 flex-row-reverse w-100"
      }
    >
      <Avatar
        css={{ size: "$16" }}
        src={
          isBot
            ? "https://i.pravatar.cc/150?u=a042581f4e25056704b"
            : "https://i.pravatar.cc/150?u=a092581d4ef9026700d"
        }
        color={isBot ? "success" : "primary"}
        bordered
      />
      <p
        className={
          isBot
            ? "chat-message-content mb-0 ms-3 px-3 py-2"
            : "chat-message-content mb-0 me-3 px-3 py-2"
        }
      >
        {data?.message}
      </p>
    </div>
  );
};

export default Message;
