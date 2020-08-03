// About Invisible Notification 
document.getElementById("notify-unmatched-pin").style.display = "none";
document.getElementById("notify-matched-pin").style.display = "none";
document.getElementById("action-remaining").style.display = "none";


// Generate Pin number
function generatePin() {
    document.getElementById("generate-pin").value = Math.floor(Math.random() * 8999 + 1000);
}


// Activate the Numerical Key
function numericalKey(num) {
    document.getElementById("input-pin").value = document.getElementById("input-pin").value + num;
}


// Activate the Submit Key
function submitKey() {
    let generatedPin = document.getElementById("generate-pin").value;
    let enteredPin = document.getElementById("input-pin").value;

    if(generatedPin == "") {
        alert("Please Generate Pin First")
    }
    else if(enteredPin == "") {
        alert("Please Enter Your Generated Pin")
    }
    else if(generatedPin == enteredPin) {
    document.getElementById("notify-matched-pin").style.display = "block";
    document.getElementById("notify-unmatched-pin").style.display = "none";
    }
    else {
    document.getElementById("notify-matched-pin").style.display = "none";
    document.getElementById("notify-unmatched-pin").style.display = "block";
    }
}


// Activate Delete Key
function deletePin() {
    let inputValue = document.getElementById("input-pin").value;
    document.getElementById("input-pin").value = inputValue.substring(0, inputValue.length - 1);
}


// Activate Clear Key
function clearPin() {
    document.getElementById("input-pin").value = "";
}


