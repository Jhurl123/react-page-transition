import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom"
import Header from './Header'
import Container from './Container';

const App = () => (
  <div className="App">
    <Header></Header>
    <Container></Container>  
  </div>
)

export default App;
