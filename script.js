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