import React, {useContext} from "react";
import { LoadingGamesContext } from "./App";
export default function Loading() {

    const {isLoadingGames} = useContext(LoadingGamesContext);
    if (isLoadingGames) return <h1 id="loading">{"Loading ..."}</h1>;

    return "";
    
}