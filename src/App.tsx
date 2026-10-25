import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import StagePage from './pages/StagePage';
import Technology from './pages/Technology';
import Investment from './pages/Investment';
import Vision from './pages/Vision';
import Transparency from './pages/Transparency';
import Business from './pages/Business';
import Privacy from './pages/Privacy';
import Pilots from './pages/Pilots';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="fases/:stageId" element={<StagePage />} />
          <Route path="tecnologia" element={<Technology />} />
          <Route path="inversion" element={<Investment />} />
          <Route path="vision" element={<Vision />} />
          <Route path="transparencia" element={<Transparency />} />
          <Route path="empresas" element={<Business />} />
          <Route path="privacidad" element={<Privacy />} />
          <Route path="pilotos" element={<Pilots />} />
          <Route path="pilotos/:pilotId" element={<Pilots />} />
          <Route path="*" element={<div className="max-w-4xl mx-auto p-8"><h1 className="text-3xl font-bold">Página no encontrada</h1><p className="mt-4">Utiliza la navegación para volver al proyecto.</p></div>} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
