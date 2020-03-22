import { connect } from 'react-redux'
import {
    fetchPhones
} from '../../actions'
import Layout from "../../components/Layout"

const mapStateToProps = state => ({
    phones: state.phoneReducer.phones || [],
    isLoading: state.phoneReducer.isLoading,
    error: state.phoneReducer.error,
    text: state.filterReducer.searchTerm
})

const mapDispatchToProps = (dispatch) => ({
    getPhones: () => dispatch(fetchPhones())
})

export default connect(mapStateToProps, mapDispatchToProps)(Layout);