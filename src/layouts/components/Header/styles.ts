import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 2.5rem;

  background: ${props => props.theme['gray-700']};
`
