import React, {useContext} from "react";
import {setGamesContext, CurrPageContext, LoadingGamesContext} from "../App";
import getCategory from "../scraper";
export default function NextPage({currCategory, currCategoryID, buttonsState, setButtonsState, sortByFeature}) {
    const setGames = useContext(setGamesContext);
    const {currPage, setCurrPage} = useContext(CurrPageContext);
    const {setIsLoadingGames} = useContext(LoadingGamesContext);

    if (currPage === pageLimits[currCategory]) return "";

    return <button id="btn__next__page" disabled={buttonsState} onClick={() => {
        setIsLoadingGames(true)
        setButtonsState(true);
        getCategory(currCategoryID, currPage + 1, sortByFeature) 
        .then(games => {
            setGames(games)
            setCurrPage(currPage + 1)
            setButtonsState(false);
            setIsLoadingGames(false)
            window.scroll({top: 0})
        })           
    }}>{">"}</button>
}

const pageLimits = {
    "All Games": 150,
    "Adventure": 71,
    "Arcade": 10,
    "Coaching": 1,
    "FPS": 18,
    "Fighting": 7,
    "Free to Play": 1,
    "Indies": 51,
    "MMO": 3,
    "Management": 10,
    "Multiplayer": 47,
    "Racing": 10,
    "RPG": 38,
    "Simulation": 41,
    "Single Player": 97,
    "Sports": 13,
    "Strategy": 42,
    "Wargame": 9
}