import React, {useEffect, useState, useContext} from "react";
import { useNavigate } from "react-router";
import { tweetsContext } from "./App";
import submitForm from "./submitForm";

export default function NewTweet() {
    const [wordCount, setWordCount] = useState(0);
    const [content, setContent] = useState("");
    const [style, setStyle] = useState({color: "gray"})
    const {tweets, setTweets} = useContext(tweetsContext);
    const navigate = useNavigate();

    useEffect(() => {
        setWordCount(content.length)
    }, [content])

    useEffect(() => {
        if (wordCount === 250) setStyle({color: "red"});    
        else setStyle({color: "gray"});              
    }, [wordCount])

    return (
        <div id="new__tweet">
            <h1 id="new__tweet__heading">New Tweet</h1>
            <form id="form__new__tweet" onSubmit={el => {
                submitForm(el, content, tweets, setTweets)
                navigate("/");
                }}>
                <input name="author" id="new__tweet__author" type="text" placeholder="Author"/>
                <input name="handle" id="new__tweet__author" type="text" placeholder="Handle"/>
                <div id="new__tweet__content__wrapper">
                    <textarea maxLength="250" 
                    id="new__tweet__content" 
                    placeholder="What's happening?"
                    value={content}
                    onChange={el => setContent(el.target.value)}>
                    </textarea>
                    <span id="word__count" style={style}>{wordCount + "/250"}</span>
                </div>
                <button id="btn__new__tweet__submit" type="submit">Submit</button>
            </form>
        </div>
    )
}


