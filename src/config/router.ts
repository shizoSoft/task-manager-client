import { lazy } from 'react';
import { RouteProps } from 'react-router-dom';

interface RouteConfig extends RouteProps {
  label: string;
  privateOnly: boolean;
  publicOnly: boolean;
}

export const routes: RouteConfig[] = [
  {
    exact: true,
    path: '/',
    component: lazy(() => import('views/Home' /* webpackChunkName: 'Home' */)),
    label: 'Home',
    privateOnly: false,
    publicOnly: false,
  },
];
