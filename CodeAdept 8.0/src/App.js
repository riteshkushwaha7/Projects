import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import  Flag   from "./components/Banner2";
import  Info  from "./components/Info";
 import  Gallery  from "./components/gallery";
import { Skills } from "./components/Skills";  // About page content
import { About } from "./components/About";
import { Teams } from './components/Teams'; 
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Timeline } from './components/Timeline';
import Registration from './components/Registration';
import Announcement from './components/Announcement';

function App() {
  return (
    <Router>
      <div className="App">
         <NavBar /> 
        <Routes>
          {/* Home Page Route */}
          <Route path="/" element={
            <>
              <Banner />
              <Skills />
              <About />
              <Contact /> 
              <Footer />
            </>
          } />
          
          
          {/* Teams Page Route */}
          <Route path="/teams" element={
            <>
              <Banner />
              <Teams />
              <Footer />
            </>
          } />

          {/* Timeline Page Route */}
          <Route path="/CodeAdept" element={
            <>
               <Flag />
               <Announcement />
               <Info />
               <Timeline />
              <Gallery /> 
              <Footer />
            </>
          } />

          {/* Contact Page Route */}
          <Route path="/contact" element={
            <>
              <Banner />
              <Contact />
              <Footer />
            </>
          } />
           <Route path="/register" element={
            <>
              <Registration />
              <Footer />
            </>
          } />
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;
