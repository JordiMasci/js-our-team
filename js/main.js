// creo Array di oggetti (membri del team)
const members = [
  {
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
    immagine: "wayne-barnett-founder-ceo.jpg",
  },
  {
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    immagine: "angela-caroll-chief-editor.jpg",
  },
  {
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    immagine: "walter-gordon-office-manager.jpg",
  },
  {
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    immagine: "angela-lopez-social-media-manager.jpg",
  },
  {
    nome: "Scott Estrada",
    ruolo: "Developer",
    immagine: "scott-estrada-developer.jpg",
  },
  {
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    immagine: "barbara-ramos-graphic-designer.jpg",
  },
];

// collego html a js
const caratteristicheMembri = document.getElementById("schede");

// stampare su console le informazioni di ogni membro
// utilizzando un ciclo for

for (const membro of members) {
  console.log("Nome:", membro.nome);
  console.log("Ruolo:", membro.ruolo);
  console.log("Immagine:", membro.immagine);
  console.log("-------------------------");
}

// stampare su DOM informazioni membri

for (const membro of members) {
  caratteristicheMembri.innerHTML += `
  <div class="col-4">
  <div class="card mb-4" style="width: 18rem;">
  <img src="img/${membro.immagine}" class="card-img-top " alt="...">
  <div class="card-body">
    <h5 class="card-title text-center">${membro.nome}</h5>
    <p class="card-text text-center">${membro.ruolo}</p>
  </div>
</div>
</div>
    `;
}
