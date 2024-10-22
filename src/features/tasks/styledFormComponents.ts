import styled from "styled-components";

export const Input = styled.input`
  flex-grow: 5;
  margin: 0 5px;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.alto};

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    margin: 5px 0;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  padding: 13px 0 0;
  gap: 7px;
  margin: 5px 5px 0;
  flex-wrap: nowrap;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

export const Button = styled.button`
  background-color: teal;
  color: ${({ theme }) => theme.colors.white};
  flex-grow: 1;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.teal};
  transition: background-color 1s, scale 1s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.bondiBlue};
    scale: 1.04;
  }
`;
