import { CarbonNeutral, RemoveItem, EmptyCart } from "./Icons"

const Cart = ({ desserts, changeQuantity }) => {
    //სიაში ვინახავ ყველა დესერტს რომლის რაოდენობას 0 არ არის ანუ მომხმარებელმა დაამატა
    const cartItems = desserts.filter((dessert) => {
        return dessert.quantity > 0;
    })

    let finalPrice = 0;
    cartItems.forEach(item => { //ვითვლი ჯამურ ფასს ყველა დესერტის რაოდენობის ფასზე გამრავლებით და შეკრებით
        finalPrice += item.quantity * item.price
    });

    return (
        <div className="cart">
            <h2>Your Cart ({cartItems.length})</h2>
{            /*თუ cartItems სია ცარიელია მაშინ გამომაქვს ცარიელი ურიკა */
}            {cartItems.length === 0 ? <section className='empty-cart'>
                <EmptyCart />
                <p>Your added items will apper here</p>
            </section>
                : /*თუ არ არის ცარიელი გამოდის დამატებული დესერტების ჩამონათვალი */
                <>
                    <section className='cart-items-list'>
                        <p></p>
                        <ul>
                            {cartItems.map((item) => {
                                return ( //გამომაქვს დამატებულ დესერტებზე ინფორმაცია
                                    <li className="cart-item">
                                        <p className="item-name">{item.name}</p>
                                        <p><span className="item-quantity">{item.quantity}x</span>
                                            <span className="item-price">@ ${item.price.toFixed(2)}</span>
                                            <span className="item-sum">${(item.quantity * item.price).toFixed(2)}</span></p>
                                        <button className="remove-btn" onClick={() => { changeQuantity(item, -item.quantity) }}><RemoveItem /></button>
                                    </li>
                                )
                            })}
                        </ul>
                    </section>
                    <section className="final-order-section">
                        <p>Order Total <span>${finalPrice.toFixed(2)}</span></p> {/*გამომაქვს საბოლოო ფასი მეასედამდე სიზუსტით */}
                        <figure>
                            <p><CarbonNeutral />&nbsp;  This is a &nbsp;<b> carbon-neutral</b> &nbsp;delivery</p>
                        </figure>
                        <button className="confirm-order-btn">Confirm Order</button>
                    </section>
                </>
            }


        </div>
    )
}

export default Cart