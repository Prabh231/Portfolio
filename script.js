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
/*refelction
While creating my portfolio website, I learned how to use HTML, CSS, and JavaScript together
to build a complete webpage. I used semantic HTML to organize my content into sections like 
About, Projects, and Contact, which helped keep my code clear and structured.One thing that
went well was building a responsive layout using CSS Grid and Flexbox. This allowed my website
to adjust properly on different screen sizes. I also successfully added JavaScript features 
like a dark mode toggle and a contact form message, which made the page more interactive.One
challenge I faced was fixing dark mode styling. Some text and sections were not changing colors
properly. I had to carefully adjust my CSS rules to make sure everything worked correctly in
both light and dark mode.Overall, I learned how important proper structure, styling order, 
and testing are when building a website. I also improved myproblem-solving skills while 
debugging layout and styling issues.*/