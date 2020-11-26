const affichageTravail = document.querySelector('.affichageT');
const affichagePause = document.querySelector('.affichageP');
const btnGo = document.querySelector('.b1');
const btnPause = document.querySelector('.b2');
const btnReset = document.querySelector('.b3');
const cycles = document.querySelector('h2');


// en seconde
let checkInterval = false;
let tempsInitial = 1800 // 30 minuts
let tempsDeRepos = 300;
let pause = false;
let nbDeCycles = 0;
cycles.innerText = `Nombre de cycles ${nbDeCycles}`;

//Permet d'afficher de rajouter un zero quand le minutes sont inférieur à 10  ex: 9minutes 09 minutes exemple
affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${
(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;

affichagePause.innerText = `${Math.trunc(tempsDeRepos/60)} : ${
(tempsDeRepos % 60 < 10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;

btnGo.addEventListener('click', () =>{
    if(checkInterval === false){
        checkInterval = true;
   
        tempsInitial--;
        affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${
        (tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;

        let timer = setInterval(()=>{
            if(pause === false && tempsInitial > 0){
                tempsInitial--;
                affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${
                (tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;
            } 
            else if(pause === false && tempsDeRepos === 0 && tempsInitial === 0){
                tempsInitial = 1800;
                tempsDeRepos = 300;
                nbDeCycles++;
                cycles.innerText = `Nombre de cycles ${nbDeCycles}`;
                affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${
                (tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;
                affichagePause.innerText = `${Math.trunc(tempsDeRepos/60)} : ${
                (tempsDeRepos % 60 < 10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;
            } 
            else if(pause === false && tempsInitial === 0){
                tempsDeRepos--;
                affichagePause.innerText = `${Math.trunc(tempsDeRepos/60)} : ${
                (tempsDeRepos % 60 < 10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;
        
            }

            //Reset
          
        },1000) // 1000 milliseconde = 1 seconde

        btnReset.addEventListener("click", ()=>{
            clearInterval(timer);
            checkInterval = false;
            tempsInitial = 1800;
            tempsDeRepos = 300;
            affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${
            (tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;
            affichagePause.innerText = `${Math.trunc(tempsDeRepos/60)} : ${
            (tempsDeRepos % 60 < 10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;
        })    
    } else {
        return;
    }

  

})

btnPause.addEventListener('click', () =>{
    if(pause === false){
        btnPause.innerText = "Play";
    } else if (pause === true){
        btnPause.innerText = "Pause";
    }
    pause = !pause; //changer la valeur de pause de true à false ou inverse
})