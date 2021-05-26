import React from 'react';
import Navbar from './components/Navbar.js';
import CardGrid from './components/CardGrid.js';
import Footer from './components/Footer.js';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

function App() {

  return (
    <>
    <Navbar />

    <Container maxWidth="md">
        <CardGrid />
        <Footer />
    </Container>

    
    </>
  );
}

export default App;
