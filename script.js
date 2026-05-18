document.addEventListener("DOMContentLoaded", () => {

    const words = [
        "Coding Enthusiast",
        "Continuous Learner",
        "Problem Solver",
        "Passionate Developer",
        "Fueled by Curiosity and Code"
    ];

    const typingText = document.getElementById("typing-span");

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeSpeed = 70;
    const deleteSpeed = 40;
    const pauseTime = 700;

    function type() {
        const currentWord = words[wordIndex];

        if (!isDeleting) {
            typingText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(type, pauseTime);
            } else {
                setTimeout(type, typeSpeed);
            }

        } else {
            typingText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, 300);
            } else {
                setTimeout(type, deleteSpeed);
            }
        }
    }

    if (typingText) type();
});

const navlinks = document.querySelectorAll(".navlink");
const tabs = document.querySelectorAll(".content");

navlinks.forEach((link)=>{
    link.addEventListener('click', (e)=>{
        e.preventDefault();

        navlinks.forEach((l) => l.classList.remove("active"));

        link.classList.add("active");
        
        

        // navlinks.forEach((l)=>l.classList.remove
        // ("active"));

        console.log(link.dataset.tab);

        const tabName = link.dataset.tab;

        tabs.forEach((tab)=>{
            if(tab.id === tabName){
                tab.classList.add("active");
            } else{
                tab.classList.remove("active");
            }
        });
    });
});