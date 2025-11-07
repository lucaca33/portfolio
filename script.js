window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");
});

const b1 = document.getElementById('mailtouchable');
const b2 = document.getElementById('bouton2');
const b3 = document.getElementById('bouton3');
const b4 = document.getElementById('bouton4');

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
    void b1.offsetWidth; // "reset" l’animation
    b1.classList.add('animate-pop');
    animate(af1);
})/*
b2.addEventListener('click', () => {
    b2.classList.remove('animate-pop'); // si déjà animée
    void b2.offsetWidth; // "reset" l’animation
    b2.classList.add('animate-pop');
    animate(af1);
})
b3.addEventListener('click', () => {
    b3.classList.remove('animate-pop'); // si déjà animée
    void b3.offsetWidth; // "reset" l’animation
    b3.classList.add('animate-pop');
    animate(af1);
})
b4.addEventListener('click', () => {
    b4.classList.remove('animate-pop'); // si déjà animée
    void b4.offsetWidth; // "reset" l’animation
    b4.classList.add('animate-pop');
    animate(af1);
})*/