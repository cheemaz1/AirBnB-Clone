import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import HomeContainer from "./home/home_container";
import SpotsIndexContainer from "./spots/spot_index_container";
import SpotContainer from "./spots/spot/spot_container";
import SearchContainer from "./search/search_container";
import ProfileShowContainer from "./profile/profile_show_container";
import { AuthRoute, ProtectedRoute } from "../util/route_utiil";

const App = () => (

    <div>
        <Switch>
            <Route exact path="/" component={HomeContainer} />
        </Switch>
    </div>
);

export default App;