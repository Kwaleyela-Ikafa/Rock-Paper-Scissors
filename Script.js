const selectionButtons = document.querySelectorAll("[data-selection]");
const finalColumn = document.querySelector('[data-final-column]')
const compScoreSpan = document.querySelector('[data-comp-score]')
const userScoreSpan = document.querySelector('[data-user-score]')
const SELECTIONS = [
    {
        name: 'Rock',
        emoji: '🪨',
        beats: 'Scissors'
    },
    {
        name: 'Paper',
        emoji: '📄',
        beats: 'Rock'
    },
    {
        name: 'Scissors',
        emoji: '✂️',
        beats: 'Paper'
    }
];

selectionButtons.forEach(selectionButton =>{
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection);
    })
})

function makeSelection(selection){
    const computerSelect = randomSelection()
    const theWinner = isWinner(selection, computerSelect)
    const compWinner = isWinner(computerSelect, selection)
    
    selectResult(computerSelect, compWinner)
    selectResult(selection, theWinner)

    if (theWinner) incrementScore(userScoreSpan)
    if (compWinner) incrementScore(compScoreSpan)
}

function incrementScore(scoreSpan){
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function selectResult(selection, winner){
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('selectResult')
    if (winner) div.classList.add('winner')
    finalColumn.after(div)
}

function isWinner(selection, oppSelect){
    return selection.beats === oppSelect.name
}

function randomSelection(){
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]

}