import "./App.css";
import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="5876c326-b388-467f-a5c2-d3acefd2d480"
      userName="Ramu"
      userSecret="ramu123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
