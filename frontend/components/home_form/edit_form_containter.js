import React from 'react';
import { connect } from 'react-redux';
import { fetchHome, updateHome } from '../../actions/home_action'
import HomeForm from './home_form';
import {updateFilter} from '../../actions/filter_actions'

class EditForm extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchHome(this.props.match.params.homeId)
    }

    render(){
        const {updateHome, formType, home, action, homeErrors} = this.props
        return(
            <HomeForm
                history={this.props.history}
                updatehome={updatehome}
                formType={formType}
                home={home}
                action={action}
                homeErrors={homeErrors}
                />
        )
    }
}


const mSTP = (state, ownProps) => ({
    home: state.entities.homes[ownProps.match.params.homeId],
    formType: 'Update home',
    homeErrors: state.errors.home
})

const mDTP = (dispatch) => ({
    fetchHome: home => dispatch(fetchHome(home)),
    action: (formData, homeId) => dispatch(updateHome(formData, homeId)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),

})

export default connect(mSTP, mDTP)(EditForm) 