import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import PlaceList from './pages/PlaceList';
import Destination from './pages/Destination';
import MainPage from './pages/MainPage';
import AuthForm from './pages/AuthForm'
import UserProfile from './pages/UserProfile'

const App = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />}></Route>
    //   </Routes>
    // </BrowserRouter>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/destination/:id" element={<Destination />} />
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;