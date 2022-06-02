/*
 */
const article = document.querySelector("article");
const section = document.createElement("section");
article.appendChild(section);

let learners = [
	"Melih",
	"Dylan",
	"Semih",
	"Marlène",
	"Louis",
	"Olivier",
	"Julien",
	"Henri",
	"Mehdi",
	"Lydia",
	"Steeve",
	"Tanguy",
	"Anaïs",
	"Mariya",
	"Nicolas",
	"Latifa",
	"Arthur",
	"Duc",
	"Dorian",
	"Quentin",
	"Antoine",
	"Miguel",
	"Kevin",
	"Sebastien",
];

const randomizeArr = (arr) => {
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
	return arr;
};
const randArr = randomizeArr(learners);
// randomizeArr(learners);

for (let i of randArr) {
	let x = Math.trunc(Math.random() * 256);
	let y = Math.trunc(Math.random() * 256);
	let z = Math.trunc(Math.random() * 256);
	let bgColor = `rgb( ${x} , ${y}, ${z})`;
	const tag = document.createElement("p");
	const text = document.createTextNode([i]);
	section.appendChild(tag);
	tag.appendChild(text);
	tag.style.background = bgColor;
	if (0.3 * x + 0.5 * y + 0.11 * z <= 128) {
		tag.style.color = "white";
	} else {
		tag.style.color = "black";
	}
}
