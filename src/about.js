function createAbout() {
    const about = document.createElement('div');
    about.classList.add("home") //<div class="about"></div>

    const steakImage = document.createElement("img");
    steakImage.src = "images/lavache.jpeg"; 
    steakImage.alt = "image of a nice steak meal on a restaurant table";
    const cowImage = document.createElement('img')
    cowImage.src = 'images/cow.png'
    cowImage.alt = "image of a cow drawing the Eifel Tower"
    about.appendChild(steakImage);
    const text = "La Vache! pays homage to the tradition of Parisian entrecôte steakhouses. With locations in Hong Kong’s SoHo, Tsim Sha Tsui and Admiralty neighbourhoods, the lively brasserie elevates the simple steak frites menu to a new level: an organic green salad followed by richly marbled USDA Prime ribeye and crispy frites served with generous pots of La Vache!‘s secret sauce. Premium ingredients, upbeat music and friendly service have established La Vache!’s steak frites as a favourite among Hong Kong’s dining scene."
    about.appendChild(createParagraph(text));
    about.appendChild(cowImage);
    return about
}



function createParagraph(text) {
    const p = document.createElement('p');
    p.textContent = text;
    return p

}

export default createAbout;

// const content = document.getElementById('content')
// content.appendChild(creatAbout());
