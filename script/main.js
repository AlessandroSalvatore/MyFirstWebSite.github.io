var logo = document.querySelector('#logoStrumento');
var myButton = document.querySelector('#changeUser');
var myHeading = document.querySelector('h2');


logo.onclick = function () {
    var attributoSrc = logo.getAttribute("src");
    if (attributoSrc === "images/logoStrumento.png")
        logo.setAttribute("src", "images/logoStrumento2.png");

    else logo.setAttribute("src", "images/logoStrumento.png")
}

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Ciao ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Ciao ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}