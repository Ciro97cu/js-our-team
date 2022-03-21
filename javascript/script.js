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

const arrayMember = [

    {
        pic: "img/walter-gordon-office-manager.jpg",
        nameMember: "1",
        role: "Founder & CEO"
    },
    {
        pic: "img/angela-caroll-chief-editor.jpg",
        nameMember: "2",
        role: "Designer"
    },
    {
        pic: "img/angela-lopez-social-media-manager.jpg",
        nameMember: "3",
        role: "Developer"
    },
    {
        pic: "img/barbara-ramos-graphic-designer.jpg",
        nameMember: "4",
        role: "Junior Developer"
    },
    {
        pic: "img/scott-estrada-developer.jpg",
        nameMember: "5",
        role: "Nullafacente"
    },
    {
        pic: "img/walter-gordon-office-manager.jpg",
        nameMember: "6",
        role: "Addetto alle fotocopie"
    }

]

const teamContainerSelector = document.querySelector(".team-container");
const teamCardSelector = document.querySelector(".team-card");
const cardImageSelector = document.querySelector(".card-image");
const cardTextSelector = document.querySelector(".card-text");
const titleSelector = document.querySelector("h3");

const teamCard = document.createElement("div");
teamCard.classList.add("team-card");
const cardImage = document.createElement("div");
cardImage.classList.add("card-image");
const image = document.createElement("img");
const cardText = document.createElement("div");
cardText.classList.add("card-text");
const titleH3 = document.createElement("h3");
const paragraph = document.createElement("p");

teamContainerSelector.appendChild(teamCard);
teamCardSelector.appendChild(cardImage);
teamCardSelector.appendChild(cardText);
cardImageSelector.appendChild(image);
cardTextSelector.appendChild(titleH3);
cardTextSelector.appendChild(paragraph);

titleSelector.innerText = "Ciro";



