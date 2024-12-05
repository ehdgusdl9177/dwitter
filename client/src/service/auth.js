export default class AuthService {
  constructor(http, tokenStorage) {
    this.http = http;
    this.tokenStorage = tokenStorage;
  }

  async signup(username, password, name, email, url) {
    const data = await this.http.fetch("/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
        name,
        email,
        url,
      }),
    });
    this.tokenStorage.saveToken(data.token);
    return data;
  }
  async login(username, password) {
    return {
      username: "kevin",
      token: "abc1234",
    };
  }

  async me() {
    return {
      username: "kevin",
      token: "abc1234",
    };
  }

  async logout() {
    return;
  }
}
