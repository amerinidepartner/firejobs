import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
