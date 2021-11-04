//import logo from './logo.svg';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

import { Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App(){
    const location = useLocation();
    return (
        <>
            { location.pathname !== "/" ? <Header />:""}
            <Route exact path="/">
                <Home />
            </Route>
             <Route exact path="/about">
                <About />
            </Route>
            <Route exact path="/porfolio">
                <Portfolio />
            </Route>
             <Route exact path="/resume">
                <Resume />
            </Route>
             <Route exact path="/contact">
                <Contact />
            </Route>
            { location.pathname !== "/" ? <Footer />:"" }
        </>
    );
}

export default App;
