import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';


function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    );
}

export default Routes;
