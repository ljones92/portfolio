import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';
import Error from './views/Error';

const Root = () => (
    <Router>
        <div>
            <Switch>
                <Route exact path='/' component={App} />
                <Route component={Error} />
            </Switch>
        </div>
    </Router>
);

const render = (Component) => {
  ReactDOM.render(
      <Component />,
      document.getElementById('root'),
  );
};

render(Root);
