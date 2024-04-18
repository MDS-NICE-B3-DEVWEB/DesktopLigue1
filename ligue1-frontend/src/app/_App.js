import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';

function App() {
 
  return (
        <Router>
          {/* <Header /> */}
          <Routes>
            {/* Autres */}
            <Route path='/' element={<HomePage />} />
            {/* <Route path='/tarifs' element={<Tarifs />} /> */}

          </Routes>
          {/* <Footer /> */}
        </Router>
  );
}

export default App;
