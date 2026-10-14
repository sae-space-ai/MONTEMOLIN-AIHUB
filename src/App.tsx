import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import StagePage from './pages/StagePage';
import Technology from './pages/Technology';
import Security from './pages/Security';
import Investment from './pages/Investment';
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
          <Route path="vision" element={<Vision />} />
          <Route path="transparencia" element={<Transparency />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
