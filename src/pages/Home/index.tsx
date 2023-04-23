import { ButtonDefault } from "../../components/ButtonDefault";
import { InputDefault } from "../../components/InputDefault";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <div className="input-container">
      <InputDefault placeHoldText="Add a new task"/>
      <ButtonDefault text="Create"/>
      </div>
    </HomeContainer>
  )
}
