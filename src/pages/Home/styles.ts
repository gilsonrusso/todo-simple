import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;

  .input-container {
    width: 100%;
    gap: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const TaskContainer = styled.div`
  flex: 1;

  margin-top: 2rem;

  display: flex;
  flex-direction: column;
`

export const TaskListHeader = styled.div`
  width: 100%;
  padding: 5px 0;

  font-size: 0.5rem;
  font-weight: lighter;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .header-left,
  .header-right {
    display: flex;
    align-items: center;

    font-size: 0.5rem;

    h1 {
      color: ${props => props.theme['blue']};
      margin-right: 15px;
    }

    small {
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 0.8rem;
      padding: 5px;

      background: ${props => props.theme['gray-400']};
      color: ${props => props.theme['gray-200']};
    }
  }

  .header-left {
    justify-content: flex-start;

    small {
      height: 15px;
      width: 15px;
      border-radius: 50%;
    }
  }

  .header-right {
    justify-content: flex-end;

    small {
      width: 80px;
      border-radius: 5px;
    }
  }



`
export const TaskList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;


`
