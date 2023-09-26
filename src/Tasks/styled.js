import styled, { css } from "styled-components";

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  border-bottom: 1px solid #ddd;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 7fr 1fr;
  grid-gap: 10px;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Button = styled.button`
  width: 30px;
  height: 30px;
  justify-self: center;
  border: none;
  transition: background-color 1s;

  ${({ green }) =>
    green &&
    css`
      background-color: green;
      color: white;
      &:hover {
        background-color: hsl(120, 100%, 35%);
      }
    `}

  ${({ red }) =>
    red &&
    css`
      background-color: hsl(0, 100%, 45%);
      color: white;
      &:hover {
        background-color: hsl(0, 100%, 60%);
      }
    `}
`;

export const Content = styled.span`
  align-self: center;
  
  ${({ crossed }) =>
    crossed &&
    css`
      text-decoration: line-through;
    `}
`;
