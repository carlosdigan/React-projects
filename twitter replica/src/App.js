import React, { useState } from "react"
import Tweets from "./Tweets"
import NewTweet from "./NewTweet"
import { Routes, Route } from "react-router-dom"
import "./style/App.css" 
import { v4 } from "uuid"
export const tweetsContext = React.createContext();

function App() {
    const [tweets, setTweets] = useState(fake_tweets)
    return (
        <tweetsContext.Provider value={{tweets, setTweets}}>
            <Routes>
                <Route path="/new_tweet" element={<NewTweet/>}/>
                <Route path="/" element={<Tweets tweets={tweets}/>}/>
            </Routes>
        </tweetsContext.Provider>
   )
}



const fake_tweets = [
    {author: {name: "User", handle: "@User123132"}, 
    content: {text: "This is my first tweet"},
    comments: 0,
    likes: 0,
    retweets: 0,
    id: v4(),
    commented: false,
    liked: false,
    retweeted: false
},
    {author: {name: "Twitter Poster", handle: "@TwitterUser32143254326"}, 
    content: {text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati autem, quo perferendis, assumenda placeat ab cumque ratione nam necessitatibus nemo, cupiditate at recusandae aliquid sunt nulla? Enim quidem consequuntur perspiciatis?"},
    comments: 0,
    likes: 0,
    retweets: 0,
    id: v4(),
    commented: false,
    liked: false,
    retweeted: false
}
]


export default App