

// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
// Bonus
// Abbellire con CSS o Bootstrap
// Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)


// Selezione l'elemento di input
const emailList = document.getElementById('lista')

// creo una costante contente l'API
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'

// Avvio la richiesta ajax tramite axios



for(let i=0; i < 10; i++){


    axios.get(endpoint)

    .then(response => {
        
        const email = response.data.response;

        
        
        emailList.innerHTML += `<li>${email}</li>`
        
        
        
    })

    .catch(error => {
        console.error('Errore nel fetch dell’email:', error);
    });


}










