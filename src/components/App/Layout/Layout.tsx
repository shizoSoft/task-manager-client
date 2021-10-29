import { Suspense } from 'react';
import { Pane, Spinner } from 'evergreen-ui';

import { ChildrenProps } from 'types';
import Navbar from './Navbar';

function Layout({ children }: ChildrenProps) {
  return (
    <Pane>
      <Navbar />

      <Pane paddingX={32} marginTop={24}>
        <Suspense
          fallback={
            <Pane
              display="flex"
              alignItems="center"
              justifyContent="center"
              height={400}
            >
              <Spinner size={64} />
            </Pane>
          }
        >
          {children}
        </Suspense>
      </Pane>
    </Pane>
  );
}

export default Layout;
