const navMenuElement = document.getElementById("navMenu")
// console.log(navMenuElement)

const navBtnElement = document.getElementById("navBtn")
// console.log(navBtnElement)

// This function will add/remove 'active' class from 'nav' element
function toggleNavMenu() {
    navMenuElement.classList.toggle('active')
}

// adding a click event listener and calling toggleNavMenu 
// function when the event happen.
navBtnElement.addEventListener('click',toggleNavMenu)

// below code will return the li of home and save it in variable 'homeNavLink'
const homeNavLink = document.getElementById("homeNavLink");
homeNavLink.addEventListener('click', toggleNavMenu);


// below code will return a list of all the 'li' elements in my html file
const navLinks = document.getElementsByTagName('li');

for(loopVariable = 0; loopVariable < navLinks.length; loopVariable++) { 
    navLinks[loopVariable].addEventListener('click', toggleNavMenu);
    console.log(loopVariable);
}