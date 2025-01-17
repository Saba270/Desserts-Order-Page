import { AddToCart, DecrementQuantity, IncrementQuantity, RemoveItem } from "./Icons"

const baseURL = 'https://res.cloudinary.com/dc2c49xov/desserts/'

const Dessert = ({ dessert, changeQuantity }) => {
    return (
        <div className="dessert">
            <picture> {/*ეკრანის სხვადასხვა ზომებისთვის ვცვლი დესერტის ფოტოს */}
                <source media="(max-width: 425px) and (orientation: portrait)" srcset={baseURL + dessert.images.mobile} />
                <source media="(max-width: 768px) and (orientation: portrait)" srcset={baseURL + dessert.images.tablet} />
                <img className={`${dessert.quantity > 0 ? "selected" : ""}`} src={baseURL + dessert.images.desktop} alt="dessert-image" />

{                /*თუ რაოდენობა 0-ია გამომაქვს Add to cart ღილაკი. სხვა შემთხვევაში მომატება/მოკლების. იმის მიხედვით თუ რას დააჭერს მომხმარებელი changeQuantity ფუნქციას ვაწვდი -1 ან +1*/
}                {dessert.quantity === 0 ? <button className="dessert-btn add-to-cart-btn" onClick={() => { changeQuantity(dessert, 1) }}><AddToCart /> Add to Cart</button> : <figure className="dessert-btn change-amount-btn"><button onClick={() => { changeQuantity(dessert, -1) }}><DecrementQuantity /></button> {dessert.quantity} <button onClick={() => { changeQuantity(dessert, 1) }}><IncrementQuantity /></button></figure>}
            </picture>
            <div className="dessert-info">
{                /*გამომაქვს დესერტზე ინფორმაცია */
}                <p className="dessert-category">{dessert.category}</p>
                <h4 className="dessert-name">{dessert.name}</h4>
                <h4 className="dessert-price">${dessert.price.toFixed(2)}</h4>
            </div>
        </div>
    )
}

export default Dessert