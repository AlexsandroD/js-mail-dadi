

const btn = document.getElementById('bnt-1')




btn.addEventListener('click', function(){

const email = document.getElementById('email').value;


const emailReg = ["alex@banana","piero@banana","gianni@banana", "monica@banana","gaetano@banana", "federico@banana","luca@banana", "peppe@banana","gino@banana", "sarbina@banana","ugo@banana", "ego@banana"];

let controllo = false;

for(i = 0; i <emailReg.length; i++){
    if(emailReg[i] == email){
       controllo = true;
    }
  
}

if (controllo){    
    let result = document.getElementById('result').innerHTML = ' é riconosciuta';
}else{
    let result = document.getElementById('result').innerHTML = ' non é riconosciuta';
}

})



// bisogna creare un'arrey con numeri da 1 a 6
const buttunDadi = document.getElementById('btn-2');
const numeri = [1,2,3,4,5,6];


buttunDadi.addEventListener('click', function(){


    let randomPc = Math.floor(Math.random(numeri) *12 +1);
    document.getElementById('pc').innerHTML = 'Pc: ' + randomPc ;
    
    let randomPlayer = Math.floor(Math.random(numeri) *6 +1);
    document.getElementById('player').innerHTML = 'Player1: ' + randomPlayer;
    
    
    if(randomPc > randomPlayer){
        let risultato = document.getElementById('risultato').innerHTML = 'Pc vince';
    }else if(randomPc == randomPlayer){
        let risultato = document.getElementById('risultato').innerHTML = 'Pareggio';
    }else
    {
        let risultato = document.getElementById('risultato').innerHTML = 'Player1 vince';
    };

    

})

