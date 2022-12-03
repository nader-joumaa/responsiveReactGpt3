import React from 'react'

import {Cta,Brand,Navbar} from './components';
import {Blog,Features,Footer,Header,Possibility,WhatGPT3} from './containers';
import './App.css';
export const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Possibility/>
      <Features/>
      <Cta/>
      <Blog/>
      <Footer/>  
    </div>
  )
}
export default App