import { connect } from "react-redux";
import {
    fetchHome,
    createHome,
    updateHome,
} from "../../../actions/home_action";
import Home from "./home";


// const mapState = (state, ownProps) => ({
//     home: state.entities.homes[ownProps.match.params.homeId],
//     users: state.entities.users,
//     session: state.session.id
//     // state has to be normalized cf. home_reducer;
// });

// const mapDispatch = (dispatch) => ({
//     createHome: (home) => dispatch(createHome(home)),
//     updateHome: (home) => dispatch(updateHome(home)),
//     fetchHome: (homeId) => dispatch(fetchHome(homeId)),
//     openModal: (modal) => dispatch(openModal(modal)),
//     closeModal: () => dispatch(closeModal())
// });

// export default connect(mapState, mapDispatch)(Home);

// import { connect } from 'react-redux';
// import Home from "./home"

// import { fetchListing, deleteListing } from '../../actions/listings_actions';
// import { fetchUsers } from './../../../actions/';
// import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => {
    return {
        home: state.entities.homes[ownProps.match.params.homeId],
        users: state.entities.users,
        session: state.session.id
    }
}


const mDTP = dispatch => ({
    deleteHome: homeId => dispatch(deleteHome(homeId)),
    fetcHome: homeId => dispatch(fetchHome(homeId)),
    fetchUsers: () => dispatch(fetchUsers()),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
})


export default connect(mSTP, mDTP)(Home)