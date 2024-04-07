import styled from "styled-components";

export const StyledHeader = styled.h1`
  margin: 20px 40px;
  font-weight: 700;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    margin: 20px 19px;
  }
`;
