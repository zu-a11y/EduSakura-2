// Create custom cursor
const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");
document.body.appendChild(cursor);

// Move cursor
document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

// Button hover images (langsung dari URL)
const buttons = document.querySelectorAll(".main-card");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {
        const type = button.dataset.type;

        if (type === "activity") {
            cursor.style.backgroundImage =
            "url('https://cdn-icons-png.flaticon.com/512/684/684908.png')"; // Torii gate
        }

        if (type === "destination") {
            cursor.style.backgroundImage =
            "url('https://cdn-icons-png.flaticon.com/512/3176/3176295.png')"; // Castle
        }

        if (type === "culinary") {
            cursor.style.backgroundImage =
            "url('https://cdn-icons-png.flaticon.com/512/5787/5787016.png')"; // Sushi
        }

        if (type === "form") {
            cursor.style.backgroundImage =
            "url('https://cdn-icons-png.flaticon.com/512/2909/2909768.png')"; // Sakura
        }

        cursor.style.transform = "translate(-50%, -50%) scale(1.4)";
    });

    button.addEventListener("mouseleave", () => {
        cursor.style.backgroundImage = "none";
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
    });

});