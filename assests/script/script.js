console.log("mon script bien chargé ");

let data= new Date(); 
    console.log(data);
let day = data.getDate()
console.log(day);
let month = data.getMonth()+1;
console.log(month);
let year = data.getFullYear();
console.log(year);
// Ajouter l'évenement  de click 
document.querySelector("#validation").addEventListener("click",()=>{
    
    let data =  new Date();
    console.log(data);

})