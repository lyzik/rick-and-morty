import axios from "axios"
import { setPage } from "./pageRedux"

// selectors
export const getCharactersToShow = ({charactersToShow}) => charactersToShow.data

// actions
const reducerName = 'charactersToShow'
const createActionName = name => `app/${reducerName}/${name}`

const START_REQUEST = createActionName("START_REQUEST")
const SET_CHARACTERS = createActionName("SET_CHARACTERS")
const END_REQUEST = createActionName("END_REQUEST")
const ERROR_REQUEST = createActionName("ERROR_REQUEST")
const RESET_CHARACTERS = createActionName("RESET_CHARACTERS")

export const startRequest = () => ({type: START_REQUEST}) 
export const endRequest = () => ({type: END_REQUEST}) 
export const errorRequest = (payload) => ({payload, type: ERROR_REQUEST}) 
export const setCharactersToShow = payload => ({payload, type: SET_CHARACTERS})
export const resetCharacters = () => ({type: RESET_CHARACTERS})

//thunks
export const loadCharacters = (page, input) => {
    return async dispatch => {
        dispatch(startRequest())
        try {
            const result = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}&name=${input}`)
            dispatch(setCharactersToShow(result.data.results))
            dispatch(endRequest())
            setPage(1)
        } catch(e) {
            dispatch(errorRequest(e))
        }
    }
}

export const loadFoundCharacters = (input) => {
    return async dispatch => {
        dispatch(startRequest())
        try {
            dispatch(resetCharacters())
            const result = await axios.get(`https://rickandmortyapi.com/api/character?name=${input}`)
            dispatch(setCharactersToShow(result.data.results))
            dispatch(endRequest())
        } catch(e) {
            dispatch(errorRequest(e))
        }
    }
}

export default function reducer(statePart=[], action={}){
    switch(action.type) {
        case RESET_CHARACTERS:
            return {statePart, data: []}
        case SET_CHARACTERS:
            return {...statePart, data: [...statePart.data, ...action.payload]}
        case START_REQUEST:
            return {...statePart, request: {pending: true, error: null, success: false}}
        case END_REQUEST:
            return {...statePart, request: {pending: false, error: null, success: true}}
        case ERROR_REQUEST:
            return {...statePart, request: {pending: false, error: action.payload, success: false}}
        default:
            return statePart
    }
}