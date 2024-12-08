const containerEl = document.querySelector('.container');

const careers = ['YouTuber', 'Web Developer', 'Freelancer', 'Engineer', 'Instructor']

let careerIndex = 0;

let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;
  containerEl.innerHTML = `
  <h1>I am ${
    ['A', 'E', 'I', 'O', 'U'].includes(careers[careerIndex].charAt(0)) ? 'an' : 'a'
  } ${careers[careerIndex].slice(0, characterIndex)}</h1>
  `;

if(characterIndex === careers[careerIndex].length){
  careerIndex++;
  characterIndex = 0
}

if(careerIndex === careers.length){
  careerIndex = 0;
}
setTimeout(updateText, 500);

}
