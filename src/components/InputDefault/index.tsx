import { InputContainer } from "./styles";

interface InputProps {
  placeHoldText: string;
}

export function InputDefault({placeHoldText}: InputProps) {
  return (
    <InputContainer placeholder={placeHoldText}/>
  )
}
