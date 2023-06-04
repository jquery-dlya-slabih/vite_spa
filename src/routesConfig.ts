import { Main, News, NotFound } from './pages';

enum PATH {
  MAIN = '/',
  NEWS = '/news',
  NOT_FOUND = '*'
}

export default [
  {
    path: PATH.MAIN,
    element: Main,
    key: 'main'
  },
  {
    path: PATH.NEWS,
    element: News,
    key: 'news'
  },
  {
    path: PATH.NOT_FOUND,
    element: NotFound,
    key: 'not_found'
  }
];
