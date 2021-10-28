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
  {
    exact: true,
    path: '/groups',
    component: lazy(
      () => import('views/Groups' /* webpackChunkName: 'Groups' */)
    ),
    label: 'Groups',
    privateOnly: true,
    publicOnly: false,
  },
  {
    exact: true,
    path: '/groups/:groupId',
    component: lazy(
      () => import('views/Group' /* webpackChunkName: 'Group' */)
    ),
    label: 'Group',
    privateOnly: true,
    publicOnly: false,
  },
  {
    exact: true,
    path: '/login',
    component: lazy(
      () => import('views/Login' /* webpackChunkName: 'Login' */)
    ),
    label: 'Login',
    privateOnly: false,
    publicOnly: true,
  },
  {
    exact: true,
    path: '/register',
    component: lazy(
      () => import('views/Register' /* webpackChunkName: 'Register' */)
    ),
    label: 'Register',
    privateOnly: false,
    publicOnly: true,
  },
];
