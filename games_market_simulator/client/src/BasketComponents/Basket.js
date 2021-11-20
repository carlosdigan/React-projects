import React from "react"
import Game from "../GameComponents/Game";
export default function Basket({basketItems}) {
    return basketItems.map(item => {
        return <Game key={item.id} {...item}/>
        })
}