
window.onload = function () {
    alert("Welcome to FrameVerse Photography!");
};


function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            document.getElementById("msg").textContent =
                "Please fill all the fields.";
            return;
        }

        document.getElementById("msg").textContent =
            "Message submitted successfully!";

        form.reset();

    });

});
