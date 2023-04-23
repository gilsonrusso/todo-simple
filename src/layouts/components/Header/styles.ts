import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 12.5rem;
  width: 100%;
  background: ${props => props.theme['gray-600']};

  img {
    width: 8.5rem;
  }
`
