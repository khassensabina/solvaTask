import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/LoginPage';
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Layout from './pages/Layout';
import ProtectedPage from './pages/ProtectedPage';
import PeoplePage from './pages/PeoplePage';
import DetailPage from './pages/DetailPage';
import NoPage from './pages/NoPage';
import PlanetsPage from './pages/PlanetsPage';
import StarshipsPage from './pages/StarshipsPage';

export default function App() {  
  return (
    <div className='w-full h-screen'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route element={<ProtectedPage><Layout /></ProtectedPage>}>
            <Route path="/starwars/people/" element={<PeoplePage />} />
            <Route path="/starwars/planets/" element={<PlanetsPage />} />
            <Route path="/starwars/starships/" element={<StarshipsPage />} />
            <Route path="/starwars/:detail/:id" element={<DetailPage />}/>
          </Route>
          <Route path="/*" element={<NoPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}