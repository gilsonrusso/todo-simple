import { CardTaskContainer } from "./styles";

interface ICardsProps {
  isComplete: boolean;
  text: string;
}

export function CardTask({isComplete = false, text}: ICardsProps) {
  return (
    <CardTaskContainer>
      <input checked={isComplete} type="checkbox"/>
      <p>{text}</p>
    </CardTaskContainer>
  )
}
