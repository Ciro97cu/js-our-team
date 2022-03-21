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

function displayOnScreen(array, titleH3, paragraph, image) {
    let nameTeam = array;
    let nameToDisplay = nameTeam.nameMember;

    let roleTeam = array;
    let roleToDisplay = roleTeam.role;

    let picTeam = array;
    let picToDisplay = picTeam.pic;


    titleH3.innerText = nameToDisplay;
    paragraph.innerText = roleToDisplay;
    image.src = picToDisplay;
}



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

const teamContainerSelector = document.querySelector(".team-container");
const inputName = document.getElementById("name");
const inputRole = document.getElementById("role");
const inputImage = document.getElementById("image");



for (let i = 0; i < arrayMember.length; i++) {

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
    teamCard.appendChild(cardImage);
    teamCard.appendChild(cardText);

    cardImage.appendChild(image);

    cardText.appendChild(titleH3);
    cardText.appendChild(paragraph);

    displayOnScreen(arrayMember[i], titleH3, paragraph, image);

}

document.getElementById("addMemberButton").addEventListener("click",
    () => {
        const newCard = {
            pic: inputImage.value,
            nameMember: inputName.value,
            role: inputRole.value
        }
        arrayMember.push(newCard);
        console.log(arrayMember);

        displayOnScreen(arrayMember);

    }
)