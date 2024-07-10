import { Layout } from './components/layout/Layout';
import { AppRouter } from './routes/AppRouter';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Layout />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
