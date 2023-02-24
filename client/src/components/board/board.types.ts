type BoardPosition = {
  type: string;
  color: string;
};

type Board = BoardPosition[];

export type Game = {
  _board: Board;
};
