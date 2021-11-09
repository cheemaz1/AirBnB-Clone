import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import SearchContainer from "./search/search_container";
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import HomeContainer from "./homes/home/home_container";
import HomesIndexContainer from "./homes/home_index_container";
import HomesIndexContainer2 from "./homes/home_index_container2";
import Modal from './modal/modal';
import ProfileShowContainer from "./profile/profile_show_container";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from "./splash/splash_container";
import ErrorPage from "./error_page/error_page";
import 'bootstrap'; 
import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';

const App = () => (
    <div>
        <Modal />
        <header>
            <div className="headercomp">
                <GreetingContainer />
                <SearchContainer />  
            </div>
        </header>
            {/* <SplashContainer /> */}
            {/* <AuthRoute exact path="/" component={SplashContainer} />
            <Route exact path="/homes" component={HomesIndexContainer} />
            <Route path={`/homes/:homeId`} component={HomeContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <AuthRoute exact path="/login" component={LogInFormContainer} /> */}
            {/* <Route path={`/search`} component={SearchContainer} /> */}
        <Switch>
            <Route exact path="/" component={SplashContainer} />
            <Route exact path="/search/:city" component={HomesIndexContainer} />
            <Route exact path="/homes" component={HomesIndexContainer2} />
            <Route exact path="/users/:userId" component={ProfileShowContainer} />
            <Route path={`/homes/:homeId`} component={HomeContainer} />
            <Route component={ErrorPage} />
            {/* <Route path={`/search`} component={SearchContainer} /> */}
        </Switch>
    </div>
);

export default App;
