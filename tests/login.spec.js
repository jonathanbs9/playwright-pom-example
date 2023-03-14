import { test, expect } from "@playwright/test";
import { LoginPage } from "./pages/loginPage";

test("test", async ({ page }) => {
  //await page.goto("https://the-internet.herokuapp.com/login");
  //await page.getByLabel("Username").fill("tomsmith");
  //await page.getByLabel("Password").fill("SuperSecretPassword!");
  //await page.getByRole("button", { name: " Login" }).click();

  const Login = new LoginPage(page);

  await Login.goToLogin();
  await Login.login("jonathanbs", "fakepass1234");
});
