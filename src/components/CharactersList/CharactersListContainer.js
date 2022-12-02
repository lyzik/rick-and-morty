// mapStateToProps mapDispatchToProps
import { getSearchPhrase, setSearch } from "../../redux/searchPhraseRedux"
import { connect } from "react-redux"
import CharactersList from "./CharactersList"
import { getCharactersToShow, setCharactersToShow, loadCharacters } from "../../redux/charactersRedux"
import { getPage, setPage } from "../../redux/pageRedux"

const mapStateToProps = (state) => ({
    input: getSearchPhrase(state),
    charactersToShow: getCharactersToShow(state),
    page: getPage(state)
})

const mapDispatchToProps = dispatch => ({
    setCharactersToShow: charactersToShow => dispatch(setCharactersToShow(charactersToShow)),
    setPage: page => dispatch(setPage(page)),
    loadCharacters: (page, input) => dispatch(loadCharacters(page, input))
})

export default connect(mapStateToProps, mapDispatchToProps)(CharactersList)