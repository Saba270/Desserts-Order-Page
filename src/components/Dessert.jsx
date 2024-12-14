import { AddToCart, DecrementQuantity, IncrementQuantity, RemoveItem } from "./Icons"

const baseURL = 'https://res.cloudinary.com/dc2c49xov/desserts/'

const Dessert = ({ dessert, changeQuantity }) => {
    return (
        <div className="dessert">
            <picture>
                <source media="(max-width: 375px) and (orientation: portrait)" srcset={baseURL + dessert.images.mobile} />
                <source media="(max-width: 768px) and (orientation: portrait)" srcset={baseURL + dessert.images.tablet} />
                <img className={`${dessert.quantity > 0 ? "selected" : ""}`} src={baseURL + dessert.images.desktop} alt="dessert-image" />
                {dessert.quantity === 0 ? <button className="dessert-btn add-to-cart-btn" onClick={() => { changeQuantity(dessert, 1) }}><AddToCart /> Add to Cart</button> : <figure className="dessert-btn change-amount-btn"><button onClick={() => { changeQuantity(dessert, -1) }}><DecrementQuantity /></button> {dessert.quantity} <button onClick={() => { changeQuantity(dessert, 1) }}><IncrementQuantity /></button></figure>}
            </picture>
            <div className="dessert-info">
                <p className="dessert-category">{dessert.category}</p>
                <h4 className="dessert-name">{dessert.name}</h4>
                <h4 className="dessert-price">${dessert.price.toFixed(2)}</h4>
            </div>
        </div>
    )
}

export default Dessert