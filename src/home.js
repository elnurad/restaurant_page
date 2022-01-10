import createAbout from './about';

import menuPage from './menu';

function createNav() {
    const nav = document.createElement('nav')
    nav.classList.add("nav")
    const navImage = document.createElement("img")
    navImage.src = "images/lavache_logo.png";
    navImage.alt = "logo which says La Vache"

    const linkToAbout = document.createElement('a')
    linkToAbout.classList.add("navLink");
    linkToAbout.setAttribute("id", "about")
    linkToAbout.href = ""
    linkToAbout.innerHTML = "About";
    // linkToAbout.addEventListener("click", createAbout())

    const linkToMenu = document.createElement('a');
    linkToMenu.classList.add("navLink")
    linkToMenu.href = ""
    linkToMenu.innerHTML = "Menu"
    const linkToContact = document.createElement('a');
    linkToContact.classList.add("navLink");
    linkToContact.href = "";
    linkToContact.innerHTML = "Contact";

  

    nav.appendChild(navImage);
    nav.appendChild(linkToAbout);
    nav.appendChild(linkToMenu);
    nav.appendChild(linkToContact);
    return nav;

}

function mainSection() {
    const mainSection = document.createElement('div');
    mainSection.classList.add("mainSection");
    mainSection.setAttribute("id", "mainSection")
    return mainSection

}



function createPage() {
    const page = document.createElement('div');
    page.appendChild(createNav());
    page.appendChild(mainSection())
    page.appendChild(createAbout())
    page.appendChild(menuPage())
   
    

    

    
    
    return page;
}


function loadWebsite() {
    const content = document.getElementById("content")
    content.appendChild(createPage());
    return content;

}


export default loadWebsite;