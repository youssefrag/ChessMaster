import { StyledSkeleton } from "./turn.styles";

type TurnProp = {
  turn: string;
};

const Turn = ({ turn }: TurnProp) => {
  if (turn === "w") return <StyledSkeleton>It's White's Turn!</StyledSkeleton>;
  else return <StyledSkeleton>It's Black's Turn</StyledSkeleton>;
};

export default Turn;
