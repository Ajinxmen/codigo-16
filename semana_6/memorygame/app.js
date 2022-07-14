const cardArray = [
	{
		name: "fries",
		img: "images/fries.png",
	},
	{
		name: "cheeseburger",
		img: "images/cheeseburger.png",
	},
	{
		name: "hotdog",
		img: "images/hotdog.png",
	},
	{
		name: "ice-cream",
		img: "images/ice-cream.png",
	},
	{
		name: "milkshake",
		img: "images/milkshake.png",
	},
	{
		name: "pizza",
		img: "images/pizza.png",
	},
	{
		name: "fries",
		img: "images/fries.png",
	},
	{
		name: "cheeseburger",
		img: "images/cheeseburger.png",
	},
	{
		name: "hotdog",
		img: "images/hotdog.png",
	},
	{
		name: "ice-cream",
		img: "images/ice-cream.png",
	},
	{
		name: "milkshake",
		img: "images/milkshake.png",
	},
	{
		name: "pizza",
		img: "images/pizza.png",
	},
];

// Barajamos las cartas aleatoriamente:
cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");

let cardsChosen = [];

function checkForMatch(){
    console.log("check for match");
	if(cardsChosen[0] == cardsChosen[1]){
		alert("Match!");
	}
	cardsChosen = [];


}

function createBoard() {
	for (let i = 0; i < cardArray.length; i++) {
		const card = document.createElement("img");
		card.setAttribute("src", "images/blank.png");
		card.setAttribute("data-id", i);
        card.addEventListener('click', flipCard);
		gridDisplay.append(card);
	}
}

createBoard();

function flipCard(){
    let cardId = this.getAttribute("data-id");
    this.setAttribute("src", cardArray[cardId].img);
    cardsChosen.push(cardArray[cardId].name);
    // console.log(cardsChosen);

    if(cardsChosen.length === 2){
        setTimeout(checkForMatch, 500);
    }
    // console.log(cardArray[cardId].name);
    // console.log('clicked', cardId);
}