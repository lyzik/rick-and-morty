import { getPage, setPage } from "../../redux/pageRedux";
import { connect } from "react-redux";
import CharacterDetails from "./CharacterDetails";

const mapStateToProps = (state) => ({
    page: getPage(state)
})

const mapDispatchToProps = dispatch => ({
    setPage: page => dispatch(setPage(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetails)