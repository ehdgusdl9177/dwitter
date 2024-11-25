import express from "express";
import "express-async-errors";

const tweets = [
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
// POST /tweets;
// PUT /tweets/:id
// DELETE /tweets/:id

export default router;
