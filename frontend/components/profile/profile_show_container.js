import { connect } from 'react-redux';
import ProfileShow from './profile_show';

const mapStateToProps = ({ session, entities: { users }, errors }) => {
    return {
        // currentUser: session.currentUser,
        currentUser: users[session.id],
        errors: errors.session
    };
};

export default connect(
    mapStateToProps, null)(ProfileShow);