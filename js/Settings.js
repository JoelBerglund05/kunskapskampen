function ColorCheck() {
    if (
        "11" ==
        (document.cookie.match(/^(?:.*;)?\s*Color\s*=\s*([^;]+)(?:.*)?$/) || [
            ,
            null,
        ])[1] ||
        "10" ==
        (document.cookie.match(/^(?:.*;)?\s*Color\s*=\s*([^;]+)(?:.*)?$/) || [
            ,
            null,
        ])[1]
    ) {
        if (window.matchMedia("(prefers-color-scheme: light)").matches) {
            document.documentElement.setAttribute("data-theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
        }
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        document.documentElement.setAttribute("data-theme", "light");
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
    }
}
var dark = false;

function darkmode() {
    if (dark) {
        dark = false;
        document.getElementById("moon").classList.remove("sun");
        document.getElementById("tdnn").classList.remove("day");
        if (window.matchMedia("(prefers-color-scheme: light)").matches) {
            document.cookie = "Color=11;";
        } else {
            document.cookie = "Color=01;";
        }
    } else {
        dark = true;
        document.getElementById("moon").classList.add("sun");
        document.getElementById("tdnn").classList.add("day");
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            document.cookie = "Color=10;";
        } else {
            document.cookie = "Color=00;";
        }
    }
    ColorCheck();
}
