import { useState } from 'react'
import './App.css'
import Dessert from './components/Dessert'
import desserts from './data.json'
import { use } from 'react'
import Cart from './components/Cart'

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
      <section className='outer-wrapper'>
        <section className='desserts-list-section'>
          <h1>Desserts</h1>
          <div className='dessert-listings'>
            {dessertsData.map((currentDessert) => {
              return <Dessert dessert={currentDessert} changeQuantity={changeQuantity} />
            })}</div>
        </section>
        <section className='cart-section'>
          <Cart desserts={dessertsData} changeQuantity={changeQuantity}/>
        </section>
      </section>

    </>
  )
}

export default App
