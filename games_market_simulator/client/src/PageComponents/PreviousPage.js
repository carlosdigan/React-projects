import React, {useContext} from "react";
import {setGamesContext, CurrPageContext, LoadingGamesContext} from "../App";
import getCategory from "../scraper";
export default function PreviousPage({currCategoryID, buttonsState, setButtonsState, sortByFeature}) {
    const setGames = useContext(setGamesContext);
    const {currPage, setCurrPage} = useContext(CurrPageContext);
    const {setIsLoadingGames} = useContext(LoadingGamesContext);

    if (currPage === 1) return "";

    return <button id="btn__prev__page" disabled={buttonsState} onClick={() => {
        setIsLoadingGames(true)
        setButtonsState(true);
        getCategory(currCategoryID, currPage - 1, sortByFeature) 
        .then(games => {
            setGames(games)
            setCurrPage(currPage - 1)
            setButtonsState(false);
            setIsLoadingGames(false)
            window.scroll({top: 0})
        })           
    }}>{"<"}</button>
}