export default class TweetService {
  constructor(http) {
    this.http = http;
  }

  async getTweets(username) {
    let query = username ? `?username=${username}` : "";
    return this.http.fetch(`/tweets${query}`, {
      method: "GET",
    });
  }

  async postTweet(text) {
    return this.http.fetch(`/tweets/`, {
      method: "POST",
      body: JSON.stringify({
        text,
        username: "kevin",
        name: "Kevin",
      }),
    });
  }

  async deleteTweet(tweetId) {
    const response = this.http.fetch(`/tweets/${tweetId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    if (response.status !== 204) {
      const data = await response.json();
      throw new Error(data.message);
    }
  }

  async updateTweet(tweetId, text) {
    const response = this.http.fetch(`/tweets/${tweetId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    const data = await response.json();
    if (response.status !== 200) {
      throw new Error(data.message);
    }
    return data;
  }
}
