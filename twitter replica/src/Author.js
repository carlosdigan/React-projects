import React from "react"

export default function Author({author}) {
    return (
        <span className="tweet__author">
            <img className="tweet__author__profile__picture" alt="profile-pic" 
            src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png"></img>
            <span className="tweet__author__name"><b>{author.name}</b></span>
            <span className="tweet__author__handle">{author.handle}</span>
        </span>
    )
}