import React  from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './components/home_page/App';
import LandmarkPage from './components/landmark/LandmarkPage';
import CityPage from './components/city/CityPage';

export default function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}></Route>
                <Route exact path="/Landmark" component={LandmarkPage}></Route>
                <Route exact path="/City" component={CityPage}></Route>
            </Switch>
        </BrowserRouter>
    );
}