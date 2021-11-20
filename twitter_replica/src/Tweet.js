import React from "react";
import Author from "./Author"
import TweetContent from "./TweetContentComponents/TweetContent"
import Actions from "./ActionComponents/Actions"
export default function Tweet({tweet}) {
    return (
        <article className="tweet">
            <Author author={tweet.author}/>
            <TweetContent content={tweet.content}/>
            <Actions tweet={tweet}/>
        </article>
    )
}