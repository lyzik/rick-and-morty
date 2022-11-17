import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as Styled from "./CharacterDetails.styles"

const CharacterDetails = () => {
    let {id} = useParams() // TODO: http://localhost:3000/character/234235345345 

    const [character, setCharacter] = useState({})
    const [fetchStatus, setFetchStatus] = useState(null)

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
            if(response.status < 400){
                return response.json()
            }else{
                setFetchStatus(false)
                throw new Error("Server responds with error!")
            }
        })
        .then(data => {
            setCharacter(data)
            setFetchStatus(true)
        })
    }, [])

        if(fetchStatus){
            return ( 
            <Styled.Container>
                <div>
                    <Styled.link to="/">Back</Styled.link>
                    <h1>Personal Informations</h1>
                    <p>Name: <span>{character.name}</span></p>
                    <p>Status: <span>{character.status}</span></p>
                    <p>Episodes: <span>{character.episode ? character.episode.length : undefined}</span></p>
                    <p>Gender: <span>{character.gender}</span></p>
                    <p>Last known location: <span>{character.location ? character.location.name : undefined}</span></p>
                </div>
                <div>
                    <Styled.image src={character.image} alt={character.name + " image"} style={{width: "85%"}}/>
                </div>
            </Styled.Container>
            )
        }else if(fetchStatus == false){
            return <div>Character doesn't exist</div>
        }
}

export default CharacterDetails