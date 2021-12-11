import HomeIndex from './home_index'
import { connect } from 'react-redux';
import {fetchHome, fetchHomes, deleteHome} from '../../actions/home_action'
import {withRouter} from 'react-router-dom'
import { clearFilters } from '../../actions/filter_actions'


const mSTP = (state) => ({
    homes: Object.values(state.entities.homes),
    filter: state.ui.filter.location,
    changeMap: {
        "NewYorkCity": {coords: [40.76, -73.98], zoom: 14 }, 
        "Miami": {coords: [25.830500, -80.180374], zoom: 13}, 
        "Chicago": {coords: [41.8821009, -87.6377712], zoom: 14}, 
        "LosAngeles": {coords: [34.0450184, -118.3421892], zoom: 12}, 
        "Vancouver": { coords: [49.280687, -123.122875], zoom: 16},
        "Toronto": { coords: [43.643475, -79.379379], zoom: 14},
    }
})

const mDTP = (dispatch) => ({
    fetchHome: (id) => dispatch(fetchHome(id)),
    fetchHomes: (filter) => dispatch(fetchHomes(filter)),
    deleteHome: (homeId) => dispatch(deleteHome(homeId)),
    clearFilters: () => dispatch(clearFilters()),
})

export default withRouter(connect(mSTP, mDTP)(HomeIndex))