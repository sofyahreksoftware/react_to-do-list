import styled from "styled-components";

export const StyledButtons = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
`;

export const Button = styled.button`
    color: teal;
    border: none;
    background-color: white;
    transition: 1s;

    &:disabled {
      color: grey;
      &:hover {
        color: grey;
      }
    }

    &:hover {
      color: hsl(180, 100%, 32%);
    }
`;
