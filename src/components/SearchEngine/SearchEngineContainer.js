// mapStateToProps mapDispatchToProps
import { getSearchPhrase, setSearch } from "../../redux/searchPhraseRedux"
import { connect } from "react-redux"
import SearchEngine from "./SearchEngine"
import { getCharactersToShow, setCharactersToShow } from "../../redux/charactersRedux"
import { getPage, setPage } from "../../redux/pageRedux"

const mapStateToProps = (state) => ({
    input: getSearchPhrase(state)
})

const mapDispatchToProps = dispatch => ({
    setCharactersToShow: charactersToShow => dispatch(setCharactersToShow(charactersToShow)),
    setPage: page => dispatch(setPage(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchEngine)