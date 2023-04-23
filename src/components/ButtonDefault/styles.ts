import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100px;
  height: 3.375rem;
  margin: 5px;
  padding: 8px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  font-size: 0.9rem;
  font-weight: normal;

  border: none;
  border-radius: 8px;

  background: ${props => props.theme['blue-dark']};
  color: ${props => props.theme['white']};

  &:focus {
    box-shadow: none;
  }

  &:hover {
    filter: brightness(1.5);
  }

  cursor: pointer;

`
