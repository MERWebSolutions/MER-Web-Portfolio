const words = [
    "A Web Developer",
    "A Frontend Developer",
    "Building Modern Websites",
    "Helping Businesses Grow Online"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        typingElement.textContent = currentWord.substring(0,charIndex--);
    } else {
        typingElement.textContent = currentWord.substring(0,charIndex++);
    }
    
    let speed = isDeleting ? 60 : 120;

    if (!isDeleting && charIndex === currentWord.length + 1){
        speed = 1500;
        isDeleting = true;
    }
    if (isDeleting && charIndex === 0){
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }
    setTimeout(typeEffect, speed);
}

typeEffect()

const hiddenElements = document.querySelectorAll(".hidden");
const observer = new IntersectionObserver((enteries) => {
    enteries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});
hiddenElements.forEach((el) => observer.observe(el));

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click",() => {
    navLinks.classList.toggle("active");
});