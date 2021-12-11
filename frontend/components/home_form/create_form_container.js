import { connect } from 'react-redux'
import { createHome } from '../../actions/home_action'
import HomeForm from './home_form'
import { updateFilter } from '../../actions/filter_actions'

const mSTP = (state) => ({
    home: {
        title: '',
        price: '',
        description: '', 
        location: '',
        bedroom: '',
        bathroom: '',
        lng: '',
        ltd: '',
        owner_id: state.session.id,
        host_name: '', 
        city: '',
    },
    homeErrors: state.errors.home
})

const mDTP = (dispatch) => ({
    action: home => dispatch(createHome(home)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
})

export default connect(mSTP, mDTP)(HomeForm)