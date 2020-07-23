//Api class
class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, { headers: this.headers })
      .then((res) =>
        res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
      .catch((err) => console.log(err));
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, { headers: this.headers })
    .then((res) =>
      res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
    .catch((err) => console.log(err));
  }

  getAppInfo() {
    return Promise.all([this.getInitialCards(), this.getUserInfo()])
  }

  addCard({ name, link }) {
    debugger
    return fetch(`${this.baseUrl}/cards`, {
      headers: this.headers,
      method: "POST",
      body: JSON.stringify({
        name,
        link
      })
    }).then((res) => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
    .catch((err) => console.log(err));
  }
}

export default Api;

// GET https://around.nomoreparties.co/v1/group-1/users/me
// getUserInfo() {}

// GET https://around.nomoreparties.co/v1/group-1/cards
// getInitialCards() {}

// PATCH https://around.nomoreparties.co/v1/group-1/users/me
// setUserInfo({ name, job }) // Change job for about

// POST https://around.nomoreparties.co/v1/group-1/cards
// addCard({ name, link })

// DELETE https://around.nomoreparties.co/v1/group-1/cards/CardId
// removeCard(cardId) {}

// PUT https://around.nomoreparties.co/v1/group-1/cards/likes/CardId
// DELETE https://around.nomoreparties.co/v1/group-1/cards/likes/CardId
// changeCardLikeStatus(cardId, like) {}

// PATCH https://around.nomoreparties.co/v1/group-1/users/me/avatar
// setUserAvatar({ avatar }) // Change job for about

// getAppInfo()
