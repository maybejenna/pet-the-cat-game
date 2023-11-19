let petClickCount = 0;
let highScore = 0;
let petClickScore = 0; 
let petAllowance = 0;

const petCountNumber = document.querySelector(".petCountNumber");
let highScoreNumber = document.querySelector(".highestScore");
const petElement = document.querySelector('.animated-gif'); 
const bankElement = document.querySelector(".bankButton"); 

generatePetAllowance();

petElement.addEventListener("click", () => {
    petClickCount++;
    petCountNumber.textContent = petClickCount;
    highScore++;
    highScoreNumber.textContent = `High Score: ${highScore}`;

    if (petClickCount >= petAllowance) {
        showModal();
        resetGame();
    }
});

function generatePetAllowance() {
    petAllowance = Math.floor(Math.random() * 9);
}

bankElement.addEventListener("click", () => {
    console.log("Banking... Current petClickCount:", petClickCount, "Current highScore:", highScore);

    petClickCount = 0; 
    petCountNumber.textContent = petClickCount; 
    
    if (petClickCount != 0){
    highScore++;
    highScoreNumber.textContent = `High Score: ${highScore}`;
    } else {
        return; 
    }

    generatePetAllowance(); 

    console.log("After banking - petClickCount:", petClickCount, "highScore:", highScore);
});

function resetGame() {
    petClickCount = 0;
    highScore = 0; 
    petCountNumber.textContent = petClickCount;
    highScoreNumber.textContent = `High Score: ${highScore}`;
    generatePetAllowance();
}

function showModal() {
    document.getElementById('loseModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('loseModal').style.display = 'none';
    resetGame();
}