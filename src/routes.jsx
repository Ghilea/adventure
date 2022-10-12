import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@comp/layout'

// Routes
import Editor from './features/editor/routes/';
import System from './features/system/routes/';
import Menu from './features/menu/routes/';
import MenuCreate from './features/menu_create_characters/routes/';
import MenuView from './features/menu_view_characters/routes/';
import MenuOptions from './features/menu_options/routes/';
import Level from './features/level/routes/';

const routes = () => {
  useEffect(() => {
    window.open('', "_self", "");
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<System />}></Route>
          <Route path="/level" element={<Level />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/create-character" element={<MenuCreate />}></Route>
          <Route path="/view-character" element={<MenuView />}></Route>
          <Route path="/view-options" element={<MenuOptions />}></Route>
          <Route path="/editor" element={<Editor />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default routes;