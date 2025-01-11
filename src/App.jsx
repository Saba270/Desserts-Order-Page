import { useState } from 'react'
import './App.css'
import Dessert from './components/Dessert'
import desserts from './data.json'
import { use } from 'react'
import Cart from './components/Cart'

function App() {
  //State-ში ვინახავ დესერტებზე ინფორმაციას
  const [dessertsData, setDessertsData] = useState(desserts.map((dessert) => {
    return { ...dessert, quantity: 0 }
  }))

  //დესერტის რაოდენობას ვცვლით +1,-1, ან -რაოდენობით ანუ ვანულებთ
  const changeQuantity = (dessert, changeAmount) => {
    dessert.quantity += changeAmount;
    const newList = dessertsData.filter((currentDessert) => { //ახალ სიაში ვინახავთ ყველა ძველ დესერტს და გადმოცემულს ვინახავთ ახალი რაოდენობით
      if (dessert === currentDessert) return { ...dessert, quantity: dessert.quantity}
      else return currentDessert
    })
    setDessertsData(newList)//ვანახლებ დესერტების მონაცემებს
  }


  return (
    <>
      <section className='outer-wrapper'>
        <section className='desserts-list-section'>
          <h1>Desserts</h1>
          <div className='dessert-listings'>
            {dessertsData.map((currentDessert) => {
              return <Dessert dessert={currentDessert} changeQuantity={changeQuantity} /> /*Dessert კომპონენტს ვაწვდი საჭირო ინფორმაციას და ვარენდერებ ყველას*/
            })}
          </div>
        </section>
        <section className='cart-section'>
          <Cart desserts={dessertsData} changeQuantity={changeQuantity} /> /*Cart კომპონენტს ვაწვდი საჭირო ინფორმაციას და ვარენდერებ */
        </section>
      </section>

    </>
  )
}

export default App
