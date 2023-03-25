const startingWords = [
    "act", "add", "age", "aim", "air", 
    "and", "any", "ape", "arm", "art", 
    "ask", "ate", "axe", "bad", "bag", 
    "ban", "bar", "bat", "bay", "bed", 
    "bee", "beg", "bet", "big", "bin", 
    "bit", "boa", "bob", "bog", "boo", 
  
    "box", "boy", "bra", "bug", "bum", 
    "bus", "buy", "bye", "cab", "cam", 
    "can", "cap", "car", "cat", "cow", 
    "coy", "cry", "cub", "cup", "cut", 
    "dad", "dam", "day", "den", "dew", 
  
    "did", "dig", "dim", "dip", "dog", 
    "don", "dot", "dry", "due", "dug", 
    "dye", "ear", "eat", "egg", "ego", 
    "elf", "elm", "end", "era", "eve", 
    "eye", "fad", "fan", "far", "fat", 
  
    "fax", "fed", "fee", "few", "fib", 
    "fig", "fin", "fir", "fit", "fix", 
    "fly", "fog", "fox", "fun", "fur", 
    "gap", "gas", "gel", "gem", "get", 
    "gig", "gin", "got", "gum", "gun", 
  
    "gut", "guy", "gym", "had", "ham", 
    "hat", "hay", "hem", "hen", "her", 
    "hey", "hid", "him", "hip", "hit", 
    "hog", "hop", "hot", "how", "hub", 
    "hug", "hum", "hut", "ice", "icy", 
  
    "ill", "ink", "inn", "ion", "ire", 
    "ivy", "jaw", "jay", "jet", "jig", 
    "job", "jog", "joy", "jug", "jut", 
    "keg", "kid", "kin", "kit", "lab", 
    "lad", "lag", "lap", "law", "lay", 
  
    "led", "lee", "leg", "let", "lid", 
    "lie", "lip", "lit", "lob", "log", 
    "lot", "low", "lug", "lye", "mad", 
    "man", "map", "mat", "may", "men", 
    "met", "mid", "mix", "mob", "mom", 
  
    "moo", "mop", "mud", "mug", "mum", 
    "nap", "nay", "net", "new", "nip", 
    "nit", "nix", "nod", "non", "nor", 
    "not", "now", "nut", "oak", "oar", 
    "oat", "odd", "off", "oft", "oil", 
      
        "old", "one", "ooh", "opt", "orb",
        "ore", "our", "out", "ova", "owl", 
        "own", "pad", "pal", "pan", "par", 
        "pat", "paw", "pay", "pea", "peg", 
        "pen", "pep", "per", "pet", "pew", 
      
        "phi", "pic", "pie", "pig", "pin", 
        "pip", "pit", "ply", "pod", "pop", 
        "pot", "pow", "pro", "pry", "pub", 
        "pug", "pun", "pup", "put", "qua", 
        "rad", "rag", "ram", "ran", "rap", 
      
        "rat", "raw", "ray", "red", "ref", 
        "rib", "rid", "rig", "rim", "rip", 
        "rob", "rod", "roe", "rot", "row", 
        "rub", "rue", "rug", "rum", "run", 
        "rut", "rye", "sac", "sad", "sag", 
      
        "sal", "sap", "sat", "saw", "say", 
        "sea", "see", "set", "sew", "she", 
        "shy", "sin", "sip", "sir", "sis", 
        "sit", "six", "ski", "sky", "sly", 
        "sob", "sod", "son", "sop", "sow", 
      
        "soy", "spa", "spy", "sub", "sue", 
        "sum", "sun", "sup", "tab", "tad", 
        "tag", "tan", "tap", "tar", "tat", 
        "tax", "tea", "tee", "ten", "the", 
        "thy", "tic", "tie", "tin", "tip", 
      
        "toe", "tog", "ton", "too", "top", 
        "tot", "toy", "try", "tub", "tug", 
        "tun", "two", "ugh", "ump", "urn", 
        "use", "van", "vat", "vet", "vie", 
        "vow", "wad", "wag", "wan", "war", 
      
        "was", "wax", "way", "web", "wed", 
        "wee", "wet", "who", "why", "wig", 
        "win", "wit", "won", "woo", "wow", 
        "wry", "wye", "yak", "yam", "yap", 
        "yaw", "yea", "yen", "yep", "yes", 
      
        "yet", "yew", "yin", "yip", "yod", 
        "yon", "you", "yow", "yuk", "yum", 
        "zap", "zed", "zen", "zig", "zip", 
        "zit", "zoo"
];

const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
const vowels = ['a', 'e', 'i', 'o', 'u']


let wordData, prevWordData, currentWord, prevWord, userInput, userInput2, firstWord, whatCondition, countDownOver, turnCount, multiplier;
const apiKey = "43042ed6-27e0-4566-b859-05ce09dad7ed"

let twoToFourArray;
let score, highScore;

const $word = $('#word');
const $def = $('#def');
const $defTitle = $('#defTitle');
const $defPair = $('.defPair')
const $input = $('.text1');
const $score = $('#score')
const $scoreAdder = $('#scoreAdder');
const $multiplier = $('#multiplier')
const $highScore = $('#highScore')
const $pass = $('#pass')
let condition = document.getElementById('condition');
// const $input2 = $('.text2');

