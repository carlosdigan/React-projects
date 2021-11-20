import React, {useContext} from "react";
import { BasketContext } from "../App";
export default function RemoveFromBasket({game}) {
    const {basketItems, setBasketItems} = useContext(BasketContext);
    return (
        <button 
        className="btn__remove__from__basket"
        onClick={() => setBasketItems(removeGame(game, basketItems))}>
            {"Remove from Basket"}
        </button>
    )
}

function removeGame(game, basketItems) {
    const gameIndex = basketItems.findIndex(item => item.title === game.title);
    const newBasketitems = [...basketItems];
    newBasketitems.splice(gameIndex, 1);
    return newBasketitems;

}