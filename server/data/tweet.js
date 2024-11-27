let tweets = [
  {
    id: "1",
    text: "테스트 1",
    createdAt: Date.now().toString(),
    name: "Kevin",
    username: "kevin",
    url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png",
  },
  {
    id: "2",
    text: "테스트 2",
    createdAt: Date.now().toString(),
    name: "Martin",
    username: "martin",
  },
];

export function getAllTweets() {
  return tweets;
}

export function getAllTweetsByUsername(username) {
  return tweets.filter((t) => t.username === username);
}

export function getTweetById(id) {
  return tweets.find((t) => t.id === id);
}
