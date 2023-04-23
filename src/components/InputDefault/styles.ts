import styled from "styled-components";

export const InputContainer = styled.input`
  height: 3.375rem;
  width: 100%;

  border: none;
  border-radius: 8px;

  padding: 1.5rem;

  &:focus {
    border: 1px solid ${props => props.theme['blue-dark']};
    box-shadow: none;
  }

  background: ${props => props.theme['gray-500']};
  color: ${props => props.theme['gray-200']};
`
