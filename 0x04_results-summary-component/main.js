"use strict";

const data = [
    {
        "category": "Reaction",
        "score": 80,
        "icon": "./assets/images/icon-reaction.svg",
        "class": "red"
    },
    {
        "category": "Memory",
        "score": 92,
        "icon": "./assets/images/icon-memory.svg",
        "class": "yellow"
    },
    {
        "category": "Verbal",
        "score": 99,
        "icon": "./assets/images/icon-verbal.svg",
        "class": "green"
    },
    {
        "category": "Visual",
        "score": 0,
        "icon": "./assets/images/icon-visual.svg",
        "class": "blue"
    },

]

function calculate_score(array_obj) {
    let sum = 0;
    data.forEach((obj) => {
        sum += obj.score;
    })

    return sum / data.length


}

function create_element(element, className) {
    var element = document.createElement('element')
    element.className = className
    return element
}

function create_card(obj) {

    var score_card = create_element('div', 'score-card ' + obj.class)
    score_card.innerHTML = `<div class="score-name">
                                <img src=${obj.icon} alt="icon">
                                <p>${obj.category}</p>
                            </div>

                            <div class="score">
                                <p>${obj.score}<span class="gray-out"> /100</span></p>
                            </div>`

    return score_card
}

// update score
var total_score = document.getElementById('total_score')
total_score.innerText = Math.floor(calculate_score(data))

//add elemetns dynamically to html page
var summ_body = document.getElementById("summary-body");
var btn = document.getElementById('btn')
data.forEach((obj) => {
    var score_card = create_card(obj)
    summ_body.insertBefore(score_card, btn)
})
