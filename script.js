var profilePicture = getComputedStyle(document.documentElement).getPropertyValue("--profile-picture");
var profileImg = document.getElementById("profile");
profileImg.src = profilePicture;
setFavicons()

var buttons = document.getElementById("buttons");
var aboutText = document.getElementById("text");
var socialsStuff = document.getElementById("socials2");
var arrow = document.getElementById("arrow");

arrow.style.opacity = 0;
arrow.style.zIndex = -1;
aboutText.style.top = "1000px";
socialsStuff.style.top = "1000px";

document.getElementById("about").addEventListener("click", function() {
    buttons.style.top = "-1000px";
    arrow.style.opacity = 1;
    arrow.style.zIndex = 2;
    aboutText.style.top = "0";
});

document.getElementById("socials").addEventListener("click", function() {
    buttons.style.top = "-1000px";
    arrow.style.opacity = 1;
    arrow.style.zIndex = 2;
    socialsStuff.style.top = "0";
});

arrow.addEventListener("click", function() {
    arrow.style.opacity = 0;
    arrow.style.zIndex = -1;
    buttons.style.top = "0px";
    aboutText.style.top = "1000px";
    socialsStuff.style.top = "1000px";
});

function setFavicons() {
    let headTitle = document.querySelector('head');
    let setFavicon = document.createElement('link');
    setFavicon.setAttribute('rel','shortcut icon');
    setFavicon.setAttribute('href',getComputedStyle(document.documentElement).getPropertyValue('--profile-picture'));
    headTitle.appendChild(setFavicon);
}
