import createAbout from './about';
import createContactPage from './contact';
import mainSection from './mainSection'
import createMenuPage from './menu';

function createNav() {
    const nav = document.createElement('nav')
    nav.classList.add("nav")
    const navImage = document.createElement("img")
    navImage.src = "images/lavache_logo.png";
    navImage.alt = "logo which says La Vache"
    navImage.classList.add('navImage')
    navImage.classList.add('navLink')

    const linkToAbout = document.createElement('a')
    linkToAbout.classList.add("navLink");
    linkToAbout.setAttribute("id", "about")
    linkToAbout.href = "#"
    linkToAbout.innerHTML = "About";
    linkToAbout.addEventListener("click", createAbout)

    const linkToMenu = document.createElement('a');
    linkToMenu.classList.add("navLink")
    linkToMenu.setAttribute("id", "menu");
    linkToMenu.href = ""
    linkToMenu.innerHTML = "Menu"
    linkToMenu.addEventListener("click", createMenuPage)
    const linkToContact = document.createElement('a');
    linkToContact.classList.add("navLink");
    linkToContact.href = "";
    linkToContact.innerHTML = "Contact";
    linkToContact.addEventListener("click", createContactPage)
    
    

  

    nav.appendChild(navImage);
    nav.appendChild(linkToAbout);
    nav.appendChild(linkToMenu);
    nav.appendChild(linkToContact);
    return nav;

}




function createPage() {
    const page = document.createElement('div');
    page.appendChild(createNav());
    page.appendChild(mainSection());   
    
    return page;
}


function loadWebsite() {
    window.addEventListener('load', (e) => {
        createAbout()
      });
    const content = document.getElementById("content")
    content.appendChild(createPage());
    return content;

}


export default loadWebsite;