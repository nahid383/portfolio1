document.addEventListener("DOMContentLoaded", () => {

    console.log("About page script loaded ✔");

    /* ================= GLOBAL CLICK LOGGER ================= */
    document.addEventListener("click", (event) => {

        const target = event.target;

        // Get element info
        const tag = target.tagName;
        const id = target.id ? `#${target.id}` : "";
        const className = target.className ? `.${target.className.toString().replaceAll(" ", ".")}` : "";

        console.log("🖱 Click detected:");
        console.log("Element:", tag + id + className);
        console.log("Text:", target.innerText || target.value || "No text");
        console.log("Full Element:", target);
    });

});