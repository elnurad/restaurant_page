import createParagraph from './createParagraph';
import createH3 from './createH3';


function contactPage() {
    const gridContainer = document.createElement('div') //container for four venue divs
    gridContainer.classList.add("gridContainer")
    const soho = document.createElement('div');
    soho.classList.add('venues');
    const tst = document.createElement('div');
    tst.classList.add('venues');
    const admiralty = document.createElement('div');
    admiralty.classList.add('venues');
    const bookVenue = document.createElement('div')
    bookVenue.classList.add('venues')
    bookVenue.classList.add('bookVenue');

    soho.appendChild(createH3("SOHO"));
    soho.appendChild(createParagraph("48 Peel Street"));
    soho.appendChild(createParagraph("SoHo, Hong Kong"));
    soho.appendChild(createParagraph("Opening Hours")).classList.add("hours");
    soho.appendChild(createParagraph("Monday to Sunday: 12-6pm"));
    soho.appendChild(createParagraph("2880 0248"));
    soho.appendChild(createParagraph("soho@lavache.com.hk"));

    tst.appendChild(createH3("TST"));
    tst.appendChild(createParagraph("12 Hart Avenue"));
    tst.appendChild(createParagraph("Tsim Sha Tsui, Kowloon"));
    tst.appendChild(createParagraph("Opening Hours")).classList.add("hours");;
    tst.appendChild(createParagraph("Monday to Sunday: 12-6pm"));
    tst.appendChild(createParagraph("2666 6818"));
    tst.appendChild(createParagraph("tst@lavache.com.hk"));


    admiralty.appendChild(createH3("ADMIRALTY"));
    admiralty.appendChild(createParagraph("Shop 007, Pacific Place,"));
    admiralty.appendChild(createParagraph("88 Queensway, Admiralty"));
    admiralty.appendChild(createParagraph("Opening Hours")).classList.add("hours");;
    admiralty.appendChild(createParagraph("Monday to Sunday: 12-6pm"));
    admiralty.appendChild(createParagraph("2801 6122"));
    admiralty.appendChild(createParagraph("pacificplace@lavache.com.hk"));

    const bookSoho  = document.createElement("button");
    bookSoho.classList.add('bookButton')
    bookSoho.innerHTML = "Book Soho"
    const bookTst = document.createElement("button");
    bookTst.classList.add('bookButton')
    bookTst.textContent = "Book TST";
    const bookAdmiralty = document.createElement("button");
    bookAdmiralty.classList.add('bookButton');
    bookAdmiralty.textContent = "Book Admiralty";
    const buttonContainer = document.createElement('div')
    buttonContainer.id = "bookButtonContainer";
    buttonContainer.appendChild(bookSoho) 
    buttonContainer.appendChild(bookTst)    
    buttonContainer.appendChild(bookAdmiralty)

    const socialMediaLinks = document.createElement('div')
    socialMediaLinks.id = 'socialMediaLinks'
    
    const instagramIcon = document.createElement('img');
    instagramIcon.src = 'images/instagram_icon.png';
    instagramIcon.alt = `instagram icon that takes you to this restaurant's instagram page`;
    const instagramLink = document.createElement('a');
    instagramLink.href = 'https://www.instagram.com/lavachehk/';
    instagramLink.target = '_blank';
    instagramLink.appendChild(instagramIcon)
    


    const facebookIcon = document.createElement('img');
    facebookIcon.src = 'images/facebook_icon.png';
    facebookIcon.alt = `instagram icon that takes you to this restaurant's facebook page`;
    const facebookLink = document.createElement('a');
    facebookLink.href = 'https://www.facebook.com/lavachehk';
    facebookLink.target = '_blank';
    facebookLink.appendChild(facebookIcon)
    

    socialMediaLinks.appendChild(instagramLink);
    socialMediaLinks.appendChild(facebookLink);



   

    bookVenue.appendChild(buttonContainer);
    bookVenue.appendChild(createParagraph("Lunch: reservations of all party sizes available."));
    bookVenue.appendChild(createParagraph('Dinner: walk-ins welcome, reservations are available for parties of 5 guests or more.'))
    bookVenue.appendChild(socialMediaLinks);
    gridContainer.appendChild(soho);
    gridContainer.appendChild(tst);
    gridContainer.appendChild(admiralty);
    gridContainer.appendChild(bookVenue);
    return gridContainer;
}


function createContactPage(e) {
    e.preventDefault()

    const main = document.getElementById("mainSection")
    while(main.lastElementChild){
        main.removeChild(main.lastElementChild)
      }
    main.appendChild(contactPage())

}


export default createContactPage;