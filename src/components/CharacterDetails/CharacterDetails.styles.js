import styled from "styled-components"
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 50px;
`;

export const link = styled(Link)`
    color: white;
    text-decoration: none;
    border: 1px solid white;
    padding: 5px 20px 5px 20px;
    &:hover{
        background-color: white;
        color: purple;
    }
`;

export const image = styled.img`
    border-radius: 15px;
`;