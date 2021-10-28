import { Route, Switch } from 'react-router-dom';

import { routes } from 'config/router';
import Layout from './Layout';

function App() {
  return (
    <Switch>
      <Layout>
        {routes.map(({ label, privateOnly, publicOnly, ...routeProps }) => (
          <Route key={label} {...routeProps} />
        ))}
      </Layout>
    </Switch>
  );
}

export default App;
