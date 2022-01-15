import mainSection from './mainSection'
import createParagraph from './createParagraph'

function aboutPage() {
    const about = document.createElement('section');
    about.classList.add("aboutPageHome") //<div class="about"></div>

    const frontImage = document.createElement("img");
    frontImage.src = "images/lavacheFront.jpeg"; 
    frontImage.alt = "front of the restaurant at night";
    frontImage.classList.add('aboutImage');
    frontImage.id = "frontImage";
    

    const cowImage = document.createElement('img')
    cowImage.src = 'images/cow.png'
    cowImage.alt = "image of a cow drawing the Eifel Tower"
    cowImage.classList.add("aboutImage")
   
    about.appendChild(frontImage);
    const text = "La Vache! pays homage to the tradition of Parisian entrecôte steakhouses. With locations in Hong Kong’s SoHo, Tsim Sha Tsui and Admiralty neighbourhoods, the lively brasserie elevates the simple steak frites menu to a new level: an organic green salad followed by richly marbled USDA Prime ribeye and crispy frites served with generous pots of La Vache!‘s secret sauce. Premium ingredients, upbeat music and friendly service have established La Vache!’s steak frites as a favourite among Hong Kong’s dining scene."
    
    about.appendChild(createParagraph(text));
    about.appendChild(cowImage);
    return about
}

function createAbout() {
    const main = document.getElementById("mainSection")
    main.textContent = ""
    while(main.lastElementChild){
        main.removeChild(main.lastElementChild)
      }
    main.appendChild(aboutPage())

}



export default createAbout
       

