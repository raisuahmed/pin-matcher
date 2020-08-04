
// Generate the random Number
function generateRandom() {
    document.getElementById('generated-pin').value = Math.floor(Math.random() * 8999 + 1000);
}
// active the number buttons
function numberButton(num) {
    document.getElementById('input-generatedPin').value = document.getElementById('input-generatedPin').value + num;
    buttonAudio.play();
}
// active the delete button
function deleteButton() {
    let inputValue = document.getElementById('input-generatedPin').value;
    document.getElementById('input-generatedPin').value = inputValue.substring(0, inputValue.length - 1);
    buttonAudio.play();
}

// active the clear button

function clearEverything() {
    document.getElementById('input-generatedPin').value = "";
    buttonAudio.play();
}
//the notification invisible
document.getElementById("matched-notify").style.display = "none";
document.getElementById("misMatch-notify").style.display = "none";
document.getElementById("action-left").style.display = "block";



// active the submit Button and left action

document.getElementById("submitBtn").addEventListener("click", function () {

    let generatePin = document.getElementById('generated-pin').value;
    let inputSubmitPin = document.getElementById('input-generatedPin').value
    if (generatePin == inputSubmitPin) {
      
        
        document.getElementById("matched-notify").style.display = "block";
        document.getElementById("misMatch-notify").style.display = "none";
        
    }
    else {
        
        document.getElementById("misMatch-notify").style.display = "block";
        misMatchAudio.play();
        document.getElementById("matched-notify").style.display = "none";
        
        let totalActionLeft = parseInt(document.getElementById("action-left").innerText);
        totalActionLeft -= 1;
        document.getElementById("action-left").innerText = totalActionLeft;
        if (totalActionLeft == 0){
            document.getElementById("submitBtn").disabled = true;
            
            document.getElementById("submitBtn").style.backgroundColor = "#f01121";
        }
    }

    
})



