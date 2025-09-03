const form = document.getElementById('libform');
const storyEl = document.getElementById('story');

const shuffleBtn = document.createElement('button');
shuffleBtn.textContent = "Shuffle Story";
document.body.appendChild(shuffleBtn);

const storyTemplates = [
    (noun, adjective, person, verb, place) => `${person} saw a ${adjective} ${noun} while they decided to ${verb} in ${place}.`,
    (noun, adjective, person, verb, place) => `Once upon a time, ${person} took a ${adjective} ${noun} to ${place} and ${verb} all day.`,
    (noun, adjective, person, verb, place) => `${person} couldn't believe a ${adjective} ${noun} could ${verb} in ${place}!`,
    (noun, adjective, person, verb, place) => `In ${place}, ${person} found a ${adjective} ${noun} that wanted to ${verb}.`,
];

function getInputValues() {
    const noun = document.getElementById('noun').value.trim();
    const adjective = document.getElementById('adjective').value.trim();
    const person = document.getElementById('person').value.trim();
    const verb = document.getElementById('verb').value.trim();
    const place = document.getElementById('place').value.trim();

    if (!noun || !adjective || !person || !verb || !place) {
        alert("Please fill in all fields!");
        return null;
    }

    return { noun, adjective, person, verb, place };
}

function generateStory() {
    const values = getInputValues();
    if (!values) return; 

    const randomIndex = Math.floor(Math.random() * storyTemplates.length);
    const template = storyTemplates[randomIndex];
    const story = template(values.noun, values.adjective, values.person, values.verb, values.place);
    storyEl.textContent = story;
}

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    generateStory();
});

shuffleBtn.addEventListener('click', function() {
    generateStory();
});
