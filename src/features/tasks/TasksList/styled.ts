import { Link } from "react-router-dom";

import styled, { css } from "styled-components";

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li<{ $hidden: boolean }>`
  border-bottom: 1px solid ${({ theme }) => theme.colors.alto};
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 7fr 1fr;
  grid-gap: 10px;

  ${({ $hidden }) =>
    $hidden &&
    css`
      display: none;
    `}
`;

export const StyledLink = styled(Link)<{ $crossed: boolean }>`
  color: ${({ theme }) => theme.colors.persianGreen};
  text-decoration: none;
  font-weight: 500;
  align-self: center;

  ${({ $crossed }) =>
    $crossed &&
    css`
      text-decoration: line-through;
    `}

  &:hover {
    color: ${({ theme }) => theme.colors.bondiBlue};
  }
`;

export const Button = styled.button<{ $green: boolean; $red: boolean }>`
  width: 30px;
  height: 30px;
  justify-self: center;
  border: none;
  transition: background-color 1s;
  color: ${({ theme }) => theme.colors.white};

  ${({ $green }) =>
    $green &&
    css`
      background-color: ${({ theme }) => theme.colors.green};

      &:hover {
        background-color: ${({ theme }) => theme.colors.lightGreen};
      }
    `}

  ${({ $red }) =>
    $red &&
    css`
      background-color: ${({ theme }) => theme.colors.red};

      &:hover {
        background-color: ${({ theme }) => theme.colors.lightRed};
      }
    `}
`;
