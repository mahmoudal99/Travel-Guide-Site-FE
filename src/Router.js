import React  from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './components/home_page/App';

export default function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}></Route>
            </Switch>
        </BrowserRouter>
    );
}