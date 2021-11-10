

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
    let result = document.getElementById('result').innerHTML = 'email riconosciuta';
}else{
    let result = document.getElementById('result').innerHTML = 'email non riconosciuta';
}

console.log(result)
})


