import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';


const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Greeting);

// const mapState = ({ session }) => {
//     return {
//         currentUser: session.currentUser
//     }
// };

// const mapDispatch = dispatch => {
//     return {
//         logout: () => dispatch(logout()),
//         openModal: modal => dispatch(openModal(modal))
//     }
// }

// export default connect(mapState, mapDispatch)(Greeting);