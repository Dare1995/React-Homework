import { Route, Routes } from "react-router-dom"
import Home from './components/home';
import CountryDetail from './pages/CountryDetail/countryDetail';
import NotFound from './pages/notFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/country/:name" element={<CountryDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;