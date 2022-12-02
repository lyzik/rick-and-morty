import axios from "axios"

// selectors
export const getCharactersToShow = ({charactersToShow}) => charactersToShow.data

// actions
const reducerName = 'charactersToShow'
const createActionName = name => `app/${reducerName}/${name}`

const START_REQUEST = createActionName("START_REQUEST")
const SET_CHARACTERS = createActionName("SET_CHARACTERS")
const END_REQUEST = createActionName("END_REQUEST")
const ERROR_REQUEST = createActionName("ERROR_REQUEST")

export const startRequest = () => ({type: START_REQUEST}) 
export const endRequest = () => ({type: END_REQUEST}) 
export const errorRequest = (payload) => ({payload, type: ERROR_REQUEST}) 
export const setCharactersToShow = payload => ({payload, type: SET_CHARACTERS})

//thunks
export const loadCharacters = (page, input) => {
    return async dispatch => {
        dispatch(startRequest())
        try {
            const result = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}&name=${input}`)
            dispatch(setCharactersToShow(result.data.results))
            dispatch(endRequest())
        } catch(e) {
            dispatch(errorRequest(e))
        }
    }
}

export default function reducer(statePart=[], action={}){
    switch(action.type) {
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