//START-UP
startingConditions(1);


$('form').on('submit', handleGetData);

function startingWord() {
    firstWord = getRandomElement(startingWords, 1)
    prevWord = firstWord;
    $word.text(firstLetterUppercase(firstWord))
}

function startingConditions(e) {
  //1 = On startup
  //2 = Just passed
  //3 = New Game, keep high score on screen
  clearUserInput();
  $defPair.hide()
  $pass.hide();
  // $pass.show();
  startingWord();
  twoToFourArray = [2, 3, 4]
  twoToFourArray.sort(randomSort)
  console.log(twoToFourArray);
  multiplier = 1;
  turnCount = 1;
  turnCountChecker();
  if(e === 1) { //1 = On startup
    countDownOver = false;
    $("#reset").hide()
    countDown();
    score = 0;
    highScore = 0;
  }
  if(e === 2) { //2 = Just passed
    console.log(`Just Passed`)
    // $scoreAdder.fadeOut()
  }
  if(e === 3) { //3 = New Game, keep high score on screen
    countDownOver = false;
    $("#reset").hide()
    $("#endGame").show()
    countDown();
    console.log(`reset 3 has been entered`)
    if(score > highScore) {
      highScore = score;
      // localStorage.setItem(highScore, highScore)
    }
    score = 0;
  }
  updateScore();
}

function clearUserInput() {
    let userInputRef = document.querySelector('input')
    userInputRef.value = ""
}

function handleGetData(event) {
    event.preventDefault();
       // calling preventDefault() on a 'submit' event will prevent a page refresh  
    userInput = $input.val();
      // getting the user input
    $.ajax({
        url:`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${userInput}?key=${apiKey}`

      }).then(
        (data) => {
            if(!countDownOver) {
            console.log(data);
            wordData = data;
            currentWord = removeAfterColon(wordData[0].meta.id)
            if (turnDecider()) {
            render();
            prevWordData = wordData
            prevWord = removeAfterColon(prevWordData[0].meta.id)
            clearUserInput();
            turnCount++;
            if (turnCount === 4) {
              turnCount = 1;
              twoToFourArray = [2, 3, 4]
              twoToFourArray.sort(randomSort);
            }
            turnCountChecker();
          } else if (currentWord === prevWord) {
            wrong(3)
          } else {
            wrong(1)
          }
        }
        },
        (error) => {
            wrong(2)
            console.log('bad request', error);
            
        }
    );    
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
  }

function getRandomElement(arr, e) {
  const randomI = getRandomInt(0, arr.length-1);
  console.log(`random int is ` + randomI);
  if (e === 1) {
  return arr[randomI];
  } else {
    return randomI;
  }
 }

function firstLetterUppercase(word) {
    const firstLetter = word.charAt(0)
    const firstLetterCap = firstLetter.toUpperCase()
    const remainingLetters = word.slice(1)
    const capitalizedWord = firstLetterCap + remainingLetters
    return capitalizedWord;
}

function removeAfterColon(str) {
    const colonIndex = str.indexOf(":");
    if (colonIndex !== -1) {
      return str.slice(0, colonIndex);
    } else {
      return str;
    }
  }
  
  function countDown() {
    // countDownOver = false;
    let seconds = 121;
    const countDownEl = document.getElementById("timer");
  
    const intervalId = setInterval(() => {
      if (seconds === 0 || countDownOver) {
        countDownOver = true;
        console.log(countDownOver)
        clearInterval(intervalId);
        countDownEl.innerHTML = "Time's up!";
        $pass.hide()
        $('#endGame').hide()
        $("#reset").show()
      } else {
        seconds--;
        countDownEl.innerHTML = `${seconds} seconds`;
      }
    }, 1000);
  }


function render() {
    $pass.show();
    $word.text(firstLetterUppercase(currentWord));
    $defPair.show()
    $defPair.css("color", "black")
    $def.text(wordData[0].shortdef[0]);
    $defTitle.text("Definition")
    $scoreAdder.fadeIn();
    $score.text(scoreAdder())
    $multiplier.text(`${multiplier}x`)
 }

 function scoreAdder() {
    let scoreAdded = 100*multiplier
    $scoreAdder.fadeIn()
    $scoreAdder.text(`+${scoreAdded}`)
    $scoreAdder.fadeOut()
    score+=scoreAdded;
    multiplier++;
    return score;
 }

 function updateScore() {
  $score.text(score)
  $highScore.text(highScore)
  $multiplier.text(`${multiplier}x`)

 }

function randomSort(a, b) {
  return 0.5 - Math.random();
}

function turnDecider() {
  if (turnCount === 1) {
    return checkConditions(1)
  } else {
    return checkConditions(whatCondition)
  }
}

function checkConditions(e) {
  if (e === 1) {
    return checkWordLonger()
  } else if (e === 2) {
    return checkMoreConsonants()
  } else if (e === 3) {
    return checkMoreVowels() 
  } else if (e === 4) {
    return moreMostFrequentLetter()
  }
}

