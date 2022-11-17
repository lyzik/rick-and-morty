import styled from "styled-components"

export const Container = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 10px;
    background-color: rgba(255, 102, 255, 0.2);
    &:hover{
        background-color: rgba(255, 102, 255, 0.6)
    }
`;

export const Text = styled.p`
    color: white;
`;

export const Image = styled.img`        
    border-radius: 10px;
    opacity: 1;
    width: 100%;
`;