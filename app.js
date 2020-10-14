const btnInscription = document.querySelector('.btn-inscription');
const btnConnexion = document.querySelector('.btn-connexion');
const btnDeco = document.querySelector('.btn-deco');

const formInscription = document.querySelector('.form-inscription');
const emailInscription = document.querySelector('.')

const formConnexion = document.querySelector('.form-connexion');


btnInscription.addEventListener('click', () => {
    
    if (formConnexion.classList.contains('apparition')) {     // Si formConnexion est présent on le fait disparaitre
        formConnexion.classList.remove('apparition');
    }

    formInscription.classList.toggle('apparition');          // Ajoute classe avec display:flex au form
})



btnConnexion.addEventListener('click', () => {
    
    if (formInscription.classList.contains('apparition')) {
        formInscription.classList.remove('apparition')
    }

    formConnexion.classList.toggle('apparition');
})



formInscription.addEventListener('submit', (e) => {
   
    e.preventDefault();

    const mailValeur = emailInscription.value;
    const mdpInscriptionValeur = mdpInscription.value
})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           