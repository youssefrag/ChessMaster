import { useState } from "react";

import Chess from "chess.js";

import { BoardContainer } from "./board.styles";

import { Chessboard } from "react-chessboard";

const Board = () => {
  const [game, setGame] = useState(new Chess());

  function makeAMove(move) {
    const gameCopy = { ...game };
    const result = gameCopy.move(move);
    setGame(gameCopy);
    return result; // null if the move was illegal, the move object if the move was legal
  }

  function onDrop(sourceSquare, targetSquare) {
    const move = makeAMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q", // always promote to a queen for example simplicity
    });

    // console.log(move);

    console.log(game.game_over());

    // console.log(game.fen());

    // illegal move
    if (move === null) return false;
  }

  return (
    <BoardContainer>
      <Chessboard position={game.fen()} onPieceDrop={onDrop}></Chessboard>
    </BoardContainer>
  );
};

export default Board;
