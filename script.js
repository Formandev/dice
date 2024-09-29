const selectDice = document.getElementById('dice-select');
const rollBtn = document.getElementById('roll-btn');
const playingField = document.getElementById('playing-field');
const clearBtn = document.getElementById('clear-btn');


function rollTheDice(numberOfDice) {
    const result = [];
    for (let i = 0; i < numberOfDice; i++) {
        const diceResult = Math.floor(Math.random() * 6) + 1;
        result.push(diceResult);
    }
    return result;  
}

function displayResults(results) {
    playingField.innerHTML = '';
    results.forEach((result, index)=> {
        const diceDiv = document.createElement('div');


        const diceImg = document.createElement('img');
        diceImg.src = `./img/dice-${result}.svg`
        diceImg.classList.add('dice-image');

        diceDiv.appendChild(diceImg);
        playingField.appendChild(diceDiv);
    });
}

rollBtn.addEventListener('click', () => {
  const diceCount = parseInt(selectDice.value); 
    const results = rollTheDice(diceCount);
    displayResults(results);
});

clearBtn.addEventListener('click', () => {
    playingField.innerHTML = '';
});