exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameTextBox = page.getByLabel("Username");
    this.passwordTextBox = page.getByLabel("Password");
    this.loginButton = page.getByRole("button", { name: " Login" });
  }

  async login(username, password) {
    await this.usernameTextBox.fill(username);
    await this.passwordTextBox.fill(password);
    await this.loginButton.click();
  }

  async goToLogin() {
    await this.page.goto("https://the-internet.herokuapp.com/login");
  }
};
