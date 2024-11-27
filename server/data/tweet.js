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

export function getAll() {
  return tweets;
}

export function getAllByUsername(username) {
  return tweets.filter((t) => t.username === username);
}

export function getById(id) {
  return tweets.find((t) => t.id === id);
}

export function create(text, name, username) {
  const tweet = {
    id: String(tweets.length + 1),
    text,
    createdAt: new Date(),
    name,
    username,
  };
  tweets = [tweet, ...tweets];
  return tweet;
}

export function update(id, text) {
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (tweet) {
    tweet.text = text;
  }
  return tweet;
}

export function deleteTweet(id) {
  tweets = tweets.filter((tweet) => tweet.id !== id);
}
