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
        nameMember: "Wayne Barnett",
        role: "Founder & CEO"
    },
    {
        pic: "img/angela-caroll-chief-editor.jpg",
        nameMember: "Angela Caroll",
        role: "Designer"
    },
    {
        pic: "img/angela-lopez-social-media-manager.jpg",
        nameMember: "Angela Lopez",
        role: "Developer"
    },
    {
        pic: "img/barbara-ramos-graphic-designer.jpg",
        nameMember: "Barbara Ramos",
        role: "Junior Developer"
    },
    {
        pic: "img/scott-estrada-developer.jpg",
        nameMember: "Scott Estrada",
        role: "Nullafacente"
    },
    {
        pic: "img/walter-gordon-office-manager.jpg",
        nameMember: "Walter Gordon",
        role: "Addetto alle fotocopie"
    }

]

const card = document.querySelector(".team-card");

const container = document.querySelector(".team-container");

const nameMember = document.querySelector(".card-text > h3");

const role = document.querySelector(".card-text > p");

nameMember.innerText = arrayMember[0]["nameMember"];

for (let i = 1; i < 6; i++) {
    let clone = card.cloneNode(true);
    container.appendChild(clone);
    nameMember.innerText = arrayMember[i]["nameMember"];
}


