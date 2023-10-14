import React from 'react';
import Listing from './components/Listing/Listing';
import './App.css';
import data from './components/data.json'
import { itemModel } from './components/models'

function App() {
  const arr: itemModel<string | undefined, number | undefined>[] = [];
  for (const i of data) {
    const { listing_id, url, MainImage, title, currency_code, price, quantity } = i;
    arr.push({ listing_id, url, MainImage, title, currency_code, price, quantity });
  }
  return (
    <>
      <Listing item={arr} />
    </>
  );
}

export default App;
