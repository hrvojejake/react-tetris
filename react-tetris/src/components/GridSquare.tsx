import React from "react";
import { GridSquareProps } from "../models";

// Represents a grid square with a color
export default function GridSquare(props: GridSquareProps) {
  const classes: string = `grid-square color-${props.color}`;
  return <div className={classes} />;
}
