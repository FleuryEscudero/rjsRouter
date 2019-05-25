import React from 'react';
import {makeMainRoutes} from '../router/routes';

const routes = makeMainRoutes();

function App() {
    return (
        <div className="contenedor">
            {routes}
        </div>
    );
}

export default App;
