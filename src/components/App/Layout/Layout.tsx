import { Suspense } from 'react';
import { Pane } from 'evergreen-ui';

import { ChildrenProps } from 'types';
import Navbar from './Navbar';

function Layout({ children }: ChildrenProps) {
  return (
    <Pane>
      <Navbar />

      <Pane paddingX={32} marginTop={24}>
        <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>
      </Pane>
    </Pane>
  );
}

export default Layout;
