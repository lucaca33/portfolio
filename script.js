window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");
});

const b1 = document.getElementById('mailtouchable');
const b2 = document.getElementById('bouton2');
const b3 = document.getElementById('bouton3');
const b4 = document.getElementById('bouton4');
const liste_button = [b1, b2, b3, b4];

const af0 = document.getElementById('message_start'); // le message qui s'affiche quand on regarde rien
const af1 = document.getElementById('mailAffichage');
const af2 = document.getElementById('langues');
const af3 = document.getElementById('projets');
const af4 = document.getElementById('mailAffichage');
const liste_affichage = [af0, af1, af2, af3, af4]

function animate(to_animate) {
    if (to_animate.classList.contains('animate_on')) { // Si celui que l'on a cliqué est allumé, on l'éteint et on allume af0
        void to_animate.offsetWidth;
        to_animate.classList.add('animate_off')
        to_animate.classList.remove('animate_on')
        void af0.offsetWidth;
        af0.classList.add('animate_on');
        af0.classList.remove('animate_off');
    } else { // Sinon : on éteint tout les autres et on allume celui la
        // bug ici quelque part
        for (let i = 0; i < liste_affichage.length; i++) {
            if (liste_affichage[i] == to_animate) { // si c'est le bon on l'allume
                void liste_affichage[i].offsetWidth;
                liste_affichage[i].classList.add('animate_on');
                liste_affichage[i].classList.remove('animate_off');
            } else { // sinon on l'éteint
                void liste_affichage[i].offsetWidth;
                liste_affichage[i].classList.add('animate_off')
                liste_affichage[i].classList.remove('animate_on')
            }
        }
    }
    return 0;
}

function button_updt(button) {
    button_pop(button);
}
function button_pop(button) {
    button.classList.remove('animate-pop'); // reset animation
    void button.offsetWidth; // force le reflow pour la rejouer
    button.classList.add('animate-pop');
    setTimeout(() => button.classList.remove('animate-pop'), 300);
    return 0;
}

b1.addEventListener('click', () => {
    button_updt(b1);
    animate(af1);
})
b2.addEventListener('click', () => {
    button_updt(b2);
    animate(af2);
})
b3.addEventListener('click', () => {
    button_updt(b3);
    animate(af3);
})
b4.addEventListener('click', () => {
    button_updt(b4);
    animate(af4);
})
