import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CharactersListElement from "../CharactersListElement/CharactersListElement";
import SearchBar from "../SearchBar/SearchBarContainer";
import SearchEngine from "../SearchEngine/SearchEngineContainer";
import * as Styled from "./CharactersList.styles"


const CharactersList = ( {input, charactersToShow, setCharactersToShow, page, setPage} ) => {

    function LoadMoreCharacters(){
        setPage(page + 1)
    }
    
    function SetChar(){
        setCharactersToShow([])
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
        .then(data => {
            setCharactersToShow(charactersToShow.concat(data.results))    
        }) // to do Reduxa
    }, [page])

    return (
        <>
        <div>
            <SearchEngine/>
            <SearchBar />        
            <Styled.Container>
                {
                    charactersToShow ? charactersToShow.map(character => 
                        ( 
                            <Link key={character.id} to={`/character/${character.id}`} style={{textDecoration: "none"}}
                            onClick={SetChar}>
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