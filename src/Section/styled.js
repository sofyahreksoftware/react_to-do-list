import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: white;
  margin: 19px 40px;
  padding: 10px;
`;

export const Header = styled.header`
  border: 1px solid #ddd;
  border-width: 0 0 1px;
  padding: 10px;
  display: grid;
  grid-template-columns: 5fr 3fr;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h2`
  padding: 5px;
  font-size: 22px;
  padding: 7px;
  margin: -6px;
`;
