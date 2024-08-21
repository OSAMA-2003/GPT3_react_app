import './App.css';

import { Footer , Header , WhatGPT3 ,Possibillity , Features,Blog  } from './containers';

import {Cta,Navbar,Brand} from'./components'


function App() {
  return (
    <div className="App">
    <div className='gradient__bg'>
      <Navbar/>
      <Header/>
    </div>
    <Brand/>
    <WhatGPT3/>
    <Features/>
    <Possibillity/>
    <Cta/>
    <Blog/>
    <Footer/>
    </div>
  );
}

export default App;
