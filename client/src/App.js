import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Container from '@material-ui/core/Container';

function App() {

  return (
    <>
      <Navbar />
      <Container maxWidth="md">

        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </Router>

      </Container>
      <Footer />
    </>
  );
}

export default App;
