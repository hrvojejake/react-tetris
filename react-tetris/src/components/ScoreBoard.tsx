import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { pause, resume, restart } from "../actions";
import { State } from "../models";

export default function ScoreBoard() {
  const dispatch = useDispatch();
  const game = useSelector((state: State) => state.game);
  const { score, isRunning, gameOver, level } = game;

  return (
    <div className="score-board">
      <div>Score:{score}</div>
      <div>Level:{level}</div>
      <button
        className="score-board-button"
        onClick={(e) => {
          if (gameOver) {
            return;
          }
          if (isRunning) {
            dispatch(pause());
          } else {
            dispatch(resume());
          }
        }}
      >
        {isRunning ? "Pause" : "Play"}
      </button>
      <button
        className="score-board-button"
        onClick={(e) => {
          dispatch(restart());
        }}
      >
        Restart
      </button>
    </div>
  );
}
