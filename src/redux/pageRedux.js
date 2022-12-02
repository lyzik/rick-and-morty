// selectors
export const getPage = ({page}) => page

// actions
const reducerName = 'page'
const createActionName = name => `app/${reducerName}/${name}`

export const SET_PAGE = createActionName("SET_PAGE")
export const setPage = payload => ({payload, type: SET_PAGE})

export default function reducer(statePart=[], action={}){
    switch(action.type) {
        case SET_PAGE:
            return action.payload
        default:
            return statePart
    }
}