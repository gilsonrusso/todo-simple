import { PlusCircle } from "phosphor-react";
import { ButtonContainer } from "./styles";

interface ButtonProps {
  text: string;
}

export function ButtonDefault({ text }: ButtonProps) {
  return <ButtonContainer>
    {text}
    <PlusCircle size={24} />
  </ButtonContainer>
}
