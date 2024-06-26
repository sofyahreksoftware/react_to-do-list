import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  margin: 19px 40px;
  padding: 10px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    margin: 19px 13px;
  }
`;

export const SectionHeader = styled.header`
  border: 1px solid ${({ theme }) => theme.colors.alto};
  border-width: 0 0 1px;
  padding: 10px;
  display: grid;
  grid-template-columns: 5fr 3fr;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h2`
  padding: 5px;
  font-size: 22px;
  font-weight: 700;
  padding: 7px;
  margin: -6px;
`;

export const Paragraph = styled.p`
  margin: 20px 15px;
`;
