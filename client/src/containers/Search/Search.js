import { connect } from 'react-redux'
import {
    setFilterSearch
} from '../../actions'
import SearchComponent from '../../components/Search'

const mapDispatchToProps = (dispatch) => ({
    setFilter: text => dispatch(setFilterSearch(text))
})

const mapStateToProps = state => ({
    error: state.phoneReducer.error,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (SearchComponent)