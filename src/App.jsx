import React from "react";
import Header from "./Components/Header";
import Message from "./Components/Message";
import ChatBox from "./Components/ChatBox";

function App() {
  return (
    <main className="overflow-hidden h-screen w-full flex  justify-betwee font-spaceGrotesk">
      <Header />
      <Message />
      <ChatBox />
    </main>
  );
}

export default App;
