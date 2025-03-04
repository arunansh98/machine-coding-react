import { useEffect, useState } from "react";

export default function ChatWindow({
  setIsUserTyping,
  isAnotherUserTyping,
  userName,
  anotherUserName,
}) {
  const [user, setUser] = useState("");

  useEffect(() => {
    let timer;
    if (user) {
      setIsUserTyping(true);
      timer = setTimeout(() => {
        setIsUserTyping(false);
      }, 1500);
    }
    return () => clearTimeout(timer);
  }, [user]);

  return (
    <div className="user">
      <div
        style={{
          opacity: isAnotherUserTyping ? 1 : 0,
        }}
      >
        {anotherUserName + " is typing !"}
      </div>
      <div className="chat-window">
        <h1
          style={{
            opacity: "0",
          }}
        >
          Messages
        </h1>
        <input
          style={{
            width: "19.6rem",
          }}
          type="text"
          placeholder="Type something !!"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </div>
      <div
        style={{
          marginTop: "1rem",
        }}
      >
        {userName}
      </div>
    </div>
  );
}
