import styled from "styled-components";

export const StyledContainer = styled.main`
  max-width: 900px;
  margin: 80px auto;
  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    margin: 110px auto;
  }
`;
