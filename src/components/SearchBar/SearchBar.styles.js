import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    padding: 25px 0px 3px 25px;
    height: 30px;
`;

export const Input = styled.input`
    width: 350px;
    padding: 15px;
    border-radius: 25px;
    background-color: rgba(255, 102, 255, 0.2);
    color: white;
    border: none;
    &::placeholder{
        color: white;
    }
`;