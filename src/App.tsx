import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/pages/Home/Home';
import Favourites from './components/pages/Favourites/Favourites';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favourites' element={<Favourites />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
