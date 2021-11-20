import React, {useContext} from 'react'
import AddToBasket from "../BasketComponents/AddToBasket"
import RemoveFromBasket from "../BasketComponents/RemoveFromBasket"
import { BasketContext } from '../App'
export default function Game(game) {
    const {
        img_url,
        title,
        price
    } = game
    return (
        <div className="game">
            <div className="game__img__wrapper">
                <img className="game__img" src={img_url} alt=""></img>
            </div>
            <div className="game__information__wrapper">
                <div className="game__title">{title}</div>
                <div className="game__price__btn__basket__wrapper">
                    <div className="game__price">£ {price.toFixed(2)}</div> 
                    {IsInBasket(game) ? <RemoveFromBasket game={game}/> : <AddToBasket game={game}/>}
                </div>
            </div>
        </div>
    )
}

function IsInBasket(game) {
    const {basketItems} = useContext(BasketContext);
    for (const item of basketItems) {
        if (item.title === game.title) return true
    }
    return false
}