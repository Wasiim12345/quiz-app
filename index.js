// var data = [
//     {"id":1,
//     "answer":3,
//     "question":"Which was not one of Voldemort's Horcruxes?",
//     "options":["Harry","Nagini","Helga's Diadem","Tom Riddle's Diary"]
// },
// {
//     "id":2,
//     "answer":1,
//     "question":"Which of these are not one of Hagrid's many pets?",
//     "options":["Grawp","Fluffy","Aragog","Noberta"]
// },
// {
//     "id":3,
//     "answer":3,
//     "question":"Which class did Severus Snape always want to teach?",
//     "options":["Potions","Charms","Defense Against Dark Arts","Transfiguration"]
// },
// {
//     "id":4,
//     "answer":3,
//     "question":"Which Hogwarts house did Moaning Myrtle belong in?",
//     "options":["Gryffindor","Slytherin","Ravenclaw","Hufflepuff"]
// },
// {
//     "id":5,
//     "answer":2,
//     "question":"What class did Neville end up teaching at Hogwarts?",
//     "options":["Astronomy","Herbology","Charms","Muggle Studies"]
// }]



const questionsE1 = document.getElementById('questions');
const scoreE1 = document.getElementById('score');
const btnE1 = document.getElementById('btn');


var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = (e) => {
    let result = e.target;

    if (result.readyState === 4 && result.status === 200) {
        data = JSON.parse(result.response);
        renderQuestions();

    } 
}
xhttp.open("GET", "https://5d76bf96515d1a0014085cf9.mockapi.io/quiz", true);
xhttp.send();


function renderQuestions() {
    let output = '';

    for (let i = 0; i < data.length; i++) {
        output += `
        <div class="question">
                <h2>Q${i + 1}. ${data[i].question}</h2>
                <label><input type="radio" id="${1}" name="id${i}">${data[i].options[0]}</label>
                <label><input type="radio" id="${2}" name="id${i}">${data[i].options[1]}</label>
                <label><input type="radio" id="${3}" name="id${i}">${data[i].options[2]}</label>
                <label><input type="radio" id="${4}" name="id${i}">${data[i].options[3]}</label>
            </div>
        `
    }
    questionsE1.innerHTML = output;
}

btnE1.addEventListener('click', () => {
    let score = 0;

    for (let i = 0; i < 5; i++) {
        let selector = `input[name = "id${i}"]:checked`;
        let selectedOption = +document.querySelector(selector).id;
        if (selectedOption == data[i].answer) {
            score++;
        }
    }
    scoreE1.innerHTML = `${score} / 5`;
})

