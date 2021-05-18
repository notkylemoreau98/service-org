import './App.css';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Services from './components/Services';
import FoodBank from './components/serviceComponents/FoodBank';
import Clinics from './components/serviceComponents/Clinics';
import Sustainability from './components/serviceComponents/Sustainability';
import Vaccines from './components/serviceComponents/Vaccines';
import Education from './components/serviceComponents/Education';
import Transportation from './components/serviceComponents/Transportation';
import About from './components/About';
import Team from './components/Team';
import Contact from './components/Contact';
import DonationCheckout from './components/DonationCheckout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51ISAxtHJNiQVOCCAFB9H8O89lSXoKxTiWvi74pglcDmUePobnGna59BzdcFpBiktaVL6BM7paj5fh1IrLkVTxc3x006yKenkUR')

// To-do
// - Double check form validation
// - Header breaks around 1080px

function App() {
  return (

    <Router>
      <ScrollToTop />
      
      <div className="app">
        <Switch>
      
          <Route path="/services">
            <Header />
            <Services />
            <Footer />
          </Route>
        

          <Route path="/foodBank">
            <Header />
            <FoodBank />
            <Footer />
          </Route>
        
          <Route path="/clinics">
            <Header />
            <Clinics />
            <Footer />
          </Route>
        
          <Route path="/sustainability">
            <Header />
            <Sustainability />
            <Footer />
          </Route>
        
          <Route path="/vaccines">
            <Header />
            <Vaccines />
            <Footer />
          </Route>
        
          <Route path="/education">
            <Header />
            <Education />
            <Footer />
          </Route>
        
          <Route path="/transportation">
            <Header />
            <Transportation />
            <Footer />
          </Route>
        
          <Route path="/about">
            <Header />
            <About />
            <Footer />
          </Route>
        
          <Route path="/team">
            <Header />
            <Team />
            <Footer />
          </Route>
        
          <Route path="/contact">
            <Header />
            <Contact />
            <Footer />
          </Route>
        
          <Route path="/donationCheckout">
            <Header />
            <DonationCheckout />
            <Footer />
          </Route>
        
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        
        </Switch>

      </div>  

    </Router>

  );
}

export default App;
