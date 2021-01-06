import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Bibliotecas from './Pages/Bibliotecas/Bibliotecas';


function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Bibliotecas" component={Bibliotecas} />
        </Switch>
    );
}

export default Routes;
