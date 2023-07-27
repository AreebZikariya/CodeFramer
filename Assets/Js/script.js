let mainImage = document.getElementsByClassName("body-image")[0];

// Getting the elements to create some alert

let htmlImage = document.getElementsByClassName("card-image-4")[0];
let cssImage = document.getElementsByClassName("card-image-5")[0];
let jsImage = document.getElementsByClassName("card-image-6")[0];
let javaImage = document.getElementsByClassName("card-image-3")[0];
let cImage = document.getElementsByClassName("card-image-2")[0];
let pythonImage = document.getElementsByClassName("card-image-1")[0];
let myAlert = document.getElementsByClassName("alert")[0];
let alertBtn = document.getElementsByClassName("alert-btn")[0];

mainImage.addEventListener("click", () => {
    // if(myAlert.style.top == "15vw") {
    //     myAlert.style.top = "-14vw"
    // }
    // else if(myAlert .style.top == "-14vw") {
    //     myAlert.style.top = "15vw"
    // }
    alert("Welcome to Code Framer website!")
});

// alertBtn.addEventListener("click", () => {
//     if(myAlert .style.display == "flex") {
//         myAlert.style.display = "none"
//     }
// });

htmlImage.addEventListener("click", () => {
    alert("This is the HTML description. Clicking on the \"Go to Documentation page\" button will take you to the Documentation page")
});

cssImage.addEventListener("click", () => {
    alert("This is the CSS description. Clicking on the \"Go to Documentation page\" button will take you to the Documentation page")
});

jsImage.addEventListener("click", () => {
    alert("This is the JS description. Clicking on the \"Go to Documentation page\" button will take you to the Documentation page")
});

javaImage.addEventListener("click", () => {
    alert("This is the Java description. Clicking on the \"Go to Documentation page\" button will take you to the Documentation page")
});

cImage.addEventListener("click", () => {
    alert("This is the C/C++ description. Clicking on the \"Go to Documentation page\" button will take you to the Documentation page")
});

pythonImage.addEventListener("click", () => {
    alert("This is the Python description. Clicking on the \"Go to Documentation page\" button will take you to the Documentation page")
});

let ytLink = document.getElementsByClassName("yt-link")[0];
let instaLink = document.getElementsByClassName("insta-link")[0];

ytLink.addEventListener("click", () => {
    alert("YouTube page is not available");
});
instaLink.addEventListener("click", () => {
    alert("Instagram page is not available");
});
