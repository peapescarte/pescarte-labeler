import { RouterProvider } from 'react-router-dom';
import router from './routes/router';

/**
 * Arquivo inicial da aplicação
 * Está disponibilizando o provedor de rotas.
 */
function App() {
  return <RouterProvider router={router} />;
}

export default App;
