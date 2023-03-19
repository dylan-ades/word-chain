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

let wordData, userInput, userInput2, firstWord;
const apiKey = "43042ed6-27e0-4566-b859-05ce09dad7ed"

const $word = $('#word');
const $def = $('#def');
const $input = $('.text1');
// const $input2 = $('.text2');

$("button").hide()

startingWord();
$('form').on('submit', handleGetData);

function startingWord() {
    firstWord = startingWords[getRandomInt()]
    $word.text(firstLetterUppercase(firstWord))
}

function handleGetData(event) {
    event.preventDefault();
       // calling preventDefault() on a 'submit' event will prevent a page refresh  
    userInput = $input.val();
    userInputRef = document.querySelector('input')
      // getting the user input
    $.ajax({
        url:`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${userInput}?key=${apiKey}`

      }).then(
        (data) => {
            console.log(data);
            wordData = data;
            render();
            userInputRef.value = ""
        },
        (error) => {
            console.log('bad request', error);
        }
    );    
}

function getRandomInt() {
    return Math.floor(Math.random() * 397);
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
  
  function countdown() {
    let seconds = 31;
    const countdownEl = document.getElementById("timer");
  
    const intervalId = setInterval(() => {
      if (seconds === 0) {
        clearInterval(intervalId);
        countdownEl.innerHTML = "Time's up!";
        $("button").show();
      } else {
        seconds--;
        countdownEl.innerHTML = `${seconds} seconds`;
      }
    }, 1000);
  }
  countdown();

function render() {
    $word.text(firstLetterUppercase(removeAfterColon(wordData[0].meta.id)));
    $def.text(wordData[0].shortdef[0]);
 }
 console.log(startingWords.length)

 function resetGame() {
  location.reload();
}
