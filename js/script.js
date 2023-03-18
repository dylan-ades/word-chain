let wordData, userInput, userInput2;
const apiKey = "43042ed6-27e0-4566-b859-05ce09dad7ed"

const $word = $('#word');
const $def = $('#def');
const $input = $('.text1');
// const $input2 = $('.text2');

$('form').on('submit', handleGetData);

function handleGetData(event) {
    event.preventDefault();
       // calling preventDefault() on a 'submit' event will prevent a page refresh  
    userInput = $input.val();
    // userInput1 = $input2.val();
      // getting the user input
    $.ajax({
        url:`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${userInput}?key=43042ed6-27e0-4566-b859-05ce09dad7ed`
        // url:`https://api.openwordmap.org/data/3.0/onecall?lat=${userInput1}&lon=${userInput2}&exclude=hourly,daily&appid=${apiKey}`
      }).then(
        (data) => {
            console.log(data);
            wordData = data;
            render();
        },
        (error) => {
            console.log('bad request', error);
        }
    );    
}

// const firstLetterUppercase = function(word) {
//     const firstLetter = word.charAt(0)
//     const firstLetterCap = firstLetter.toUpperCase()
//     const remainingLetters = word.slice(1)
//     const capitalizedWord = firstLetterCap + remainingLetters
//     return capitalizedWord;
// }

function render() {
    $word.text(wordData[0].meta.id);
    $def.text(wordData[0].shortdef[0]);
 }