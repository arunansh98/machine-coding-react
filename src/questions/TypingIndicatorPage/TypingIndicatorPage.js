import { useState } from "react";
import "./TypingIndicatorPage.css";
import ChatWindow from "./ChatWindow";

export default function TypingIndicatorPage() {
  const [isFirstUserTyping, setIsFirstUserTyping] = useState(false);

  const [isSecondUserTyping, setIsSecondUserTyping] = useState(false);

  const firstUserName = "First User";

  const secondUserName = "Second User";

  return (
    <div>
      <ChatWindow
        userName={firstUserName}
        anotherUserName={secondUserName}
        setIsUserTyping={setIsFirstUserTyping}
        isAnotherUserTyping={isSecondUserTyping}
      />
      <ChatWindow
        userName={secondUserName}
        anotherUserName={firstUserName}
        setIsUserTyping={setIsSecondUserTyping}
        isAnotherUserTyping={isFirstUserTyping}
      />
    </div>
  );
}
