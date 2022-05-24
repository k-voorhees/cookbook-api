import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Recipes from './components/pages/Recipes';
import CategoryPage from './components/pages/CategoryPage';
import RecipePage from './components/RecipePage';

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/recipes' element={<Recipes />} />
          <Route path='/:category' element={<CategoryPage />} />
          <Route path='/recipes/:recipe' element={<RecipePage />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
