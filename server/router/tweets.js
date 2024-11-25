import express from "express";
import "express-async-errors";

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
    url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png",
  },
];

const router = express.Router();

// GET /tweets
// GET /tweets?username=:username
router.get("/", (req, res, next) => {
  const username = req.query.username;
  const data = username
    ? tweets.filter((t) => t.username === username)
    : tweets;
  res.status(200).json(data);
});

// GET /tweets/:id
router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  const tweet = tweets.find((t) => t.id === id);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found` });
  }
});

// POST /tweets;
router.post("/", (req, res, next) => {
  const { text, name, username } = req.body;
  const tweet = {
    id: String(tweets.length + 1),
    text,
    createdAt: new Date(),
    name,
    username,
  };
  tweets = [...tweets, tweet];
  res.status(201).json(tweets);
});

// PUT /tweets/:id
router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  const text = req.body.text;
  const tweet = tweets.find((t) => t.id === id);
  if (tweet) {
    tweet.text = text;
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found` });
  }
});

// DELETE /tweets/:id
router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  tweets = tweets.filter((t) => t.id !== id);
  res.sendStatus(204);
});

export default router;
