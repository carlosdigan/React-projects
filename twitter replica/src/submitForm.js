import { v4 } from "uuid"
export default function submitForm(el, content, tweets, setTweets) {
    const newTweet =  {
        author: {name: el.target.author.value , handle: "@" + el.target.handle.value}, 
        content: {text: content},
        id: v4(),
        comments: 0,
        likes: 0,
        retweets: 0,
        commented: false,
        liked: false,
        retweeted: false
    }
    setTweets([newTweet, ...tweets])
}

