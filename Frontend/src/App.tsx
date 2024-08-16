import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/edit-item/:id" element={<ItemForm />} />
        <Route path="/add-item" element={<ItemForm />} />
      </Routes>
    </Router>
  );
};

export default App;
