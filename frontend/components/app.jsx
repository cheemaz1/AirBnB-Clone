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
import Modal from './modal/modal';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from "./splash/splash_container";

const App = () => (
    <div>
        <Modal />
        <header>
            <div className="headercomp">
                <Link to="/" className="header-link">
                    <div className="cozybnb"><p className="name"><i className="fab fa-airbnb"></i>cozybnb</p></div>
                </Link> 
                <GreetingContainer />
                <SearchContainer />  
            </div>
        </header>
            {/* <SplashContainer /> */}
            <AuthRoute exact path="/" component={SplashContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            {/* <Route path={`/search`} component={SearchContainer} /> */}
    </div>
);

export default App;
