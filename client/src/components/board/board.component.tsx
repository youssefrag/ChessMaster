import { useState, useEffect } from "react";

import { Chess, Move, Square } from "chess.js";
import { Chessboard } from "react-chessboard";

import { Game } from "../../types/index";

const Board = () => {
  const [optionSquares, setOptionSquares] = useState<{
    [square: string]: { background: string; borderRadius?: string };
  }>({});

  const [side, setSide] = useState<"b" | "w" | "s">("s");

  const chess = new Chess();

  // chess.move("e4");
  // chess.move("e5");
  // chess.move("f4");
  // chess.move("a5");
  // chess.move("a4");
  // chess.move("h6");

  const makeMove = (m: { from: string; to: string; promotion?: string }) => {
    try {
      const result = chess.move(m);
      if (result) {
        setOptionSquares({
          [m.from]: { background: "rgba(255, 255, 0, 0.4)" },
          [m.to]: { background: "rgba(255, 255, 0, 0.4)" },
        });
        return result;
      } else {
        throw new Error("invalid move");
      }
    } catch (e) {
      setOptionSquares({});
      return false;
    }
  };

  useEffect(() => {
    makeMove({ from: "a2", to: "a3" });
    makeMove({ from: "a7", to: "a6" });
    console.log(chess.fen());
  }, []);

  return (
    <div style={{ width: "500px" }}>
      <Chessboard position={chess.fen()} />
    </div>
  );
};

export default Board;
