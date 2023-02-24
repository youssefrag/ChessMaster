import { useState } from "react";

import { Chess } from "chess.js";

import { BoardContainer } from "./board.styles";

import { Chessboard } from "react-chessboard";

import { Game } from "./board.types";

const Board = () => {
  const [game, setGame] = useState<any>(new Chess());

  const makeAMove = (move: any) => {
    const gameCopy = new Chess();
    gameCopy.loadPgn(game.pgn());
    gameCopy.move(move);
    setGame(gameCopy);
    return;
  };

  const onDrop = (sourceSquare: any, targetSquare: any): any => {
    const move = makeAMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
    });

    console.log(move);

    if (move === null) return false;
  };

  return (
    <BoardContainer>
      <Chessboard position={game.fen()} onPieceDrop={onDrop}></Chessboard>
    </BoardContainer>
  );
};

export default Board;
