import React from "react";
import Comment from "./Comment"
import Like from "./Like"
import Retweet from "./Retweet"

export default function Actions({tweet}) {
    return (
        <span className="tweet__actions">
            <span className="tweet__action__wrapper">
                <Comment id={tweet.id} commented={tweet.commented}/>
                <span className="tweet__comments__count">{tweet.comments}</span>
            </span>
            <span className="tweet__action__wrapper">
                <Like id={tweet.id} liked={tweet.liked}/>
                <span className="tweet__likes__count">{tweet.likes}</span>
            </span>
            <span className="tweet__action__wrapper">
                <Retweet id={tweet.id} retweeted={tweet.retweeted}/>
                <span className="tweet__retweets__count">{tweet.retweets}</span>
            </span>
        </span>
    )
}