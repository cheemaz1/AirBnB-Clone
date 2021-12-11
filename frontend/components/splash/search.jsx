import React from 'react';
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom'

class Search extends React.Component{
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    

    handleSubmit() {
        this.props.history.push(`/homes`) 
    }

    handleChange(e) {
        this.props.updateFilter('location', e.target.value)
    }

    randomHome(){
        let locations = ["NewYorkCity", "Miami", "Chicago", "LosAngeles", "Vancouver", "Toronto"]
        let location = locations[Math.floor(Math.random() * locations.length)]
        this.props.updateFilter('location', location)
        this.props.history.push('/homes')
    }

    render() {
        return (
        <div className='splash-container'>
            <form className='filter-box'>
                <div className='filter-container'>
                    <select defaultValue='' onChange={this.handleChange} className='where-button'>Where are you going?   
                        <option disabled value='' className='drop-down-inside' >Where are you going?</option>
                        <option className='drop-down-inside' value='NewYorkCity'>New York City</option>
                        <option className='drop-down-inside' value='Miami'>Miami</option>
                        <option className='drop-down-inside' value='Vancouver'>Vancouver</option>
                        <option className='drop-down-inside' value='LosAngeles'>Los Angeles</option>
                        <option className='drop-down-inside' value='Toronto'>Toronto</option>
                        <option className='drop-down-inside' value='Chicago'>Chicago</option>
                    </select>
                    <span></span>
                    <input type='date' min={new Date().toISOString().split('T')[0]} className='filter-buttons'/>
                    <span></span>
                    <input type='date' min={new Date().toISOString().split('T')[0]} className='filter-buttons'/>
                    <span></span>
                    <select className='filter-button-guest'>
                        <option defaultValue="1">1 guest</option>
                        <option value="2">2 guest</option>
                        <option value="3">3 guest</option>
                        <option value="4">4 guest</option>
                        <option value="5">5 guest</option>
                        <option value="6">6 guest</option>
                        <option value="7">7 guest</option>        
                    </select>
                    <span></span>
                    <div onClick={this.handleSubmit} className='filter-buttons-search'><i className="fas fa-search"></i></div>
                </div>
            </form>
            <div className='surprise-me-container'> 
                <div onClick={this.randomHome.bind(this)} className='surprise-me'>I'm Flexible</div>
            </div>
        </div>     
        )
    }
}

export default withRouter(Search);

