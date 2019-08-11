function renderTweetCard(tweet) {

  return `<div class="tweet-card">
    <div class="tweet-card-head">
      <img class="profile-pic" src="${tweet.user.profilePic}">
      <div class="tweet-user-name-container">
        <span class="twitter-user-name">${tweet.user.username}</span>
        ${(tweet.user.isVerified) ? '<img class="twitter-verified" src="verified.png">' : ''}
        <span class="twitter-handle">${tweet.user.handle}</span>
      </div>
    </div>
    <div class="tweet-card-body">
      <p class="tweet-text">${tweet.text}</p>
    </div>
    <div class="tweet-card-foot">
      <img class="twitter-icon" src="replies.png">
      <div class="twitter-stats">${tweet.replies}</div>
      <img class="twitter-icon" src="retweets.png">
      <div class="twitter-stats">${tweet.retweets}</div>
      <img class="twitter-icon" src="likes.png">
      <div class="twitter-stats">${tweet.likes}</div>
    </div>
  </div>`
}


function renderTweets(tweets) {
  let finalHTML = tweets.map(renderTweetCard).join('')

    return `
        <div class="text-center mt-5">
            ${finalHTML}
        </div>
    `
}

function tweets() {
    var content = document.getElementById('content');

    var tweetsAbstraction = [
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "The Moment That Truth Is Organized It Becomes A Lie",
            likes: 231,
            retweets: 12,
            replies: 21
        },
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "How Can Mirrors Be Real If Our Eyes Aren't Real",
            likes: 112,
            retweets: 2,
            replies: 24
        },
        {
            user: {
                handle: "@DigitalCrafts",
                username: "DigitalCrafts Bootcamp",
                isVerified: false,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "Sign up for our next course plz!",
            likes: 11,
            retweets: 3,
            replies: 14
        }
    ]

    content.innerHTML = renderTweets(tweetsAbstraction);

}
