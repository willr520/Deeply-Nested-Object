const slotMachine = {
  premise: "You need to land a successive number of any given symbol/payline (3) to win",
  inventor: "Charles Fey",
  inventedYear: 1894,
  name: "fruit machine",
  currency: "usd",
  currentJackpot: 1000,
  timeToSpin: 10000,
  loseSoundDescription: "three-ping defeat",
  winSoundDescription: "three-pings, jittering fall of coins",
  parts: [
    "reel",
    "payout tray",
    "winning line",
    "coin reject slot",
    "symbol",
    "lever",
    "coin slot",
    "casing",
    "jackpot feed",
    "electrical payout linkage",
    "strongbox",
    "jackpot box",
    "coin chute",
    "spring linkage",
    "reel plate",
    "payout trigger",
  ],
  symbols: {
    traditional: ["hearts", "clubs", "diamonds", "spades"],
    modern: [
      "images/lucky7.png",
      "images/bar.png",
      "images/libertybell.png",
      "images/banana.png",
      "images/watermelon.png",
      "images/lemon.png",
      "images/orange.png",
      "images/plum.png",
      "images/cherry.png",
    ],
  },
  specialSymbols: ["wild", "scatter", "bonus", "stacked", "sticky"],
  leverPull: true,
  amountEntered: 25,
  location: [
    "casino",
    "online",
    "pub",
    "amusement arcade",
    "leisure facility",
    "motorway service",
  ],

  spin: function () {
    if (this.leverPull == true) {
      console.log("spinning");
    } else {
      console.log("do nothing");
    }
  },
  play: function (amountEntered) {
    console.log(amountEntered + " has been entered");
    this.spin();
    const symbolsAppear = this.symbols.modern;
    const randomSymbolsAppear = [];
    for (let i = 0; i < 3; i++) {
      const randomSymbols = Math.floor(Math.random() * symbolsAppear.length);
      randomSymbolsAppear.push(symbolsAppear[randomSymbols]);
    }
    console.log(randomSymbolsAppear);
    const locationAppear = this.location;
    const randomLocationAppear = [];
    for (let i = 0; i < 1; i++) {
        const randomLocation = Math.floor(Math.random() * locationAppear.length);
        randomLocationAppear.push(locationAppear[randomLocation])
    }
    console.log(randomLocationAppear);
  },
  reasonsToPlay: [
    "thrill",
    "flashing light display",
    "arcade sounds",
    "guaranteed high jackpot",
    "widely available (casinos, pubs, amusement arcades, leisure facilities, motorway service stations)",
    "play is rapid",
    "unrealistic expectations",
    "mental change becoming less of winning and more about act of playing (need to keep playing)",
    "play faster than any other game (500 spins or more each hour)",
    "lack of awareness of time spent playing",
    "no windows in a casino",
  ],
  harms: [
    "promote same cognitive dissonance that for example smokers experience (dissociate from evidence that it is harmful)",
    "designed to offer small rewards to keep players coming back and back, increasing dopamine and activate reward system inside of brain",
    "play into human desire to gain control despite inherent uncertainty (buttons and levers make people feel as if they are in control)",
    "visual and audio cues create memories that keep you coming back",
    "math of game ensure casinos generate consistent positive win for themselves",
    "casinos make between 65 to 80 percent of their income form slots"
  ],
}

const symbols = slotMachine.symbols.modern;
const machine = document.getElementById("slot-machine");

function createSymbol() {
  const symbol = document.createElement("img");
  const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
  symbol.src = randomSymbol;
  symbol.classList.add("symbol");

  symbol.style.left = Math.random() * (machine.offsetWidth - 50) + "px";
  machine.appendChild(symbol);

  let topPosition = 0;
  const animation = setInterval(() => {
      if (topPosition >= machine.offsetHeight) {
          topPosition = -50; 
          symbol.style.left = Math.random() * (machine.offsetWidth - 50) + "px"; 
      }
      topPosition += 1; 
      symbol.style.top = topPosition + "px";
  }, 10); 
}

function startSlotMachine() {
  setInterval(createSymbol, 1000); 
}


startSlotMachine();



const lever = document.getElementById("lever");
const displayPhrase = document.getElementById("displayPhrase")
const reasonsToPlay = slotMachine.reasonsToPlay;

lever.addEventListener("click", function(){

  lever.classList.add("lever-rotate");
  setTimeout(() => {
    lever.classList.remove("lever-rotate");
  }, 300);
  const randomIndex = Math.floor(Math.random() * reasonsToPlay.length);
  const randomPhrase = reasonsToPlay[randomIndex];
  displayPhrase.innerText = randomPhrase;
})


