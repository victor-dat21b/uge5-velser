var button = document.getElementById("allDivs");
button.addEventListener('click',clickMe);

function clickMe(e) {
    console.log("Message", e.target)
}