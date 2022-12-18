import {  Route, Routes, useLocation } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion'
import './App.css';
//import component
import Nav from './components/Nav'
import Footer from './components/Footer'
//import Pages
import Home from './pages/Home'
import Company from './pages/Company'
import Mission from './pages/Mission'
import Profession from './pages/Profession'
import Reference from './pages/Reference'
import Contact from './pages/Contact'
// import Loader from './components/Loader'


import Expertise from './pages/Expertise';
import Advisory from './pages/Advisory';
import Audit from './pages/Audit';

//import of components

function App() {

  
  const location = useLocation();//To get the value of the route



  //For frameMotion
    //Use to animate to in and out of company page
  const exitVariants ={
      hidden:{
          opacity:0,
      },
      visible:{
          opacity:1,
          transition:{duration: 0.25},
      },
      exitPage:{
          x: '-100vw',
          transition:{ease: 'easeInOut'}
      }
  }
  //
  //Appear while scrolling
  const revealVariants = {
    offscreen: {
      scale: 0
    },
    onscreen: {
      scale: 1,
      transition:{ 
        delay: 0.5,
        duration: 1.5,
        default: { ease: "easeIn" } 
      }
    },


    offscreen_left: {
      //opacity: 0,
       scale: 0
      //  left: '-50vw',
    },
    offscreen_right: {
     //opacity: 0,
       scale: 0
      //  left: '-50vw',
    },
    
    onscreen_from_left_or_right: {
      scale: 1,
      // x: 0,
      // opacity: 1, 
      transition: {
        ease: 'easeInOut',
      }
    },
  }


  return (

    <div>
    <Nav location={location} />
    <AnimatePresence mode={"wait"} >
      <Routes key={location.key} >
        <Route path="/" element={ <Home exitVariants={exitVariants} revealVariants={revealVariants}  /> }></Route>
        <Route path="/company" element={ <Company exitVariants={exitVariants} revealVariants={revealVariants} /> }></Route>
        <Route path="/mission" element={ <Mission exitVariants={exitVariants} revealVariants={revealVariants}  /> }></Route>
        
        <Route path='/profession' element={ <Profession exitVariants={exitVariants} revealVariants={revealVariants}  /> }>
            <Route index element={<Expertise revealVariants={revealVariants} />} />
            <Route path='expertise' element={<Expertise revealVariants={revealVariants} />} />
            <Route path='audit' element={<Audit revealVariants={revealVariants} />} />
            <Route path='advisory' element={<Advisory revealVariants={revealVariants}  />} />
        </Route>
        <Route path="/reference" element={ <Reference exitVariants={exitVariants} revealVariants={revealVariants}  /> }></Route>
        <Route path="/contact" element={ <Contact exitVariants={exitVariants} revealVariants={revealVariants}  /> }></Route>
      </Routes>
    </AnimatePresence>
    {/* <Loader></Loader> */}
    <Footer />
    </div>
  );
}

export default App;
