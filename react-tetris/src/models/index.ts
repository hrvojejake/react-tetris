export interface State {
  game: {
    grid: number[][];
    shape: number;
    rotation: number;
    x: number;
    y: number;
    nextShape: number;
    isRunning: boolean;
    score: number;
    speed: number;
    gameOver: boolean;
    level: number;
  };
}

export type GridSquareProps = {
  color: number;
};
