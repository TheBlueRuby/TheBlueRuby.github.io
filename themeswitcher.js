
var mite = '';
document.addEventListener("DOMContentLoaded", function (event) {

    var themeSwitcher = document.getElementById("darkmode-toggler");

    var localStorageTheme = localStorage.getItem("theme");

    if (localStorageTheme == "light") {
        themeSwitcher.checked = false;
        changeTheme(localStorageTheme);
    } else if (localStorageTheme == "mite") {
        themeSwitcher.checked = true;
        changeTheme(localStorageTheme);
    } else {
        themeSwitcher.checked = true;
        changeTheme('dark');
    }

    themeSwitcher.onchange = function () {
        if (themeSwitcher.checked) {
            changeTheme('dark');
        } else {
            changeTheme('light');
        }
    }

});

document.addEventListener('keydown', function (event) {
    if (event.key.toLowerCase() == 'm') {
        mite += 'm';
    }
    if (event.key.toLowerCase() == 'i') {
        mite += 'i';
    }
    if (event.key.toLowerCase() == 't') {
        mite += 't';
    }
    if (event.key.toLowerCase() == 'e') {
        mite += 'e';
    }
    if (mite == 'mite') {
        changeTheme(mite.toLowerCase());
    } else if (mite.length >= 4) {
        mite = '';
    }
});

function changeTheme() {
    var currentTheme = document.documentElement.getAttribute("data-theme");

    var switchToTheme = currentTheme === "dark" ? "light" : "dark"

    console.log("Changing theme to " + switchToTheme);

    document.documentElement.setAttribute("data-theme", switchToTheme);
    localStorage.setItem("theme", switchToTheme);
}

function changeTheme(switchToTheme) {

    console.log("Changing theme to " + switchToTheme);

    document.documentElement.setAttribute("data-theme", switchToTheme);
    localStorage.setItem("theme", switchToTheme);
}