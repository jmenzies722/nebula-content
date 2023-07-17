function updateID() {
    // Get input values
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let email = document.getElementById("email").value;
    let jobTitle = document.getElementById("jobtitle").value;

    // Get card elements
    let cardName = document.getElementById("card-name");
    let cardID = document.getElementById("card-id");
    let cardEmail = document.getElementById("card-email");
    let cardJobTitle = document.getElementById("card-jobtitle");

    // Update card elements
    cardName.textContent = name;
    cardID.textContent = id;
    cardEmail.textContent = email;
    cardJobTitle.textContent = jobTitle;

    // Reset animation
    let idCard = document.getElementById("id-card");
    idCard.style.animation = "none";
    
    setTimeout(function() {
        idCard.style.animation = "";
    }, 10);
}
