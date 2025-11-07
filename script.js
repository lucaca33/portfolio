window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");
});

const b1 = document.getElementById('mailtouchable');
const b2 = document.getElementById('TEST_BOUTTON2');
const b3 = document.getElementById('bouton3');
const b4 = document.getElementById('bouton4');
const liste_button = [b1, b2, b3, b4];

const af0 = document.getElementById('message_start'); // le message qui s'affiche quand on regarde rien
const af1 = document.getElementById('mailAffichage');

function animate(to_animate) {
    if (to_animate.classList.contains('animate_on')) {
        void to_animate.offsetWidth;
        to_animate.classList.add('animate_off')
        to_animate.classList.remove('animate_on')
    }
    else {
        void to_animate.offsetWidth;
        to_animate.classList.add('animate_on');
        to_animate.classList.remove('animate_off');
    }
    return 0;
}

function button_updt(button) {
    button_pop(button);
}
function button_pop(button) {
    button.classList.remove('animate-pop'); // si déjà animée
    void button.offsetWidth; // "reset" l’animation
    button.classList.add('animate-pop');
    return 0;
}

b1.addEventListener('click', () => {
    button_updt(b1);
    animate(af1);
    animate(af0);
})
b2.addEventListener('click', () => {
    button_updt(b2);
    animate(af1);
    animate(af0);
})
b3.addEventListener('click', () => {
    button_updt(b3);
    animate(af1);
    animate(af0);
})
b4.addEventListener('click', () => {
    button_updt(b4);
    animate(af1);
    animate(af0);
})