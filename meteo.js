
function showCity(){
    
    let message = document.querySelector('#label');
    let nomVilleSelectionnee = document.getElementById('ville').value;
    let villes = document.getElementsByClassName('city');
    let taille = villes.length;
    for(let i = 0; i < taille; i++){
        if(nomVilleSelectionnee == villes[i].id){
            villes[i].style.display="";
            villes[i].style.width = "100%";
            message.firstChild.nodeValue = "You selected: "+villes[i].id;

        }
        else{
            villes[i].style.display= "none";
        }
    } 
}