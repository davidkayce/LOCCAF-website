import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import Layout from './components/Layout';
import Start from './components/Start';
import Sundays from './components/Sundays';
import About from './components/About';
import Serve from './components/Serve';
import Baptism from './components/Baptism';
import Prayer from './components/Prayer';
import Outreach from './components/Outreach';
import Contact from './components/Contact';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='start' element={<Start/>}/>
        <Route path='/trilith/sundays' element={<Sundays/>}/>
        <Route path='/us' element={<About/>}/>
        <Route path='/serve' element={<Serve/>}/>
        <Route path='/baptism' element={<Baptism/>}/>
        <Route path='/prayer-request' element={<Prayer/>}/>
        <Route path='/outreach' element={<Outreach/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
