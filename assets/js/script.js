const btn = document.querySelector("button");
const input = document.querySelector("input");
const headerTwo = document.querySelector("h2");
const p = document.querySelector("p");
const reset = document.querySelector("#reset");
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let timeInterval;
const sentences = [
    "I can type at an impressive speed of 90 words per minute, ensuring efficient and timely communication",
    "My typing velocity is quite rapid, reaching 120 keystrokes per minute with high accuracy",
    "I possess a swift typing proficiency, enabling me to swiftly transcribe documents and messages",
    "With a typing speed of 100 words per minute, I can quickly and accurately handle data entry tasks",
    "I have honed my typing skills to achieve a remarkable speed of 110 keystrokes per minute, ensuring productivity in various tasks",
    "Efficiently typing at 80 words per minute, I can deliver prompt and precise responses in fast-paced work environments",
    "I am adept at rapid keyboarding, maintaining a speed of 95 words per minute while maintaining accuracy and attention to detail",
    "My typing pace of 130 keystrokes per minute reflects my commitment to swift and proficient data input",
    "With a typing speed of 85 words per minute, I am able to tackle extensive documentation swiftly and accurately",
    "I am proud to have developed a fast typing ability, consistently typing at 115 words per minute for optimal productivity",
    "In the eyes, a fire quietly smolders, my art, my few moments carefree, Will remain after me, words in this melody, and a few memories",
    "I grew tired of the underground, tired of the silence, i am breathing in the air to fill my lungs with oxygen",
    'Six zeros, I would like to make six zeros, the bartender asks me what else to mix, "please, anything"',
    "I open the window, cooling from the sea breeze, a gentle wind, a vast world, aquatic pathways",
    "Your skin smells like the last days of vacation, rain on concrete, rain on concrete",
    "I have never been to a techno party, heavy metal hangs around my neck, They are making you a drink in a shaker with mint",
    "I am sculpting notes, making beats, pressing vinyl again, money - I follow the old rules, as if I were crafting lyrics",
    "Playing the guitar like a desperado, I have no flaws because I am the flaw. If you want to talk to a guy with a heart, talk to me like a decade ago",
    "A deaf night, the city weeps again, will anyone listen? Quietly, quietly, It is too quiet, so play it loud for the block",
    "I bought a car, though I don't know why, but at a good price, tempted by the ad during late nights on CNN",
    "Summer lasted all years, now it's about three weeks, summer touched by inflation, the tax of adulthood",
    "The bus finishes its loop, I will never finish in a loop, I write verses endlessly on loops, if you want, you can loop them, thanks",
    "You have to carefully choose your heroes; a friend will tell you whom to trust and whom not to. Your American idol has four ghostwriters"];
input.onpaste = e => {
    e.preventDefault();
    return false;
};
function randomSentence(max){
    return Math.floor(Math.random() * max);
}
let randomSentenceVariable = sentences[randomSentence(sentences.length)].toLowerCase();

function startTimer(){
    timerInterval = setInterval(updateTimer, 10);
}
function stopTimer(){
    clearInterval(timerInterval);
}
function updateTimer(){
    miliseconds += 10;

    if(miliseconds === 1000){
        miliseconds = 0;
        seconds++;

        if(seconds === 60){
            seconds = 0;
            minutes++;
        }
    }
    updateTimerDisplay();
}

function updateTimerDisplay(){
    const timerDisplay = document.querySelector("#timer");
    timerDisplay.textContent = `${padZero(minutes)}:${padZero(seconds)}:${padZero(miliseconds / 10)}`;
}

function padZero(value){
    return value < 10 ? `0${value}` : value;
}

input.style.display = "none";
reset.style.display = "none";

btn.addEventListener('click', function (){
    btn.style.display = "none";
    input.style.display = "block";
    headerTwo.innerHTML = randomSentenceVariable;
    reset.style.display = "flex";
    input.focus();
    startTimer();
});
// alert(randomSentenceVariable);
input.addEventListener('input', () => {
    let input_content = input.value.toLowerCase();
    // console.log(e.key);
    let user_text = input_content;
    // console.log(user_text);
    let sentece_fragment = randomSentenceVariable.slice(0, user_text.length)
    if (user_text === sentece_fragment){
        p.innerHTML = "keep going...";
        p.style.color = "lime";
        if(user_text === randomSentenceVariable){
            stopTimer();
            alert("you did it!");
            input.style.display = "none";
            p.innerHTML = "good job!!!";
        }
    }else{
        p.innerHTML = "Somewhere around here is a mistake!!!";
        p.style.color = "red";
    }   
});
reset.addEventListener('click', () => { location.reload() });