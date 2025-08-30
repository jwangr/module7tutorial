import { useContext, useState } from "react";
import { EmojiContext } from "../contexts/EmojiProvider";

export default function Emoji() {
    const {emoji, handleEmojiChange} = useContext(EmojiContext);

  return (
    <div className="mb-4">
      <h1>{emoji}</h1>
      <button className="btn btn-primary" onClick={handleEmojiChange}>
        Change My Face!
      </button>
    </div>
  );
}

