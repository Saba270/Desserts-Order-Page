import { useState } from 'react'
import './App.css'
import { AddToCart, CarbonNeutral, DecrementQuantity, IncrementQuantity, OrderConfirmed, RemoveItem, EmptyCart } from './components/Icons'
import Dessert from './components/Dessert'
import desserts from './data.json'
import { use } from 'react'

function App() {
  const [dessertsData, setDessertsData] = useState(desserts.map((dessert) => {
    return { ...dessert, quantity: 0 }
  }))

  const changeQuantity = (dessert, changeAmount) => {
    dessert.quantity += changeAmount;
    const newList = dessertsData.filter((currentDessert) => {
      if (dessert === currentDessert) return { ...dessert, quantity: dessert.quantity + changeAmount }
      else return currentDessert
    })
    console.log(newList)
    setDessertsData(newList)
  }


  return (
    <>
      <section className='desserts-list-section'>
        <h1>Desserts</h1>
        <div className='dessert-listings'>{dessertsData.map((currentDessert) => {
          console.log(currentDessert)
          return <Dessert dessert={currentDessert} changeQuantity={changeQuantity} />
        })}</div>
      </section>
      <section>
        
      </section>
    </>
  )
}

export default App
