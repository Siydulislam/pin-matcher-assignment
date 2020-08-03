// About Invisible Notification 

document.getElementById("notifyUnmatchedPin").style.display = "none";
document.getElementById("notifyMatchedPin").style.display = "none";
document.getElementById("actionRemaining").style.display = "none";

// Generate Pin number

function generatePin() {
    document.getElementById("generate-pin-num").value = Math.floor(Math.random() * 8999 + 1000);
}

// Activate the Numerical Key

function numericalKey(num) {
    document.getElementById("input-password").value = document.getElementById("input-password").value + num;
}



