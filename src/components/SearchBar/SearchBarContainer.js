// mapStateToProps mapDispatchToProps
import { getSearchPhrase, setSearch } from "../../redux/searchPhraseRedux"
import { connect } from "react-redux"
import SearchBar from "./SearchBar"

const mapStateToProps = (state) => ({
    searchPhrase: getSearchPhrase(state)
})

const mapDispatchToProps = dispatch => ({
    setSearch: searchPhrase => dispatch(setSearch(searchPhrase))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)