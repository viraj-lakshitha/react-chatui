import React from "react";
import "./App.scss";
import Chat from "./pages/chat/Chat";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="container">
      <Chat />
    </div>
  );
};

export default App;
