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
            <Link to="/" className="header-link">
                <h1 className="cozybnb"><i className="fab fa-airbnb"></i>cozybnb</h1>
            </Link>
            <GreetingContainer />
            <SearchContainer />
            <SplashContainer />
        </header>
            {/* <AuthRoute exact path="/" component={SplashContainer} /> */}
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            {/* <Route path={`/search`} component={SearchContainer} /> */}
    </div>
);

export default App;
