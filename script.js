// the notification invisible
document.getElementById("matched-notify").style.display = "none";
document.getElementById("misMatch-notify").style.display = "none";
document.getElementById("action-left").style.display = "none";

// Generate the random Number
function generateRandom() {
    document.getElementById('generated-pin').value = Math.floor(Math.random() * 8999 + 1000);
}
// active the number buttons
function numberButton(num) {
    document.getElementById('input-generatedPin').value = document.getElementById('input-generatedPin').value + num;
}
// active the delete button
function deleteButton() {
    let inputValue = document.getElementById('input-generatedPin').value;
    document.getElementById('input-generatedPin').value = inputValue.substring(0, inputValue.length - 1);
}
// active the clear button
function clearEverything() {
    document.getElementById('input-generatedPin').value = "";
}

// Active the submit Button

function submitButton() {
    let inputNumber = document.getElementById('input-generatedPin').value;
    let generatedNumber = document.getElementById('generated-pin').value;
    if (inputNumber == "" && generatedNumber == "") {
        alert('Please Generate Pin First');
    } else if (inputNumber == generatedNumber) {
        document.getElementById("matched-notify").style.display = "block"
        document.getElementById("misMatch-notify").style.display = "none"
    } else {
        document.getElementById("matched-Notify").style.display = "none"
        document.getElementById("misMatch-notify").style.display = "block"
        tryLeft();
    }
}