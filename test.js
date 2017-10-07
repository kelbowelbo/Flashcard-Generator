var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

var bc1 = new BasicCard("Who is the 16th president of the USA?", "Abraham Lincoln");
console.log(bc1);

var bc2 = BasicCard("Who is the 16th president of the USA?", "Abraham Lincoln");
console.log(bc2);

var cc1 = new ClozeCard("Abraham Lincoln was the 16th president of the USA.", "Abraham Lincoln");
console.log(cc1);

var cc2 = ClozeCard("Abraham Lincoln was the 16th president of the USA.", "Axl Rose");
console.log(cc2);