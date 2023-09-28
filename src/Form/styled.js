import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    padding: 13px 0 0;
    gap: 7px;
    margin: 5px 5px 0;
    flex-wrap: nowrap;

    @media (max-width: 767px) {
        flex-wrap: wrap;
        flex-direction: column;
    }
`;

export const Input = styled.input`
    flex-grow: 5;
    margin: 0 5px;
    padding: 8px;
    border: 1px solid #ddd;
    @media (max-width: 767px) {
        margin: 5px 0;
    }
`;

export const Button = styled.button`
    background-color: teal;
    color: white;
    flex-grow: 1;
    padding: 8px;
    border: 1px solid teal;
    transition: background-color 1s, scale 1s;
    
    &:hover {
        background-color: hsl(180, 100%, 32%);
        scale: 1.04;
    }
`;
