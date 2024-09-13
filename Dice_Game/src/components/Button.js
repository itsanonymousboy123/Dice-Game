import styled from "styled-components";
export const Button=styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
    color: white;
    border-radius: 5px;
    width: 220px;
    border: none;
    height: 44px;
    padding: 10px 18px;
    font-size: 16px;
    &:hover{
        background-color: gray;
        cursor: pointer;
        transition: 0.4ms ease-in;
    }
`;
export const Outline=styled(Button)`
    background-color: white;
    color: black;
    border: 1px solid black;
    &:hover{
    background-color: black;
    color: white;
    }
`;