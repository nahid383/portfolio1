// ================= PROJECT PAGE ANIMATION =================

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card, index) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(60px)";

    setTimeout(() => {
        card.style.transition = "0.8s ease";

        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, index * 300);

});

// ================= BUTTON CONSOLE EVENTS =================

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        console.log("Project button clicked:", button.innerText);

    });

});

// ================= HOVER EFFECT =================

projectCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        console.log("Hovering project:", card.querySelector("h2").innerText);

    });

});