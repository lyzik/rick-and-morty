import React from "react";
import { useContext } from "react";
import { SearchBarInputContext } from "../../Contexts/SearchBarInputContext";
import * as Styled from "./SearchBar.styles"

const SearchBar = () => {
    const { character, setCharacter } = useContext(SearchBarInputContext)
    return (
    <Styled.Container>
        <Styled.Input type="text" onChange={event => setCharacter(event.target.value)} value={character}
            placeholder="Search for character" />
    </Styled.Container>
    )
}

export default SearchBar