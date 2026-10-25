import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import StagePage from './pages/StagePage';
import Technology from './pages/Technology';
import Security from './pages/Security';
import Investment from './pages/Investment';
import Commercial from './pages/Commercial';
import Modules from './pages/Modules';
import ModulesTest from './pages/ModulesTest';
import Continuity from './pages/Continuity';
import Vision from './pages/Vision';
import Transparency from './pages/Transparency';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="fases/:stageId" element={<StagePage />} />
          <Route path="tecnologia" element={<Technology />} />
          <Route path="seguridad" element={<Security />} />
          <Route path="inversion" element={<Investment />} />
          <Route path="comercializacion" element={<Commercial />} />
          <Route path="modulos" element={<Modules />} />
          <Route path="modulos-test" element={<ModulesTest />} />
          <Route path="continuidad" element={<Continuity />} />
          <Route path="vision" element={<Vision />} />
          <Route path="transparencia" element={<Transparency />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
