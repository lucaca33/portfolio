const b1 = document.getElementById('mailtouchable');/*
const b2 = document.getElementById('mailtouchable');
const b3 = document.getElementById('mailtouchable');
const b4 = document.getElementById('mailtouchable');*/

const af1 = document.getElementById('mailAffichage');

b1.addEventListener('click', () => {
    b1.classList.remove('animate-pop'); // si déjà animée
    void mail.offsetWidth; // "reset" l’animation
    b1.classList.add('animate-pop');

    if (af1.classList.contains('animate_on')) {
        void af1.offsetWidth;
        af1.classList.add('animate_off')
        af1.classList.remove('animate_on')
    }
    else {
        void af1.offsetWidth;
        af1.classList.add('animate_on');
        af1.classList.remove('animate_off');
    }
})

window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");
});