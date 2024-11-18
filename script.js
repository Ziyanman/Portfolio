// Footer with dynamic date
const footer = document.createElement("footer");
footer.id = "footer";
footer.innerHTML = `&copy; Ziyan Manasiya, ${new Date().getFullYear()}`;
document.body.appendChild(footer);

// Print today's date in the developer console
console.log(`Today's date is: ${new Date().toDateString()}`);

// Greeting based on time
const greetingElement = document.getElementById("greeting");
const currentHour = new Date().getHours();
let greetingText = "";
let greetingClass = "";

if (currentHour < 12) {
    greetingText = "Good morning!";
    greetingClass = "morning";
} else if (currentHour < 17) {
    greetingText = "Good afternoon!";
    greetingClass = "afternoon";
} else {
    greetingText = "Good evening!";
    greetingClass = "evening";
}

greetingElement.textContent = greetingText;
greetingElement.className = greetingClass; // Assign class for styling

// Alert button functionality
const alertButton = document.getElementById("btn-alert");
alertButton.addEventListener("click", () => {
    alert("Hello world!");
});


}
