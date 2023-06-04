import { lazy, Suspense } from 'react';

const MainLazy = lazy(() => import('./main'));

const Main = () => (
  <Suspense>
    <MainLazy />
  </Suspense>
);

export default Main;
