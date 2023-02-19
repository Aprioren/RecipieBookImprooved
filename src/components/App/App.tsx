import React from 'react';
import { Routes,Route } from 'react-router-dom';
import { Navbar } from '../Nav/Navbar';
import { Footer } from '../Footer/Footer';
import { Home } from '../pages/Home';
import { Recipies } from '../pages/Recipies';
import { AddPage } from '../pages/AddPage';
import { Settings } from '../pages/Settings';

function App() {
  return (
    <>
      <Navbar />
      <div className='container main'>
        <Routes>
          <Route path='/' element={ <Home />}/>
          <Route path='/recipies' element={<Recipies />}/>
          <Route path='/addpage' element={ <AddPage />}/>
          <Route path='/settings' element={ <Settings />}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
