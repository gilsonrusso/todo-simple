import styled from "styled-components";

export const CardTaskContainer = styled.div`

width: 100%;
height: 75px;

font-size: 1rem;

:first-child {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

:last-child {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

padding: 15px;

display: flex;

align-items: center;

p {
  margin-left: 15px;
}

background: ${props => props.theme['gray-400']};
color: ${props => props.theme['gray-200']};

`
