import createParagraph from './createParagraph';
import createH3 from './createH3';

function menuPage() {
    const menuPageWrapper = document.createElement('div')
    menuPageWrapper.classList.add('menuPageWrapper');
    const menuContainer = document.createElement('div'); //div to hold two parts of menu
    menuContainer.classList.add("menuContainer")
    const englishMenu = document.createElement('div') //container for english menu
    const frenchMenu = document.createElement('div')
    frenchMenu.classList.add("frenchMenu") //container for french menu
    englishMenu.classList.add("englishMenu")

    englishMenu.appendChild(createH3("Today"))
    const englishText = "Trimmed entrecôte steak “La Vache!” with special house sauce, French fries and green salad with walnuts"
    const englishPrice = "$398 per person"
    englishMenu.appendChild(createParagraph(englishText))
    englishMenu.appendChild(createParagraph(englishPrice))

    const frenchMenuDiv = document.createElement('div');
    frenchMenuDiv.classList.add('frenchMenuDiv')
    const jumpingCowImg = document.createElement('img');
    jumpingCowImg.src = 'images/jumping-cow.png';
    jumpingCowImg.id = "jumpingCowImg"
    frenchMenuDiv.appendChild(jumpingCowImg)
    
    const frenchText = "Entrecôte “La Vache!” avec sauce maison, accompagnée de frites et salade verte aux noix"
    const frenchPrice = "$398 par personne"
    frenchMenu.appendChild(createH3("Aujourd’hui"))
    frenchMenu.appendChild(createParagraph(frenchText))
    frenchMenu.appendChild(createParagraph(frenchPrice))
    frenchMenuDiv.appendChild(frenchMenu)

    const beverageMenu = document.createElement('a');
    beverageMenu.classList.add('beverageMenu')
    beverageMenu.textContent = "See Our Beverage Menu Here"
    beverageMenu.href = "images/beverageMenu.jpeg"
    beverageMenu.target = "_blank"
    
    
    menuContainer.appendChild(englishMenu)
    menuContainer.appendChild(frenchMenuDiv)
    menuPageWrapper.appendChild(menuContainer)
    menuPageWrapper.appendChild(beverageMenu)


    return menuPageWrapper


}

function createMenuPage(e) {
    e.preventDefault()
    const main = document.getElementById("mainSection")
    while(main.lastElementChild){
      main.removeChild(main.lastElementChild)
    }
    main.appendChild(menuPage())

}


export default createMenuPage