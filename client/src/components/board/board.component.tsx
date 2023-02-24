import { useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";

import { BoardContainer } from "./board.styles";

import { Move } from "./board.types";

const Board = () => {
  const [game, setGame] = useState(new Chess());

  const makeMove = (move: any) => {
    console.log(move);
    const gameCopy = new Chess();
    gameCopy.load_pgn(game.pgn());
    const result = gameCopy.move(move);
    setGame(gameCopy);
    return result;
  };

  const onDrop = (startSquare: string, endSquare: string) => {
    const result = makeMove({
      from: startSquare,
      to: endSquare,
    });

    return result !== null;
  };

  return (
    <BoardContainer>
      <Chessboard position={game.fen()} onPieceDrop={onDrop} />;
    </BoardContainer>
  );
};

export default Board;
