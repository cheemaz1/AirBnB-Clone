import React from 'react'
import { Link } from 'react-router-dom'
import ReviewsFormContainer from '../reviews_form/reviews_form_container'
import ReviewIndexItem from '../reviews_form/review_index_item'
import HomeMap from './home_map'
import BookingFormContainer from '../booking/booking_container'


class HomeShow extends React.Component{
    constructor(props){
        console.log('inside home show')
        super(props)
        this.state = {
            loading: true
        }

        this.scrollFunc = this.scrollFunc.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.userEditDelete = this.userEditDelete.bind(this)
    }


    handleSubmit(e){
        e.preventDefault()
        this.props.deletehome(this.props.home.id).then(
            (list) => this.props.history.push(`/homes`)
        )
    }

    componentDidMount(){
        this.props.fetchHome(this.props.match.params.homeId).then(() =>{
            this.setState({loading: false})
        })
        // this.props.fetchReviews()
        // this.props.fetchReview(this.props.match.params.reviewId)
    }

    compononetDidUpdate(){
        if (this.props.homeId){
            this.props.fetchHome(this.props.match.params.homeId)
        } 
    }

    // componentWillUnmount(){
    //     this.props.clearFilters()
    // }
    

    userEditDelete(){
        return(
            <div className='edit-delete-wrapper'>
                <button className='edit-delete' onClick={() => this.props.history.push(`/homes/${this.props.home.id}/edit`)}>Edit home</button>
                <button className='edit-delete' onClick={this.handleSubmit}>Delete home</button>
            </div>
        )
    }

    scrollFunc() {
        window.onscroll = function () {
            if ($(window).scrollTop() >= 480 && $(window).scrollTop() <= 895) {
                $(".booking-container").css("position", "fixed")
                $(".booking-container").css("transform", "translateY(-150%)")
            } else if ($(window).scrollTop() >= 895) {
                $(".booking-container").css("position", "absolute")
                $(".booking-container").css("transform", "translateY(150%)")
            } else {
                $(".booking-container").css("position", "absolute")
                $(".booking-container").css("transform", "translateY(0%)")
            }
        }
    }

    
    render(){
        console.log('one ')
        if (this.state.loading){
            return null
        }
        console.log('two ')
        this.scrollFunc()
        console.log('three ')
        const {home, currentUser, homeId, reviews, deleteReview} = this.props
        console.log('four ')
        let reviewItems = reviews.map(review => {
                return (
                <ReviewIndexItem key={review.id} review={review} deleteReview={deleteReview} currentUser={currentUser}/>   
                )
            }  
        )
        console.log('five ')

        return(
            <div className='show-container'>
                <div className='show-header'>
                    <Link className='back-to-home' to='/homes'>
                        <i className="fa fa-chevron-left"></i>
                        Back to homes
                    </Link>
                    <h1 className='show-title'>{home.title}</h1>
                    <div className='edit-delete-container'>
                        <p className='show-location'>
                            Location: {home.city} · Bedroom: {home.bedroom} · Bathroom: {home.bathroom}
                        </p>
                        {this.props.currentUser ? currentUser.id === home.owner_id ? this.userEditDelete() : '' : '' }
                    </div>
                </div>
                
                <div className='show-photo'>
                    <div className='show-photo-left'>
                        <img className='show-photo-one'src={home.photos[0]}></img>
                    </div>

                    <div className='show-photo-right'>
                        <div className='show-photo-down'>
                            <img className='show-photo-1'src={home.photos[1]}></img>
                            <img className='show-photo-2'src={home.photos[2]}></img>
                        </div>
                        <div className='show-photo-up'>
                            <img className='show-photo-3'src={home.photos[3]}></img>
                            <img className='show-photo-4'src={home.photos[4]}></img>
                        </div>
                    </div>
                </div>

                <div className='body-container'>
                    <div className='show-body'>
                        <div className='show-body-header'>Entire place hosted by {home.host_name}</div>
                        <div className='show-body-header2'>Have the entire place to yourself!</div>
                        <div className='span1'></div>
                        <div className='show-body-superhost-header'>{home.host_name} is a superhost</div>
                        <div className='superhost'> 
                            <i className="fa fa-medal"></i> 
                            <p>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests. </p>
                        </div>
                        <div className='span1'></div>
                        <div className='show-body-superhost-body'> 
                            <p>Good to know</p>
                            <ul className='show-inside-body'>· Entire home to yourself</ul>
                            <ul className='show-inside-body'>· Committed to Enhanced Clean</ul>
                        </div>
                        <div className='span1'></div>
                        <div className='description-box-container'>
                            <h1>What this place is all about</h1>
                            <p>{home.description}</p>
                        </div>
                        <div className='span1'></div>
                        <h1 className='amentities-header'>What this place offers</h1>
                        <div className='show-amentities'>
                            <div className='show-box1'>
                                <ul className='amentities-bullet-point'>· Bedroom</ul>
                                <ul className='amentities-bullet-point'>· Bathroom</ul>
                                <ul className='amentities-bullet-point'>· Kitchen</ul>
                                <ul className='amentities-bullet-point'>· Air conditioning</ul>
                                <ul className='amentities-bullet-point'>· Microwave</ul>
                            </div>
                            <div className='show-box1'>
                                <ul className='amentities-bullet-point'>· Wifi</ul>
                                <ul className='amentities-bullet-point'>· Pets allowed</ul>
                                <ul className='amentities-bullet-point'>· Refrigerator</ul>
                                <ul className='amentities-bullet-point'>· Breakfast</ul>
                                <ul className='amentities-bullet-point'>· Parking</ul>
                            </div>
                        </div>
                    </div>
                    <div className='home-price'>
                        <div className='booking-container'>
                            <BookingFormContainer homeId={homeId} home={home}/>
                        </div>
                    </div>
                </div>

                <div className='show-review-box'>
                    <div className='review-box'>
                        {reviewItems}
                    </div>
                </div>           
                <div className='review-submit'>
                    <ReviewsFormContainer homeId={homeId} />
                </div>
                <div className='show-map-container'>
                    <div className='grey-line'></div>
                    <div className='map-where'>
                        Where you'll be staying
                    </div>
                    <div className='show-map'>
                        <HomeMap home={home}/>
                    </div>
                </div>
            </div>
        )}
    }


export default HomeShow


                    
                    
            