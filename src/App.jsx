import { useState } from 'react'
import './App.css'
import { AddToCart, CarbonNeutral, DecrementQuantity, IncrementQuantity, OrderConfirmed, RemoveItem, EmptyCart } from './components/Icons'
import Dessert from './components/Dessert'
import dessertsData from './data.json'

function App() {

  const baseURL = 'https://res.cloudinary.com/dc2c49xov/desserts/'

  return (
    <>
      <section className='desserts-list-section'>
        <h1>Desserts</h1>
        <div>{dessertsData.map((dessert) => {
          return <Dessert name={dessert.name}/>
        })}</div>
      </section>
      <section>

      </section>
    </>
  )
}

export default App
