class userInfoLocalStorage {
  constructor() {
    this.users = [];
  }

  saveUser(data) {
    this.users.push(data);
    localStorage.setItem('userInfo', JSON.stringify(this.users));
  }

  loadUser() {
    let userInfo = localStorage.getItem('userInfo');
    this.users = JSON.parse(userInfo || '[]');
  }
}
