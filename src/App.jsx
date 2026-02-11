import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Threads from './Pages/Threads';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ThreadDetail from './Pages/ThreadDetail';
import MainLayout from './Layouts/MainLayout';
import AddThread from './Pages/AddThread';

function App() {
  return (
    <Routes>
      {/* MAIN */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Threads />} />
        <Route path="/add-thread" element={<AddThread />} />
        <Route path="/:id" element={<ThreadDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
