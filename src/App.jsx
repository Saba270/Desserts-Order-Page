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


  return (
    <>
      <section className='desserts-list-section'>
        <h1>Desserts</h1>
        <div>{dessertsData.map((currentDessert) => {
          console.log(currentDessert)
          return <Dessert dessert={currentDessert} changeData={setDessertsData} Data={dessertsData}/>
        })}</div>
      </section>
      <section>

      </section>
    </>
  )
}

export default App
