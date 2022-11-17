import { useEffect, useContext, useState } from "react"
import { SearchBarInputContext } from "../../Contexts/SearchBarInputContext"

const SearchEngine = ( {props} ) => {
    const [locationPages, setLocationPages] = useState(0);
    const [locationNames, setLocationNames] = useState([])
    const input = useContext(SearchBarInputContext).character
    useEffect(() => {
        const endpoint = `https://rickandmortyapi.com/api/character/?name=${input}`
        fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            if(locationNames.includes(input.toLowerCase())){
                props.setCharacters(data.results)
            }else props.setCharacters(data.results)
        })
        .then(props.setPage(1))
    }, [input])
    /*
    1. matches(character, phrase) => true/false 
    2. 20 => wyswietl, jesli nie => pobierz nastepnych i dodaj do listy
    */



    useEffect(() => {
        const endpoint = `https://rickandmortyapi.com/api/location`
        fetch(endpoint)
        .then(response => response.json())
        .then(data => setLocationPages(data.info.pages))
    }, [])

    useEffect(() => {
        for(let i = 1; i <= locationPages; i++){
            const endpoint = `https://rickandmortyapi.com/api/location/?page=${i}`
            fetch(endpoint)
            .then(response => response.json())
            .then(data => data.results.map(el => setLocationNames(locationNames => [el.name.toLowerCase(), ...locationNames])))
        }
    }, [locationPages])
}

export default SearchEngine