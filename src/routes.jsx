import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@comp/layout'

// Routes
import Editor from './features/editor/routes/';
import System from './features/system/routes/';
import Menu from './features/menu/routes/';
import Level from './features/level/routes/';

const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<System />}></Route>
          <Route path="/level" element={<Level />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/editor" element={<Editor />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default routes;