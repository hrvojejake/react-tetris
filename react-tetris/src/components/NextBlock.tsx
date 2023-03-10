import React from "react";
import GridSquare from "./GridSquare";
import { useSelector } from "react-redux";
import { shapes } from "../utils/index";
import { State } from "../models";

// Draws the "next" block view showing the next block to drop
export default function NextBlock() {
  const nextShape = useSelector((state: State) => state.game.nextShape);
  const box = shapes[nextShape][0]; // Get the first rotation

  // Map the block to the grid
  const grid = box.map((rowArray, row) => {
    return rowArray.map((square, col) => {
      return (
        <GridSquare key={`${row}${col}`} color={square === 0 ? 0 : nextShape} />
      );
    });
  });

  return <div className="next-block">{grid}</div>;
}
