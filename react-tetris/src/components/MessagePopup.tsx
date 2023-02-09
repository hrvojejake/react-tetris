import React from "react";
import { useSelector } from "react-redux";
import { State } from "../models";

// Displays a message
export default function MessagePopup() {
  const isRunning = useSelector((state: State) => state.game.isRunning);
  const gameOver = useSelector((state: State) => state.game.gameOver);

  let message = "";
  let isHidden = "hidden";

  if (gameOver) {
    message = "Game Over";
    isHidden = "";
  } else if (!isRunning) {
    message = "Paused";
    isHidden = "";
  }

  return (
    <div className={`message-popup ${isHidden}`}>
      <h1>{message}</h1>
    </div>
  );
}
