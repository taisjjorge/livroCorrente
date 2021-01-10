import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Bibliotecas from './Pages/Bibliotecas/Bibliotecas';
import QuemSomos from './Pages/QuemSomos/QuemSomos';


function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Bibliotecas" component={Bibliotecas} />
            <Route path="/QuemSomos" component={QuemSomos} />
        </Switch>
    );
}

export default Routes;
