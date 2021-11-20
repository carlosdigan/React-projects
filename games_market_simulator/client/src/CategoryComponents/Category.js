import React, {useContext} from "react";
import getCategory from "../scraper";
import {setGamesContext, setCurrCategoryContext, CurrPageContext, LoadingGamesContext} from "../App.js";


export default function Category({name, category_id}) {
    const setGames = useContext(setGamesContext);
    const {setCurrCategory, setCurrCategoryID} = useContext(setCurrCategoryContext);
    const {setCurrPage} = useContext(CurrPageContext);
    const {setIsLoadingGames} = useContext(LoadingGamesContext);
    return (
        <button className="btn__category" onClick={el => 
            {   
                setIsLoadingGames(true)
                getCategory(category_id, 1, "") //Default to    page 1
                .then(games => {
                    setGames(games)
                    setCurrCategory(el.target.innerText);
                    setCurrCategoryID(category_id);
                    setCurrPage(1);
                    setIsLoadingGames(false)
                    window.scroll({top: 0})
                    
                })           
            }}>{name}</button>
    )
}