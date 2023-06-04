import { lazy, Suspense } from 'react';

const NewsLazy = lazy(() => import('./news'));

const News = () => (
  <Suspense>
    <NewsLazy />
  </Suspense>
);

export default News;
