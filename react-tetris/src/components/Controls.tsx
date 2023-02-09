import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  moveDown,
  moveLeft,
  moveRight,
  rotate,
  pause,
  resume,
  restart
} from "../actions";
import { State } from "../models";

export default function Controls() {
  const dispatch = useDispatch();
  const isRunning = useSelector((state: State) => state.game.isRunning);
  const gameOver = useSelector((state: State) => state.game.gameOver);

  const keyboardPlay = (e: KeyboardEvent) => {
    if (e.keyCode === 38) {
      /* up */
      if (!isRunning || gameOver) {
        return;
      }
      dispatch(rotate());
    } else if (e.keyCode === 40) {
      /* down */
      if (!isRunning || gameOver) {
        return;
      }
      dispatch(moveDown());
    } else if (e.keyCode === 37) {
      /* left */
      if (!isRunning || gameOver) {
        return;
      }
      dispatch(moveLeft());
    } else if (e.keyCode === 39) {
      /* right */
      if (!isRunning || gameOver) {
        return;
      }
      dispatch(moveRight());
    } else if (e.keyCode === 32) {
      /* space */
      if (gameOver) {
        return;
      }
      if (isRunning) {
        dispatch(pause());
      } else {
        dispatch(resume());
      }
    } else if (e.key === "Enter") {
      /* Enter */
      dispatch(restart());
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keyboardPlay);
    return () => document.removeEventListener("keydown", keyboardPlay);
  });

  return (
    <div className={`controls`}>
      {/* left */}
      <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={(e) => {
          if (!isRunning || gameOver) {
            return;
          }
          dispatch(moveLeft());
        }}
      >
        Left
      </button>

      {/* right */}
      <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={(e) => {
          if (!isRunning || gameOver) {
            return;
          }
          dispatch(moveRight());
        }}
      >
        Right
      </button>

      {/* rotate */}
      <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={(e) => {
          if (!isRunning || gameOver) {
            return;
          }
          dispatch(rotate());
        }}
      >
        Rotate
      </button>

      {/* down */}
      <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={(e) => {
          if (!isRunning || gameOver) {
            return;
          }
          dispatch(moveDown());
        }}
      >
        Down
      </button>
    </div>
  );
}
