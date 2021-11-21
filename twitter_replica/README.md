# Twitter Replica

This react app is a partial mimic of twitter, with the functionality to create new tweets, view other tweets on the main page and like/retweet them. I plan to add more functionality when I learn about Express.js and MongoDB

I have deployed this to heroku so it can be viewed on the web instead of having to clone the repository then run the localhost server yourself.

The link is: https://twitter-replica-app.herokuapp.com/

# Note
Please note that the first load will take a bit longer, approximately 15 - 30 seconds, then all subsequent requests will be much faster. This is because: 

<a href="https://devcenter.heroku.com/articles/free-dyno-hours#dyno-sleeping"><i>If an app has a free web dyno, and that dyno receives no web traffic in a 30-minute period, it will sleep. If a sleeping web dyno receives web traffic, it will become active again after a short delay (assuming your account has free dyno hours available).</i></a>
