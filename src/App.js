import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasssicExample from './pages/FormBoot';
import Footer from './pages/footer';
import Header from './pages/header';


function App() {
  return (
    <div className='App'>
    <Header />
    <BasssicExample />
    <Footer/>
    
    </div>
  );
}

export default App;