import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';

// Seperate components that i've made
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Royce Le',
            headerLinks: [
              { title: 'Home', path: '/' },
              { title: 'About', path: '/about' },
              { title:  'Contact', path: '/contact' },
            ],
            home: {
              title: 'Be Relentless',
              subTitle: 'Project that make a difference',
              text: 'Checkout my projects below'
            },
            about: {
              title: 'About Me'
            },
            contact: {
              title: 'Let\'s Talk'
            }
        }
    }
  
  render() {
    return (
        <Router>
          {/* p-0 is for padding*/}
          <Container className="p-0" fluid={true}> 
            <Navbar className="border-bottom" bg="transparent" expand="lg">
                <Navbar.Brand>Royce Le</Navbar.Brand>
                {/* border-0 gets rid of the border of the hamburger menu */}
                <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
                <Navbar.Collapse id="navbar-toggle">
                  {/* ml-left is part of bootstrap that floats to right*/}
                  <Nav className="ml-auto">
                    {/* the 'to' prop acts as the url path*/}
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/about">About</Link>
                    <Link className="nav-link" to="/contact">Contact</Link>

                  </Nav>
                </Navbar.Collapse>
            </Navbar>            
              
              {/* We're saying that when you're at this path, render this component */}
              {/* the exact keyword is there because if not, then / would be same as /about or /contact */}
              <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
              <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
              <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />

            <Footer />
             
          </Container>
        </Router>
    );
  }

}

export default App;
