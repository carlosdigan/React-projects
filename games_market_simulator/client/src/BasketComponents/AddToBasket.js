import React, {useContext} from "react";
import { BasketContext } from "../App";
export default function AddToBasket({game}) {
    const {basketItems, setBasketItems} = useContext(BasketContext);
    return (
        <button 
        className="btn__add__to__basket"
        onClick={() => setBasketItems([...basketItems, game])}>
            {"Add to Basket"}
        </button>
    )
}