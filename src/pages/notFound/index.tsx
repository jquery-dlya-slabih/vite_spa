import { lazy, Suspense } from 'react';

const NotFoundLazy = lazy(() => import('./notFound'));

const NotFound = () => (
  <Suspense>
    <NotFoundLazy />
  </Suspense>
);

export default NotFound;
