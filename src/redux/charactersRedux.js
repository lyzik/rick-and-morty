// selectors
export const getCharactersToShow = ({charactersToShow}) => charactersToShow

// actions
const reducerName = 'charactersToShow'
const createActionName = name => `app/${reducerName}/${name}`

export const SET_CHARACTERS = createActionName("SET_CHARACTERS")
export const setCharactersToShow = payload => ({payload, type: SET_CHARACTERS})

export default function reducer(statePart=[], action={}){
    switch(action.type) {
        case SET_CHARACTERS:
            return action.payload
        default:
            return statePart
    }
}