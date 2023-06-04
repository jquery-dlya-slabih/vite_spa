import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routesConfig from './routesConfig';

const App = () => (
  <BrowserRouter>
    <Routes>
      {routesConfig.map(route => (
        <Route
          path={route.path}
          element={route.element()}
          key={route.key}
        />
      ))}
    </Routes>
  </BrowserRouter>
);

export default App;
