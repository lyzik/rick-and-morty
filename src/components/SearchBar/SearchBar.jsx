import React from "react";
import * as Styled from "./SearchBar.styles"

const SearchBar = ({setSearch, searchPhrase}) => {
    return (
    <Styled.Container>
        <Styled.Input type="text" onChange={event => setSearch(event.target.value)} value={searchPhrase}
            placeholder="Search for character" />
    </Styled.Container>
    )
}

export default SearchBar

// store/redux <=> SearchBarContainer <=> SearchBar