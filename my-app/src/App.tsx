import React from 'react';
import Listing from './components/Listing/Listing';
import './App.css';
import { data } from './components/data';
import { itemModel } from './components/models'; 


function App() {
  const item: [] = JSON.parse(data);
  console.log(item)
  return (
    <>
    <Listing />
    </>
  );
}

export default App;
