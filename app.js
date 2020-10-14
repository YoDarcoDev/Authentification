const btnInscription = document.querySelector('.btn-inscription');
const btnConnexion = document.querySelector('.btn-connexion');
const btnDeco = document.querySelector('.btn-deco');

const formInscription = document.querySelector('.form-inscription');
const emailInscription = document.querySelector('.email-inscription');
const mdpInscription = document.querySelector('.mdp-inscription');

const formConnexion = document.querySelector('.form-connexion');


// BTN INSCRIPTION

btnInscription.addEventListener('click', () => {
    
    if (formConnexion.classList.contains('apparition')) {     // Si formConnexion est présent on le fait disparaitre
        formConnexion.classList.remove('apparition');
    }

    formInscription.classList.toggle('apparition');          // Ajoute classe avec display:flex au form
})



// BTN CONNEXION

btnConnexion.addEventListener('click', () => {
    
    if (formInscription.classList.contains('apparition')) {
        formInscription.classList.remove('apparition')
    }

    formConnexion.classList.toggle('apparition');
})



// BTN DECONNEXION

btnDeco.addEventListener('click', (e) => {

    e.preventDefault();
    auth.signOut().then(() => {
        console.log("Déconnecté")
    })
})




// FORM INSCRIPTION

formInscription.addEventListener('submit', (e) => {
   
    e.preventDefault();         // envoie des données vers firebase, ne pas recharger la page

    const mailValeur = emailInscription.value;
    const mdpInscriptionValeur = mdpInscription.value

    // console.log(mailValeur);
    // console.log(mdpInscriptionValeur);

    auth.createUserWithEmailAndPassword(mailValeur, mdpInscriptionValeur)
    .then(credentials => {
        console.log(credentials);

        formInscription.reset();        // Clean les inputs
        formInscription.classList.toggle('apparition');
    })
})     




// FORM CONNEXION

formConnexion.addEventListener('submit', (e) => {
   
    e.preventDefault();

    const mailValeur = emailConnexion.value;
    const mdpConnexionValeur = mdpConnexion.value

    // console.log(mailValeur);
    // console.log(mdpConnexionValeur);

    auth.signInWithEmailAndPassword(mailValeur, mdpConnexionValeur)
    .then(credentials => {

        console.log(credentials);
        console.log("Connecté", credentials.user);

        formConnexion.reset();
        formConnexion.classList.toggle('apparition');
    })
})  



// GERER LE CONTENU

auth.onAuthStateChanged(utilisateur => {                // Voir si un user est connecté ou pas

    const h1 = document.querySelector('h1');
    const info = document.querySelector('.info');

    if (utilisateur) {
        info.innerText = "Voici le contenu privé";
        h1.innerText = "Vous voilà de retour !";
    }

    else {
        console.log("Utilisateur s'est déconnecté");
        info.innerText = "Contenu public.";
        h1.innerText = "Bienvenue, inscrivez-vous ou connectez-vous";
    }
})



