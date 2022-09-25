var button = document.getElementById("allDivs");
button.addEventListener('click',clickMe, true);

function clickMe(e) {
    document.getElementById("myPTag").innerHTML = "This is a message from " + e.target.id;
}