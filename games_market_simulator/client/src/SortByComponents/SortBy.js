import React, {useContext} from "react";
import Option from "./Option";
import { v4 } from 'uuid';
import {setGamesContext, CurrPageContext, LoadingGamesContext} from "../App";
import getCategory from "../scraper";

export default function SortBy(props) {
    const {
        options, 
        currCategoryID, 
        setSelectedOption, 
        selectedOption, 
        setButtonsState, 
        setSortByFeature } = props
    const setGames = useContext(setGamesContext);
    const {currPage} = useContext(CurrPageContext);
    const {setIsLoadingGames} = useContext(LoadingGamesContext);
    const args = [setGames, setSelectedOption, currCategoryID, setSortByFeature, setButtonsState, currPage, setIsLoadingGames];
    
    return (
            <div id="sort__by__wrapper">
                <label id="label__sort__games" htmlFor="sortByDropdown">Sort by</label>
                <select 
                value={selectedOption}
                name="sortByDropdown" 
                id="sort__by__dropdown" 
                onChange={selectEl => sortGames([selectEl, ...args])}> 
                    {options.map(option => {
                        return <Option key={v4()} option={option}/>
                    })}
                </select>
            </div>
    )
}

async function sortGames(args) {
    const [
        selectEl, 
        setGames, 
        setSelectedOption, 
        currCategoryID, 
        setSortByFeature, 
        setButtonsState,  
        currPage,
        setIsLoadingGames] = args;

    const sortByOption = selectEl.target.value
    setButtonsState(true);
    setSortByFeature(sortByOption);
    setSelectedOption(selectEl.target.value);
    getCategory(currCategoryID, currPage, sortByOption) 
        .then(games => {
            setGames(games)
            setButtonsState(false);
            setIsLoadingGames(false)
        })           
}