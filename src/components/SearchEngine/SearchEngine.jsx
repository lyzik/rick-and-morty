import { useEffect, useRef } from "react"

const SearchEngine = ( {setCharactersToShow, input, setPage, loadFoundCharacters} ) => {
    const isMounted = useRef(false)
    useEffect(() => {
        if(isMounted.current){
            loadFoundCharacters(input);
        }else isMounted.current = true;
    }, [input])

    // useEffect(() => {
    //     const endpoint = `https://rickandmortyapi.com/api/character/?name=${input}`
    //     fetch(endpoint)
    //     .then(response => response.json())
    //     .then(setPage(1))
    //     .then(data => /*setCharactersToShow(data.results)*/{})
    //     .catch(() => {
    //         setCharactersToShow(null)
    //     })
    // }, [input])
}

export default SearchEngine