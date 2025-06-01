let numberOne = document.getElementById("firstNumber");
let valueOfOne = Math.ceil(Math.random() * 100);
numberOne.textContent = parseInt(valueOfOne);
let numberTwo = document.getElementById("secondNumber");
let valueOfTwo = Math.ceil(Math.random() * 100);
numberTwo.textContent = parseInt(valueOfTwo);
console.log(valueOfOne + valueOfTwo);

function checkResult() {
    let userInput = document.getElementById("userInput");
    let gameResult = document.getElementById("gameResult");
    console.log(userInput.value);
    if (parseInt(userInput.value) === (valueOfOne + valueOfTwo)) {
        gameResult.textContent = "Congratulations! You got it right! ";
        gameResult.style.backgroundColor = "green";
    } else {
        gameResult.textContent = "Please try again!";
        gameResult.style.backgroundColor = "#1e217c";
    }

}

function restartGame() {
    let firstRandomNumber = Math.random() * 100;
    let secondRandomNumber = Math.random() * 100;

    numberOne.textContent = Math.ceil(firstRandomNumber);
    numberTwo.textContent = Math.ceil(secondRandomNumber);
    gameResult.textContent = "";
    userInput.value = "";
}