import {applyMiddleware, combineReducers, createStore, compose} from "redux"
import searchPhraseRedux from './searchPhraseRedux';
import charactersRedux from './charactersRedux'
import pageRedux from './pageRedux'

const initialState = {
    searchPhrase: "",
    charactersToShow: [],
    page: 1
}

const reducers = {
    searchPhrase: searchPhraseRedux,
    charactersToShow: charactersRedux,
    page: pageRedux
    // nowy reducer => nowy plik charctersRedux.js => details
    // nowy reducer, ktory przechowuje informacje o stronie do wyswielenia (1,2,3,4)
}

const storeReducers = combineReducers(reducers)

const store = createStore(
    storeReducers,
    initialState,
    compose(applyMiddleware(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

export default store;