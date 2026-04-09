// This section selects all the elements from the HTML so they can be used in JavaScript.

// This variable stores the contact form element.
let contactForm = document.querySelector(".contact-form");
// This variable stores the name input field.
let nameInput = document.querySelector("#name");
// This variable stores the paragraph where messages will be shown.
let responseMessage = document.querySelector("#responseMessage");
// This variable stores the dark mode button.
let darkModeButton = document.querySelector("#darkModeBtn");
// This handles the contact form submission.
contactForm.addEventListener("submit", function(event) {
    // Prevents page refresh on submit.
    event.preventDefault();
    // Gets user input from name field.
    let userName = nameInput.value;
    // Checks if input is empty.
    if (userName === "") {
        responseMessage.textContent = "Please enter your name.";
    } else {
        responseMessage.textContent = "Thanks " + userName + ", I will get back to you soon!";
        contactForm.reset();
    }
})
if (darkModeButton) {
    darkModeButton.addEventListener("click", function () {
        // Toggle dark mode class on body
        document.body.classList.toggle("dark-mode");

        //  update button text based on mode
        if (document.body.classList.contains("dark-mode")) {
            darkModeButton.textContent = "Switch to Light Mode";
        } else {
            darkModeButton.textContent = "Switch to Dark Mode";
        }
    
    })
}
