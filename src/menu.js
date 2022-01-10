

function menuPage() {
    const menuContainer = document.createElement('div'); //div to hold two parts of menu
    menuContainer.classList.add("menuContainer")
    const englishMenu = document.createElement('div')
    const frenchMenu = document.createElement('div')
    frenchMenu.classList.add("frenchMenu")
    englishMenu.classList.add("englishMenu")

    englishMenu.appendChild(createH3("Today"))
    const englishText = "Trimmed entrecôte steak “La Vache!” with special house sauce, French fries and green salad with walnuts"
    const englishPrice = "$398 per person"
    englishMenu.appendChild(createParagraph(englishText))
    englishMenu.appendChild(createParagraph(englishPrice))
    
    const frenchText = "Entrecôte “La Vache!” avec sauce maison, accompagnée de frites et salade verte aux noix"
    const frenchPrice = "$398 par personne"
    frenchMenu.appendChild(createH3("Aujourd’hui"))
    frenchMenu.appendChild(createParagraph(frenchText))
    frenchMenu.appendChild(createParagraph(frenchPrice))
    
    
    menuContainer.appendChild(englishMenu)
    menuContainer.appendChild(frenchMenu)


    return menuContainer


}

function createH3(text){
    const h3 = document.createElement('h3')
    h3.classList.add('h3')
    h3.textContent = text;
    return h3
}

function createParagraph(text){
    const p = document.createElement('p')
    p.classList.add('pMenu')
    p.textContent = text;
    return p

}

export default menuPage