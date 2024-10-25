import { css, styled } from "styled-components";

export const StyledButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledButton = styled.button<{
  $error?: boolean;
  disabled?: boolean;
}>`
  color: ${({ theme }) => theme.colors.teal};
  border: none;
  padding: 3px;
  white-space: nowrap;
  background-color: ${({ theme }) => theme.colors.white};
  transition: 1s;

  ${({ $error }) =>
    $error &&
    css`
      color: ${({ theme }) => theme.colors.red};
    `}

  &:disabled {
    color: ${({ theme }) => theme.colors.grey};
    &:hover {
      color: ${({ theme }) => theme.colors.grey};
    }
  }

  &:hover {
    color: ${({ theme }) => theme.colors.persianGreen};
  }
`;
