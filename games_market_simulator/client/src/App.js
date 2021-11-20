import React, {useEffect, useState} from 'react'
import BasketIcon from "./BasketComponents/BasketIcon"
import Basket from "./BasketComponents/Basket"
import closeBasketImg from "./Images/closeBasket.png"
import "./style/css/App.css"
import getCategory from "./scraper"
import GameList from "./GameComponents/GameList"
import Loading from "./Loading"
import CategoryList from "./CategoryComponents/CategoryList"
import PreviousPage from "./PageComponents/PreviousPage"
import NextPage from "./PageComponents/NextPage"
import SortBy from "./SortByComponents/SortBy"


export const setGamesContext = React.createContext()
export const setCurrCategoryContext = React.createContext()
export const CurrPageContext = React.createContext();
export const LoadingGamesContext = React.createContext();
export const BasketContext = React.createContext();

function App() {
  const [isLoadingGames, setIsLoadingGames] = useState(false)
  const [isFirstRender, setFirstRender] = useState(true);
  const [games, setGames] = useState();
  const [currCategory, setCurrCategory] = useState("All Games");
  const [currCategoryID, setCurrCategoryID] = useState("")
  const [currPage, setCurrPage] = useState(1);
  const [buttonsState, setButtonsState] = useState(false);
  const [basketItems, setBasketItems] = useState([]);
  const [showBasket, setShowBasket] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Trending");
  const [sortByFeature, setSortByFeature] = useState("");


  useEffect(() => {
    //On first render make fetch call to load games
    const games = getCategory(categories[0].category_id, 1, "");
    games.then(result => {
      setGames(result)
      setFirstRender(false);
    })
  }, [])
 
  useEffect(() => {
   //Load basket from local storage
    const LoadBasket = JSON.parse(localStorage.getItem("shopping_games_basket"));
    setBasketItems(LoadBasket || []); //If nothing in basket just set to empty
  }, [])
 
  useEffect(() => {
    //Save basket in local storage
    localStorage.setItem("shopping_games_basket", JSON.stringify(basketItems));
  }, [basketItems])
 


  if (isFirstRender) {
    return <h1 id="firstLoad">Loading ...</h1>;
  }

  else {
    if (showBasket) return (
      <BasketContext.Provider value={{basketItems, setBasketItems}}>
        <div id="basket__heading__wrapper">
          <div></div>
          <h1 id="basket__heading">Basket</h1>
          <input type="image" 
            alt=""
            id="basket__close"
            src={closeBasketImg}
            onClick={() => setShowBasket(false)}>
          </input>
        </div>
        <div id="basket__information">
          <span id="basket__total">{"Basket total: £"}<span id="basket__total__price">{basketTotal(basketItems)}</span></span>
          <span id="basket__items__count">{`Number of games: ${basketItems.length}`}</span>
        </div>
        <div className="game__list">
          <Basket {...{basketItems, setBasketItems}}/>
        </div>
      </BasketContext.Provider>
    )
    
    return (
      <>  
        <BasketContext.Provider value={{basketItems, setBasketItems}}>
        <LoadingGamesContext.Provider value={{isLoadingGames, setIsLoadingGames}}>
        <setGamesContext.Provider value={setGames}>
        <setCurrCategoryContext.Provider value={{setCurrCategory, setCurrCategoryID}}>
        <CurrPageContext.Provider value={{currPage, setCurrPage}}>
          <Loading/>
          <div id="navbar">
            <div id="CategoryList">
              <CategoryList categories={categories}/>
            </div>
            <BasketIcon numberOfItems={basketItems.length}  setShowBasket={setShowBasket}/>
          </div>

          <PreviousPage {...{currCategoryID, buttonsState, setButtonsState, sortByFeature}}/>
          <NextPage {...{currCategoryID, currCategory, buttonsState, setButtonsState, sortByFeature}}/>

        
          <div id="div__heading">
            <SortBy {...{options, setButtonsState, setSortByFeature, setGames, selectedOption, setSelectedOption, currCategoryID}}/>
            <div id="current__category">{currCategory}</div>
            <div id="current__page">{`Page ${currPage}`}</div>
          </div>
          <div className="game__list">
            <GameList games={games}/>
          </div>
        </CurrPageContext.Provider>
        </setCurrCategoryContext.Provider>
        </setGamesContext.Provider>
        </LoadingGamesContext.Provider>
        </BasketContext.Provider>
        </>  
      )
    }  
}

function basketTotal(basketItems) {
  let total = 0
  for (const item of basketItems) 
    total += item.price;

  return total.toFixed(2);
}

const categories = [
 {name: "All Games", category_id: ""},
 {name: "Adventure", category_id: "4"},
 {name: "Arcade", category_id: "2"},
 {name: "Coaching", category_id: "6"},
 {name: "FPS", category_id: "9"},
 {name: "Fighting", category_id: "7"},
 {name: "Free to Play", category_id: "35"},
 {name: "Indies", category_id: "32"},
 {name: "MMO", category_id: "12"},
 {name: "Management", category_id: "10"},
 {name: "Multiplayer", category_id: "23"},
 {name: "Racing", category_id: "8"},
 {name: "RPG", category_id: "11"},
 {name: "Simulation", category_id: "15"},
 {name: "Single Player", category_id: "47"},
 {name: "Sports", category_id: "16"},
 {name: "Strategy", category_id: "17"},
 {name: "Wargame", category_id: "18"},
]

const options = [
  {value: "", text: "Trending"},
  {value: "bestsellers_desc", text: "Best sellers"},
  {value: "price_asc", text: "Price ascending"},
  {value: "price_desc", text: "Price descending"},
  {value: "reviews_avg_desc", text: "Top rated"},
  {value: "reviews_avg_asc", text: "Least rated"},
  {value: "avail_date_desc", text: "Newest"},
  {value: "avail_date_asc", text: "Oldest"},
]

export default App;
