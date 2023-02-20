import React from 'react';
import { Routes,Route } from 'react-router-dom';
import { Navbar } from '../Nav/Navbar';
import { Footer } from '../Footer/Footer';
import { Home } from '../pages/Home';
import { Recipies } from '../pages/Recipies';
import { AddPage } from '../pages/AddPage';
import { Settings } from '../pages/Settings';

export const App: React.FC = () =>{
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
      <Footer 
      appInfo={
      "Recipie book це місце де ти можеш вільно створювати, зберігати, і знаходити рецептидля того щоб порадувати сім'ю і знайомих. Експерементуй, отримуй позитивні відгуки, ділисьі будь собою з Recipie book."
      }
      facebookLink = {"https://www.facebook.com/"}
      instagramLink = {"https://www.instagram.com/"}
      twitterLink= {"https://twitter.com/"}
      />
    </>
  );
};