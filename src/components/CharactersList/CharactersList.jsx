import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SearchBarInputContext } from "../../Contexts/SearchBarInputContext";
import CharactersListElement from "../CharactersListElement/CharactersListElement";
import SearchBar from "../SearchBar/SearchBar";
import SearchEngine from "../SearchEngine/SearchEngine";
import * as Styled from "./CharactersList.styles"


const CharactersList = () => {

    const [characters, setCharacters] = useState([])
    const [page, setPage] = useState(1)
    const [searchType, setSearchType] = useState('name')
    const input = useContext(SearchBarInputContext).character
    
    function LoadMoreCharacters(){
        setPage(page + 1)
    }
    
    useEffect(() => {
        const endpoint = `https://rickandmortyapi.com/api/character?page=${page}&name=${input}`

        fetch(endpoint)
        .then(response => {
            if(response.status < 400){
                return response.json()
            }else{
                throw new Error("Server responds with error!")
            }
        })
        .then(data => {setCharacters(characters.concat(data.results))})
    }, [page])

    

    return (
        <>
        <div>
            <SearchEngine props={{characters, setCharacters, LoadMoreCharacters, setPage}}/>
            <SearchBar />        
            <Styled.Container>
                {
                    characters ? characters.map(character => 
                        ( 
                            <Link key={character.id} to={`/character/${character.id}`} style={{textDecoration: "none"}}>
                                <CharactersListElement character={character}/>
                            </Link>
                        )) : <h1>Character does not exist</h1>
                }
            </Styled.Container>
            <button onClick={LoadMoreCharacters}>GET NEXT</button>
        </div>
        </>
    )

}

export default CharactersList