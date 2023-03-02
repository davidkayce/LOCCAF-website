import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Layout from './components/Layout';
import Start from './components/Start';
import Sundays from './components/Sundays';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='start' element={<Start/>}/>
        <Route path='/trilith/sundays' element={<Sundays/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
