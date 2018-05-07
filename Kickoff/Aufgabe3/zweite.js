var fetch2 = require('fetch');
var fetch3 = require('whatwg-fetch');

let getTweets = (id) => { 

    return fetch("https://api.twitter.com/user/" + id)

    .then(response => {

        return JSON.parse(response);

    })

    .then(response => {

        return response.data;

    })

    .then(tweets => {

        return tweets.filter(tweet => {

            return tweet.stars > 50    

             })
    })

    .then(tweets => {

        return tweets.filter(tweet => {
                
            return tweet.rts > 50

            })
    })
} 

console.log(getTweets(25073877));