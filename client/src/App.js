import React from 'react';
import Navbar from './components/Navbar.js';
import CardGrid from './components/CardGrid.js';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

function App() {

  return (
    <Container maxWidth="md">

      <Box component="span" m={2}>
        <Navbar />
      </Box>
        <CardGrid />
    </Container>
  );
}

export default App;
