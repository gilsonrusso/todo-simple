import { ButtonDefault } from "../../components/ButtonDefault";
import { InputDefault } from "../../components/InputDefault";
import { CardTask } from "./CardTask";
import { HomeContainer, TaskContainer, TaskList, TaskListHeader } from "./styles";

interface ICards {
  id: number;
  isComplete: boolean;
  text: string;
}

const cards: ICards[] = [
  { id: 1, isComplete: true, text: 'Hello 1' },
  { id: 2, isComplete: false, text: 'Hello 2' },
  { id: 3, isComplete: false, text: 'Hello 3' },
  { id: 4, isComplete: true, text: 'Hello 4' },
]

export function Home() {
  return (
    <HomeContainer>
      <div className="input-container">
        <InputDefault placeHoldText="Add a new task" />
        <ButtonDefault text="Create" />
      </div>
      <TaskContainer>
        <TaskListHeader>
          <div className="header-left">
            <h1>Created Tasks</h1>
            <small>{cards.length}</small>
          </div>
          <div className="header-right">
            <h1>Done Tasks</h1>
            <small>0 of {cards.length}</small>
          </div>
        </TaskListHeader>
        <TaskList>
          {
            cards.map(card => (
              <CardTask key={card.id} isComplete={card.isComplete} text={card.text} />
            ))
          }
        </TaskList>
      </TaskContainer>
    </HomeContainer>
  )
}
