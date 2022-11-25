// selectors
export const getSearchPhrase = ({searchPhrase}) => searchPhrase

// actions
const reducerName = 'search'
const createActionName = name => `app/${reducerName}/${name}`

export const SET_SEARCH = createActionName("SET_SEARCH")
export const setSearch = payload => ({payload, type: SET_SEARCH})

export default function reducer(statePart=[], action={}){
    switch(action.type) {
        case SET_SEARCH:
            return action.payload
        default:
            return statePart
    }
}