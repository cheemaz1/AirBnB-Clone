import React from "react"
import {Route,Redirect,Switch,Link,HashRouter} from 'react-router-dom';
import SplashPageIndexContainer from './splash/splash_page_container'
import NavBarContainer from "./nav/navbar_container";
import Modal from "./modal/modal";
import HomeIndexContainer from "./home_index/home_index_container";
import HomeShowContainer from './home_show/home_show_container'
import CreateFormContainer from './home_form/create_form_container'
import EditFormContainer from './home_form/edit_form_containter'
import BookingPageContainer from './booking/booking_page_container'
import { Fragment } from "react";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Footer from "./footer/footerr";


const App = () => (
    <Fragment>
        <NavBarContainer/>
        <Modal/>
          <Switch>
            <Route exact path="/" component={SplashPageIndexContainer} />
            <Route exact path='/homes' component={HomeIndexContainer}/>
            <Route exact path='`/homes/${location}`' component={HomeIndexContainer}/>
            <Route exact path='/homes/:homeId' component={HomeShowContainer}/>
            <ProtectedRoute path='/home/new' component={CreateFormContainer}/>
            <ProtectedRoute path='/homes/:homeId/edit' component={EditFormContainer}/>
            <ProtectedRoute path='/bookings' component={BookingPageContainer}/>
          </Switch>
        <Footer />
    </Fragment>

)

export default App