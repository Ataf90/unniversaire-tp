console.log("mon script bien chargé ");

// let data= new Date(); 
//     console.log(data);
// let day = data.getDate()
// console.log(day);
// let month = data.getMonth()+1;
// console.log(month);
// let year = data.getFullYear();
// console.log(year);
// Ajouter l'évenement  de click ///

function calculerJoursRestants(anniversaireJour, anniversaireMois) {
    let date = new Date();

    let dateAnniversaire = new Date(date.getFullYear(), anniversaireMois - 1, anniversaireJour);

    if (dateAnniversaire.getTime() >= date.getTime()) {
        let difference = dateAnniversaire.getTime() - date.getTime();
        return Math.ceil(difference / (1000 * 3600 * 24));
    } else {
        dateAnniversaire.setFullYear(date.getFullYear() + 1);
        let difference = dateAnniversaire.getTime() - date.getTime();
        return Math.ceil(difference / (1000 * 3600 * 24));
    }
}

document.querySelector("#validation").addEventListener("click", (event) => {
    let dayInput = document.querySelector("#day_input").value;
    let monthInput = document.querySelector("#month_input").value;

    if (dayInput && monthInput) {
        let anniversaireJour = parseInt(dayInput);
        let anniversaireMois = parseInt(monthInput);

        let joursRestants = calculerJoursRestants(anniversaireJour, anniversaireMois);

        document.querySelector("#affiche_jour").textContent = `Il reste ${joursRestants} jours jusqu'à votre anniversaire.`
        if(joursRestants === 0){
            let afficheImageEll = document.querySelector("#affiche_image")
            let image = document.createElement("img");
            image.setAttribute('src',"/assests/image/joyeuxanniversaire.gif")
            image.classList.add("image-anniversaire")
           afficheImageEll.appendChild(image)
        }

    } else {
        document.querySelector("#affiche_jour").textContent = "Veuillez saisir à la fois le jour et le mois de naissance."
    }
});
document.querySelector("#reset").addEventListener("click", (event) => {
    document.querySelector("#day_input").value = "";
    document.querySelector("#month_input").value = "";
    document.getElementById("affiche_jour").innerHTML = ""; // Pour supprimer l'image s'il y en a une
});