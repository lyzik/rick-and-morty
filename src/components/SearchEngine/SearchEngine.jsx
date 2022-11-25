import { useEffect, useState } from "react"

const SearchEngine = ( {setCharactersToShow, input, setPage} ) => {
    useEffect(() => {
        const endpoint = `https://rickandmortyapi.com/api/character/?name=${input}`
        fetch(endpoint)
        .then(response => response.json())
        .then(setPage(1))
        .then(data => setCharactersToShow(data.results))
    }, [input])
    /*
    1. matches(character, phrase) => true/false 
    2. 20 => wyswietl, jesli nie => pobierz nastepnych i dodaj do listy
    */
}

export default SearchEngine