// the notification invisible
document.getElementById("matched-notify").style.display = "none";
document.getElementById("misMatch-notify").style.display = "none";
document.getElementById("action-left").style.display = "none";
// Generating random Number
function generateRandom() {
    document.getElementById('generated-pin').value = Math.floor(Math.random() * 8999 + 1000);
}
// ACTIVE THE NUMBER BUTTONS
function numberButton(num) {
    document.getElementById('input-generatedPin').value = document.getElementById('input-generatedPin').value + num;
}
// active the delete button
function deleteBtn() {
    let inputValue = document.getElementById('input-generatedPin').value;
    document.getElementById('input-generatedPin').value = inputValue.substring(0, inputValue.length - 1);
}
// active the clear button
function clearEverything() {
    document.getElementById('input-generatedPin').value = "";
}