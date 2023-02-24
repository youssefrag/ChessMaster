import { useState } from "react";

import { Chess } from "chess.js";

import { BoardContainer } from "./board.styles";

import { Chessboard } from "react-chessboard";

import { Game } from "./board.types";

const Board = () => {
  const [game, setGame] = useState<any>(new Chess());

  console.log(game);

  const makeAMove = (move: any) => {
    const gameCopy = { ...game };
    const result = gameCopy.move(move);
    setGame(gameCopy);
    return result;
  };

  const onDrop = (sourceSquare: any, targetSquare: any): any => {
    const move = makeAMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
    });

    if (move === null) return false;
  };

  return (
    <BoardContainer>
      <Chessboard position={game.fen()} onPieceDrop={onDrop}></Chessboard>
    </BoardContainer>
  );
};

export default Board;
