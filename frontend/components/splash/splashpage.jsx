import React, { Fragment } from "react"
import {Link, withRouter} from 'react-router-dom'
import Search from "./search_container"

class SplashPage extends React.Component{
    constructor(props) {
        super(props)
    }

    redirectHome(location){
        this.props.updateFilter('location', location)
        this.props.history.push(`/homes`) 
    }

    render(){
        return (  
            <div>
                <Search/>
                <div className='icon-cards'>
                    <div className='cities'>Explore cities </div>
                        <div className='explore-wrapper'>
                            <div className='explore'>
                                <div className='city-row-wrapper'>
                                    <div className='city-content'>
                                        <div onClick={this.redirectHome.bind(this, "NewYorkCity")} className='first-splash-box'>
                                            <div className='first-splash-image1'></div>
                                            <div className='first-splash-word'>
                                                <h1>New York City</h1>
                                                <p>Manhatten Skyline</p>
                                            </div>
                                        </div>
                                        <div  onClick={this.redirectHome.bind(this, "Miami")} className='first-splash-box'>
                                            <div className='first-splash-image2'></div>
                                            <div className='first-splash-word'>
                                                <h1>Miami</h1>
                                                <p>Nearby Beaches</p>
                                            </div>
                                        </div>
                                        <div  onClick={this.redirectHome.bind(this, "Vancouver")} className='first-splash-box'>
                                            <div className='first-splash-image3' ></div>
                                            <div className='first-splash-word'>
                                                <h1>Vancouver</h1>
                                                <p>By Sea, Land, and Air</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div  className='city-content'>
                                        <div onClick={this.redirectHome.bind(this, "LosAngeles")} className='first-splash-box'>
                                            <div className='first-splash-image4'></div>
                                            <div className='first-splash-word'>
                                                <h1>Los Angeles</h1>
                                                <p>Hollywood Hills</p>
                                            </div>
                                        </div>
                                        <div  onClick={this.redirectHome.bind(this, "Toronto")} className='first-splash-box'>
                                            <div className='first-splash-image5'></div>
                                            <div className='first-splash-word'>
                                                <h1>Toronto</h1>
                                                <p>Near the CN Tower</p>
                                            </div>
                                        </div>
                                        <div  onClick={this.redirectHome.bind(this, "Chicago")} className='first-splash-box'>
                                            <div className='first-splash-image6' ></div>
                                            <div className='first-splash-word'>
                                                <h1>Chicago</h1>
                                                <p>The Windy City</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>        
            </div>    
        )
    }   
}  


export default withRouter(SplashPage)