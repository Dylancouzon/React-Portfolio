import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Container from '@material-ui/core/Container';

function App() {

  return (
    <Router>
      <Navbar />
      <Container maxWidth="md">
        <Route exact path="/about" component={About} />
        <Route path="/*" component={Home} />
        
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
