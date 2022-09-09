document.addEventListener("DOMContentLoaded", function(event) {
    
    var themeSwitcher = document.getElementById("darkmode-toggler");

    if (themeSwitcher.checked) {
        changeTheme();
    }
    
    themeSwitcher.onchange = function() {
        changeTheme();
    }

});

function changeTheme() {
    var currentTheme = document.documentElement.getAttribute("data-theme");

    var switchToTheme = currentTheme === "dark" ? "light" : "dark"

    console.log("Changing theme to " + switchToTheme);

    document.documentElement.setAttribute("data-theme", switchToTheme);
}