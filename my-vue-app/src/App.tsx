import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import { Layout } from './components/Layout';
import { HomePage } from './components/BodyPage/HomePage';
import { PageGreen } from './components/BodyPage/PageGreen';
import { PageRed } from './components/BodyPage/PageRed';
import { PageYellow } from './components/BodyPage/PageYellow';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout >
        <Header />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/green" element={<PageGreen />} />
          <Route path="/red" element={<PageRed />} />
          <Route path="/yellow" element={<PageYellow />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
