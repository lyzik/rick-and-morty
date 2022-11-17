import React from "react";
import styled from "styled-components"
import * as Styled from "./CharactersListElement.styles";

const CharactersListElement = ({ character }) => {
    return(
    <Styled.Container>
        <Styled.Text>{ character.name }</Styled.Text>
        <Styled.Image src={character.image} alt={character.name + " image"}/>
    </Styled.Container>)
}

export default CharactersListElement