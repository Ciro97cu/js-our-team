/* Viene fornito un layout di base in cui è presente *una card di esempio* inserita 
staticamente nell’html. Questa card serve solo come timbro del markup necessario
per ottenere il risultato finale e *dovrà quindi essere rimossa dall’html*.
Aggiungere un file js in cui definire *un array di oggetti* che rappresentano i membri
del team. Ogni membro ha le informazioni necessarie per stampare
la relativa card: *Nome, Ruolo e Foto*.
Una volta definita la struttura dati, prendendo come riferimento la card di esempio
presente nell'html, stampare dinamicamente una card per ogni membro del team.

BONUS:
Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere 
nuovi membri del team: cliccando sul pulsante "add" viene creato un *nuovo oggetto*,
il quale viene *inserito nell'array iniziale* e viene stampata una nuova card con tutte
le informazioni inserite dall'utente. */

// ~~~~~~~~~~ START FUNCTIONS ~~~~~~~~~~
// funzione per mostrare a schermo immagine nome e ruolo
function displayOnScreen(names, role, img) {
    titleH3.innerText = names;
    paragraph.innerText = role;
    image.src = img;
}

// funzione per creare il contenitore teamCard
function creationElement() {

    const teamCard = document.createElement("div");
    teamCard.classList.add("team-card");
    const cardImage = document.createElement("div");
    cardImage.classList.add("card-image");
    image = document.createElement("img");
    const cardText = document.createElement("div");
    cardText.classList.add("card-text");
    titleH3 = document.createElement("h3");
    paragraph = document.createElement("p");

    teamContainerSelector.appendChild(teamCard);
    teamCard.appendChild(cardImage);
    teamCard.appendChild(cardText);

    cardImage.appendChild(image);

    cardText.appendChild(titleH3);
    cardText.appendChild(paragraph);

}
// ~~~~~~~~~~ END FUNCTIONS ~~~~~~~~~~

// array di oggetti
const arrayMember = [

    {
        pic: "img/wayne-barnett-founder-ceo.jpg",
        nameMember: "Wayne Barnett",
        role: "Founder & CEO"
    },
    {
        pic: "img/angela-caroll-chief-editor.jpg",
        nameMember: "Angela Caroll",
        role: "Chief Editor"
    },
    {
        pic: "img/walter-gordon-office-manager.jpg",
        nameMember: "Walter Gordon",
        role: "Office Manager"
    },
    {
        pic: "img/angela-lopez-social-media-manager.jpg",
        nameMember: "Angela Lopez",
        role: "Social Media Manager"
    },
    {
        pic: "img/scott-estrada-developer.jpg",
        nameMember: "Scott Estrada",
        role: "Developer"
    },
    {
        pic: "img/barbara-ramos-graphic-designer.jpg",
        nameMember: "Barbara Ramos",
        role: "Graphic Designer"
    },

]

// variabile dell'elemento con classe team-container
const teamContainerSelector = document.querySelector(".team-container");
// input nome
const inputName = document.getElementById("name");
// input ruolo
const inputRole = document.getElementById("role");
// input immagine
const inputImage = document.getElementById("image");

// elemento nome
let titleH3;
// elemento ruolo
let paragraph;
// elemento immagine
let image;

/* ciclo andando a creare gli elementi tramite la funzione e
sempre tramite un'altra funzione vado a dare contenuto */
for (let i = 0; i < arrayMember.length; i++) {
    creationElement();

    let cardIndex = arrayMember[i];
    let nameToDisplay = cardIndex.nameMember;
    let roleToDisplay = cardIndex.role;
    let picToDisplay = cardIndex.pic;

    displayOnScreen(nameToDisplay, roleToDisplay, picToDisplay);
}

// aggiunta di una card al click
document.getElementById("addMemberButton").addEventListener("click",
    () => {
        const newCard = {
            pic: inputImage.value,
            nameMember: inputName.value,
            role: inputRole.value
        }
        arrayMember.push(newCard);

        creationElement();

        displayOnScreen(newCard.nameMember, newCard.role, newCard.pic);

    }
)