import { AddToCart, DecrementQuantity, IncrementQuantity } from "./Icons"

const baseURL = 'https://res.cloudinary.com/dc2c49xov/desserts/'

const Dessert = ({ dessert, changeData, Data}) => {
    return ( 
        <div className="dessert">
            {dessert.quantity === 0 ? <button onClick={() => {}}><AddToCart/> Add to Cart</button> : <button><DecrementQuantity/> {dessert.quantity} <IncrementQuantity/></button>}
            <picture>
                <source media="(max-width: 375px)" srcset={baseURL + dessert.images.mobile} />
                <source media="(max-width: 768px)" srcset={baseURL + dessert.images.tablet} />
                <img src={baseURL + dessert.images.desktop} alt="" />
            </picture>

        </div>
    )
}

export default Dessert