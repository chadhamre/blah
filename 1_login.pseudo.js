class Login {

  // SIGNS IN A USER
  function sign_in() {

    // GET THE USERNAME & PASSWORD FROM A URL STRING
    browser_url_string = getUrlString()
    username = browser_url_string.regex_match(/username=[A-Z0-9+]/)
    password = browser_url_string.regex_match(/password=[A-Z0-9]+/)

    // GET THE RELATED USER FROM AN SQL DATABASE
    user = SqlDatabase.query("SELECT * FROM users WHERE username = %{username}")

    // SIGN IN IF VALID LOGIN, OTHERWISE REDIRECT BACK TO SIGN_IN PAGE
    if (!user) {
      Logger.output("Bad login attempt. Username: {username}, password: {password}")
      redirect_to sign_in_page
    } else if (password && password != user.password) {
      Logger.output("Bad login attempt. Username: {username}, password: {password}")
      redirect_to sign_in_page
    } else {
      sign_in_user(user)
      redirect_to user_page
    }
  }
}
