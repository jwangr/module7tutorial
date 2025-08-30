import { createContext, useState } from "react";

// create emojicontext - will be imported for contextProvider and children elements
export const EmojiContext = createContext("🤡");

export default function EmojiProvider({ children }) {
  const options = ["🤡", "🥲", "🫠", "😂", "😶"];

  const [emoji, setEmoji] = useState("🤡");

  const handleEmojiChange = () => {
    const index = Math.floor(Math.random() * 5);
    setEmoji(options[index]);
  };

  return (
    <EmojiContext.Provider value={{emoji, handleEmojiChange}}>
        {children}
    </EmojiContext.Provider>
);
}
