import React, { useEffect } from 'react';
import { useState } from 'react';
import db from './config/Firebase';
import { collection, getDocs } from 'firebase/firestore';

import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Welcome from './components/Welcome';
import Home from './components/Home';
//import '/bulma.css/bulma/css';
import './App.css';

function App() {

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(collection(db, 'users'));
      console.log(data);
    }
    getData();
  }, []);

  const [user, setUser] = useState(null);
  function setUserNull() {
    setUser(null)
  }

  return (
    <Routes>
      <Route path='/' element={<Login setUser={setUser} />} />
      <Route path='/home' element={user ? <Home logOut={setUserNull} /> : <Login setUser={setUser} />} />

    </Routes>

  );
}

export default App;
