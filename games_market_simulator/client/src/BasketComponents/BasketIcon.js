import React from "react";
import basket_img from "../Images/basket.png";

export default function Basket({numberOfItems, setShowBasket}) {
    return (
        <div id="basket" 
        onClick={() => {
            setShowBasket(true)
            window.scroll({top: 0})
        }}>
                <div id="basket__items">{numberOfItems}</div>
                <img id="basket-img" src={basket_img} alt=""></img>
        </div>
    )
}