import { useState, useEffect } from "react";

import { Chess, Move, Square } from "chess.js";
import { Chessboard } from "react-chessboard";

import { Game } from "../../types/index";

import Turn from "../turn/turn.component";

const Board = () => {
  let [refresh, setRefresh] = useState<number>(0);

  let [game, setGame] = useState(new Chess());

  const makeMove = (m: { from: string; to: string; promotion?: string }) => {
    try {
      const result = game.move(m);
      if (result) {
        setRefresh(refresh + 1);
        return result;
      } else {
        throw new Error("invalid move");
      }
    } catch (e) {
      return false;
    }
  };

  useEffect(() => {
    makeMove({ from: "a2", to: "a3" });
    makeMove({ from: "a7", to: "a5" });
    makeMove({ from: "b2", to: "b4" });
    makeMove({ from: "b7", to: "b7" });
    makeMove({ from: "c2", to: "c3" });
  }, [refresh]);

  return (
    <div style={{ width: "500px" }}>
      <Chessboard position={game.fen()} />
      <Turn turn={game.turn().toString()}></Turn>
    </div>
  );
};

export default Board;
