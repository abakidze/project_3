function showLoginField() {
    const loginField = document.getElementsByClassName("user_login");

    if (loginField[0].classList == "user_login active"){
        loginField[0].classList.remove("active");
    } else {
        loginField[0].classList.add("active");
    }
    console.log(loginField);
}