import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { routes } from 'config/router';

function App() {
  return (
    <Switch>
      <Suspense fallback={<p>Loading...</p>}>
        {routes.map(({ label, privateOnly, publicOnly, ...routeProps }) => (
          <Route key={label} {...routeProps} />
        ))}
      </Suspense>
    </Switch>
  );
}

export default App;
