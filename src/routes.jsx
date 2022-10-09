import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
// Routes
import Editor from './features/editor/routes/';
import System from './features/system/routes';

const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<System />}></Route>
          <Route path="/editor" element={<Editor />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default routes;