// function actualWord(word) {
//   return removeAfterColon(word[0].meta.id)
// }

function howMany(word, e) {
  let letterCount = 0;
  if (e === 1) { //consonants
    for(let i = 0; i < word.length; i++) {
      if(consonants.includes(word.charAt(i).toLowerCase())) {
        letterCount++;
      }
    }
  }
  if (e === 2) { //vowels
    for(let i = 0; i < word.length; i++) {
      if(vowels.includes(word.charAt(i).toLowerCase())) {
        letterCount++;
      }
    }
  }
  return letterCount
}

function checkWordLonger() {
  console.log(currentWord)
  console.log(prevWord)
  if ((currentWord.length > prevWord.length) &&
 (currentWord.charAt(0).toLowerCase() === prevWord.charAt(0).toLowerCase())) {
  console.log(`returned true`)
  return true;
 } else {
  console.log(`returned false`)
  return false;
 }
}

function checkMoreConsonants() {
  console.log(currentWord)
  console.log(prevWord)
  if (howMany(currentWord, 1) > 
  howMany(prevWord, 1) &&
 currentWord.charAt(0).toLowerCase() === prevWord.charAt(0).toLowerCase()) {
  console.log(`returned true`)
  return true;
 } else {
  console.log(`returned false consonants`)
  return false;
 }
}

function checkMoreVowels() {
  console.log(currentWord)
  console.log(prevWord)
  console.log(howMany(currentWord, 2))
  console.log(howMany(prevWord, 2))
  if (howMany(currentWord, 2) > 
  howMany(prevWord, 2) &&
 currentWord.charAt(0).toLowerCase() === prevWord.charAt(0).toLowerCase()) {
  console.log(`returned true`)
  return true;
 } else {
  console.log(`returned false vowels`)
  return false;
 }
}

  function mostFrequentLetter(word) {
    const letterFrequency = {};
    let letterData = {};

    for (let i = 0; i < word.length; i++) {
      const letter = word[i].toLowerCase();
      if (letterFrequency[letter]) {
        letterFrequency[letter]++;
      }
      else {
        letterFrequency[letter] = 1;
      }
    }

    let mostFrequentLetter;
    let highestFrequency = 0;
    for (const letter in letterFrequency) {
      if (letterFrequency[letter] > highestFrequency) {
        mostFrequentLetter = letter;
        highestFrequency = letterFrequency[letter];
      }
    }

    letterData = {
      lettersAndFrequency: letterFrequency,
      letter: mostFrequentLetter,
      letterFrequency: highestFrequency
    }

    return letterData;
  }
  

function moreMostFrequentLetter() {
  const letterToBeat = mostFrequentLetter(prevWord).letter;
  console.log(`letter to beat is ` + letterToBeat)

  if (mostFrequentLetter(currentWord).lettersAndFrequency[letterToBeat] > mostFrequentLetter(prevWord).letterFrequency) {
    console.log(`returned true`)
    return true;
  } else {
    console.log(`returned false most frequent`)
    return false;
  }
}
function turnFourOrNot() {
  if (mostFrequentLetter(currentWord).letterFrequency > 1) {
    console.log(`returned true turnfourornot`)
    return true;
  } else {
    return false;
  }
}
function turnCountChecker() {
  const randomNum = getRandomInt(2, 3);
  if (turnCount === 1) { //||
    // (whatCondition === 4 && !turnFourOrNot && randomNum === 1)) {
    // whatCondition = 1;
    condition.innerHTML = `Give me a word that <span> starts with the same letter </span> but is <span> longer </span>`
    console.log(`It is scenario 1`)
  } else {
      console.log(twoToFourArray)
      whatCondition = twoToFourArray.pop()
      if (whatCondition === 2 || 
        (whatCondition === 4 && !turnFourOrNot() && randomNum === 2)) {
        whatCondition = 2;
        condition.innerHTML = `Give me a word that <span> starts with the same letter </span> but <span> has more consonants </span>`
        console.log(`It is scenario 2`)
    } else if (whatCondition === 3 ||
        (whatCondition === 4 && !turnFourOrNot() && randomNum === 3)) {
        whatCondition = 3;
        condition.innerHTML = `Give me a word that <span> starts with the same letter </span> but <span> has more vowels </span>`
        console.log(`It is scenario 3`)
    } else if (whatCondition === 4 && turnFourOrNot()) {
        condition.innerHTML = `Give me a word that <span> has more ${(mostFrequentLetter(currentWord).letter).toUpperCase()}'s </span> in it`
        console.log(`It is scenario 4`)
    }
  }
}


function wrong(e) {
  $defPair.show()
  let reason = ""
  $defTitle.text(`Wrong:`)
  $defPair.css("color", "red");
  if (e === 1) {
    reason = `"${firstLetterUppercase(currentWord)}" doesn't fulfill the conditions`
  } else if (e === 2) {
    reason = "Not a word. Did you spell it right?"
  } else {
    reason = "Same word!"
  }
  $def.text(reason)
}

function endGame() {
  countDownOver = true;
  countDown();
  
}
