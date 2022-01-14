(()=>{"use strict";const e=function(e){const n=document.createElement("p");return n.classList.add("paragraph"),n.textContent=e,n},n=function(n){n.preventDefault();const t=document.getElementById("mainSection");for(;t.lastElementChild;)t.removeChild(t.lastElementChild);t.appendChild(function(){const n=document.createElement("section");n.classList.add("home");const t=document.createElement("img");t.src="images/lavacheFront.jpeg",t.alt="front of the restaurant at night",t.classList.add("aboutImage"),t.id="frontImage";const a=document.createElement("img");return a.src="images/cow.png",a.alt="image of a cow drawing the Eifel Tower",a.classList.add("aboutImage"),n.appendChild(t),n.appendChild(e("La Vache! pays homage to the tradition of Parisian entrecôte steakhouses. With locations in Hong Kong’s SoHo, Tsim Sha Tsui and Admiralty neighbourhoods, the lively brasserie elevates the simple steak frites menu to a new level: an organic green salad followed by richly marbled USDA Prime ribeye and crispy frites served with generous pots of La Vache!‘s secret sauce. Premium ingredients, upbeat music and friendly service have established La Vache!’s steak frites as a favourite among Hong Kong’s dining scene.")),n.appendChild(a),n}())},t=function(e){const n=document.createElement("h3");return n.classList.add("h3"),n.textContent=e,n},a=function(n){n.preventDefault();const a=document.getElementById("mainSection");for(;a.lastElementChild;)a.removeChild(a.lastElementChild);a.appendChild(function(){const n=document.createElement("div");n.classList.add("gridContainer");const a=document.createElement("div");a.classList.add("venues");const d=document.createElement("div");d.classList.add("venues");const i=document.createElement("div");i.classList.add("venues");const s=document.createElement("div");s.classList.add("venues"),s.classList.add("bookVenue"),a.appendChild(t("SOHO")),a.appendChild(e("48 Peel Street")),a.appendChild(e("SoHo, Hong Kong")),a.appendChild(e("Opening Hours")),a.appendChild(e("Monday to Sunday: 12-6pm")),a.appendChild(e("2880 0248")),a.appendChild(e("soho@lavache.com.hk")),d.appendChild(t("TST")),d.appendChild(e("12 Hart Avenue")),d.appendChild(e("Tsim Sha Tsui, Kowloon")),d.appendChild(e("Opening Hours")),d.appendChild(e("Monday to Sunday: 12-6pm")),d.appendChild(e("2666 6818")),d.appendChild(e("tst@lavache.com.hk")),i.appendChild(t("ADMIRALTY")),i.appendChild(e("Shop 007, Pacific Place,")),i.appendChild(e("88 Queensway, Admiralty")),i.appendChild(e("Opening Hours")),i.appendChild(e("Monday to Sunday: 12-6pm")),i.appendChild(e("2801 6122")),i.appendChild(e("pacificplace@lavache.com.hk"));const o=document.createElement("button");o.classList.add("bookButton"),o.innerHTML="Book Soho";const c=document.createElement("button");c.classList.add("bookButton"),c.textContent="Book TST";const l=document.createElement("button");return l.classList.add("bookButton"),l.textContent="book Admiralty",s.appendChild(o),s.appendChild(c),s.appendChild(l),s.appendChild(e("Lunch: reservations of all party sizes available.")),s.appendChild(e("Dinner: walk-ins welcome, reservations are available for parties of 5 guests or more.")),n.appendChild(a),n.appendChild(d),n.appendChild(i),n.appendChild(s),n}())},d=function(n){n.preventDefault();const a=document.getElementById("mainSection");for(;a.lastElementChild;)a.removeChild(a.lastElementChild);a.appendChild(function(){const n=document.createElement("div");n.classList.add("menuPageWrapper");const a=document.createElement("div");a.classList.add("menuContainer");const d=document.createElement("div"),i=document.createElement("div");i.classList.add("frenchMenu"),d.classList.add("englishMenu"),d.appendChild(t("Today")),d.appendChild(e("Trimmed entrecôte steak “La Vache!” with special house sauce, French fries and green salad with walnuts")),d.appendChild(e("$398 per person"));const s=document.createElement("div");s.classList.add("frenchMenuDiv");const o=document.createElement("img");o.src="images/jumping-cow.png",o.id="jumpingCowImg",s.appendChild(o),i.appendChild(t("Aujourd’hui")),i.appendChild(e("Entrecôte “La Vache!” avec sauce maison, accompagnée de frites et salade verte aux noix")),i.appendChild(e("$398 par personne")),s.appendChild(i);const c=document.createElement("a");return c.classList.add("beverageMenu"),c.textContent="See Our Beverage Menu Here",c.href="images/beverageMenu.jpeg",c.target="_blank",a.appendChild(d),a.appendChild(s),n.appendChild(a),n.appendChild(c),n}())};function i(){const e=document.createElement("div");return e.appendChild(function(){const e=document.createElement("nav");e.classList.add("nav");const t=document.createElement("img");t.src="images/lavache_logo.png",t.alt="logo which says La Vache",t.classList.add("navImage"),t.classList.add("navLink");const i=document.createElement("a");i.classList.add("navLink"),i.setAttribute("id","about"),i.href="#",i.innerHTML="About",i.addEventListener("click",n);const s=document.createElement("a");s.classList.add("navLink"),s.setAttribute("id","menu"),s.href="",s.innerHTML="Menu",s.addEventListener("click",d);const o=document.createElement("a");return o.classList.add("navLink"),o.href="",o.innerHTML="Contact",o.addEventListener("click",a),e.appendChild(t),e.appendChild(i),e.appendChild(s),e.appendChild(o),e}()),e.appendChild(function(){const e=document.createElement("div");return e.classList.add("mainSection"),e.setAttribute("id","mainSection"),e}()),e}console.log("hello Elnura"),function(){const e=document.getElementById("content");e.appendChild(i())}()})();