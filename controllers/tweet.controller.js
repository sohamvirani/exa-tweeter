const tweetService = require("../services/tweet.service");

const getAllTweets = async (req, res) => {
  try {
    const tweets = await tweetService.getAllTweets();
    res.json(tweets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createTweet = async (req, res) => {
  try {
    const { content } = req.body;
    const newTweet = await tweetService.createTweet(content, req.userId);
    res.json(newTweet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteTweet = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await tweetService.deleteTweet(id, req.userId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllTweets,
  createTweet,
  deleteTweet,
};
