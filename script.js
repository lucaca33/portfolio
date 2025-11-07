window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");
});

const b1 = document.getElementById('mailtouchable');/*
const b2 = document.getElementById('mailtouchable');
const b3 = document.getElementById('mailtouchable');
const b4 = document.getElementById('mailtouchable');*/

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

b1.addEventListener('click', () => {
    b1.classList.remove('animate-pop'); // si déjà animée
    void mail.offsetWidth; // "reset" l’animation
    b1.classList.add('animate-pop');
    animate(af1);
})

