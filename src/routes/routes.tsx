import { links } from './links';
import { CompletedPage, HomePage } from '../pages';

interface IRoutesChilder {
  path: string;
  element: React.ReactElement;
}

export interface IPublicRoutes {
  children: IRoutesChilder[];
}

export const publicRoutes: IPublicRoutes[] = [
  {
    children: [
      {
        path: links.home,
        element: <HomePage />,
      },
      {
        path: links.completed,
        element: <CompletedPage />,
      },
    ],
  },
];
