export default class ApiClient {
  baseUrl = "http://localhost:5000/api/photos";
  get getUrl() {
    return this.baseUrl;
  }
  static fetchPhotos() {
    return new Promise((resolve, reject) => {
      fetch(this.baseUrl, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((result) => {
          if (!result.isSuccess) reject(result.message);

          resolve(result.data);
        })
        .catch((e) => Error(e));
    });
  }

  static post(body) {
    return new Promise((resolve, reject) => {
      fetch(this.baseUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .then((result) => {
          if (!result.isSuccess) reject(result.message);

          resolve(result.data);
        })
        .catch((e) => Error(e));
    });
  }

  static put(url, body) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .then((result) => {
          if (!result.isSuccess) reject(result.message);

          resolve(result.data);
        })
        .catch((e) => Error(e));
    });
  }

  static delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((result) => {
          if (!result.isSuccess) reject(result.message);

          resolve(result.data);
        })
        .catch((e) => Error(e));
    });
  }
}
