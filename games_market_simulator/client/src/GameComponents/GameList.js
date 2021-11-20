import React from "react";
import Game from "./Game";

export default function GameList({games}) {
    return games.map(game => {
        return <Game key={game.id} {...game}/>
      })
}