import React from "react";
import {Link} from 'react-router-dom'

const HomeIndexItem = props => {
    const {home}  = props

    return(
        <div className='home-left-box'>
                {/* <img className='home-image' src={}></img> */}
                <Link className='home-items-container' to={`/homes/${home.id}`}>
                    <p className='home-location'>{home.city}</p>
                    <h1 className='home-header'>
                        <div className='home-description'>{home.title}</div>
                    </h1>
                    <div className='home-index-am'>
                        <p>
                            Wifi · Air conditioning · Kitchen · Heating
                        </p>
                        <br/>
                        <p>
                            Bedrooms: {home.bedroom} · Bathrooms: {home.bathroom}  
                        </p>
                    </div>
                    <div className='home-price'>
                        <i className="fa fa-star"> {}</i>
                        <h1>
                            ${home.price}<p>/ night</p>
                        </h1>
                    </div>
                </Link>
        </div>
    )
}

export default HomeIndexItem
