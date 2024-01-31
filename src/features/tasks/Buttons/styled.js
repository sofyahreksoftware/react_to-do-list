import styled from "styled-components";

export const StyledButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    grid-template-columns: 1fr;
  }
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.teal};
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  transition: 1s;

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
