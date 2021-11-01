import { connect } from "react-redux";
import { createNewUser } from "../../actions/session";
import Signup from "./signup";

const mapDispatchToProps = (dispatch) => ({
    action: (formUser) => dispatch(signup(formUser)),
});

export default connect(null, mapDispatchToProps)(Signup);