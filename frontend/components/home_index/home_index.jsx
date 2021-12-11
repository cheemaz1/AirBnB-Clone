import React from 'react'
import HomeIndexItem from './home_index_item'
import { Link } from 'react-router-dom'
import HomeIndexMap from './home_index_map'

class HomeIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchHomes(this.props.filter)  
    }

    // componentWillUnmount(){
    //     this.props.clearFilters()
    // }
    
    // componentDidUpdate(prevProps){
    //     if (prevProps.filter !== this.props.filter) {
    //         debugger
    //         this.props.fetchHomes(this.props.filter)
    //     }
    // }

    render(){
        const {homes, filter, changeMap} = this.props
        return(
            <div className='home-container'>
                <div className='home-left-container'>
                    <div className='home-left'>
                        <h1 className='home-page-header'>Stays in a selected city</h1>
                        <div className='home-page-button'>
                            <div className='curved-button'>Cancellation
                                <div className="drop-content">
                                    <p>Booking cancellation can be done anytime and anywhere through the bookings page.</p>
                                </div>
                            </div>
                            <div className='curved-button'>Cities
                                <div className="drop-content">
                                    <p>There are many different cities you can choose from. Go ahead and explore around.</p>
                                </div>
                            </div>
                            <div className='curved-button'>Amentities
                                <div className="drop-content">
                                    <p>Every home has a variety of amentities that you can choose from.</p>
                                </div>
                            </div>
                            <div className='curved-button'>Ratings
                                <div className="drop-content">
                                    <p>homes have a average rating of 4.5 out of 5 stars </p>
                                </div>
                            </div>
                        </div>
                        <div className='words-container-index'>
                            <div className='stays-gif'></div>
                            <div className='home-page-words'>More than 240,000 guests have used this website.
                                On average they rated their stays 4.8 out of 5 stars.
                            </div>
                        </div>
                        <div className='homes'>
                                {homes.map(home => <HomeIndexItem home={home} key={home.id}/>)} 
                        </div>
                    </div>
                </div>
                <div className='main-map'>
                    <div className='map-right'>
                        <HomeIndexMap homes={homes} changeMap={changeMap[filter]}/>
                    </div>
                </div>
            </div>
        )
    }
}


export default HomeIndex