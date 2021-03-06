import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import CiudadListContainer from './containers/CiudadList';

const Routes = () => {

    return(
        <Switch>
            <Route exact path='/' component= {Home} />
            <Route path='/ciudades' component={CiudadListContainer} />
        </Switch>
    );
}

export default Routes;