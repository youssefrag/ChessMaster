export type Game = {
  id?: number;
  pgn?: string;
  white?: User;
  black?: User;
  winner?: "white" | "black" | "draw";
  host?: User;
  code?: string;
  open?: boolean;
  timeout?: number;
  observers?: User[];
};

export type User = {
  id?: number | string; // string for guest IDs
  name?: string;
  email?: string;
};
