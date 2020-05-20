import { connect } from 'react-redux'
import {
    setFilterSearch
} from '../../../../actions'
import SearchInput from '../Components/SearchInput'

const mapDispatchToProps = (dispatch) => ({
    setFilter: text => dispatch(setFilterSearch(text))
})

const mapStateToProps = state => ({
    error: state.phoneReducer.error,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (SearchInput)
