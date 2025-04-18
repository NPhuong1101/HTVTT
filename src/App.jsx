import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import PlaceList from './pages/PlaceList';
import Destination from './pages/Destination';

const App = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />}></Route>
    //   </Routes>
    // </BrowserRouter>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlaceList />} />
        <Route path="/destination/:id" element={<Destination />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;