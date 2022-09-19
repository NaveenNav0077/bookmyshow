import './App.scss';
import Header from './layouts/header/header'
import Shows from './layouts/shows/shows.js'
import Theaters from './routes/theaters/theaters'
import Selected from './routes/selected/selected'
import { Route, Routes  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Shows />} />
        <Route path='/theaters' element={<Theaters />} />
        <Route path='/selected' element={<Selected />} />
      </Routes>
    </div>
  );
}

export default App;
