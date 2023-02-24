import { BoardContainer } from "./board.styles";

import { Chessboard } from "react-chessboard";

const Board = () => {
  return (
    <BoardContainer>
      <Chessboard id="BasicBoard"></Chessboard>
    </BoardContainer>
  );
};

export default Board;
