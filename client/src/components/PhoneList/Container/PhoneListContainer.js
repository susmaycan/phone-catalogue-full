import { connect } from 'react-redux'
import {
    fetchPhones
} from '../../../actions'
import PhoneList from '../Components/PhoneList'

const mapStateToProps = state => ({
    phones: state.phoneReducer.phones || [],
    isLoading: state.phoneReducer.isLoading,
    error: state.phoneReducer.error,
    text: state.phoneReducer.searchTerm
})

const mapDispatchToProps = (dispatch) => ({
    getPhones: () => dispatch(fetchPhones())
})

export default connect(mapStateToProps, mapDispatchToProps)(PhoneList)
