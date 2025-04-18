const openPopUp = document.getElementById("open-popup");
const closePopUp = document.getElementById("close-popup") 
const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");

openPopUp.document.addEventListener("click", () => {
    popup.style.display = "block";
    overlay.style.display = "block";
});

closePopUpButton.addEventListener("click", () => {
    popup.style.display = "none";
    overlay.style.display = "none"
});