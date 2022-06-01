/*
 */
console.log(document.title);
document.title = "Modifying the DOM";
const randomBg = () => {
	let x = Math.trunc(Math.random() * 256);
	let y = Math.trunc(Math.random() * 256);
	let z = Math.trunc(Math.random() * 256);
	let bgColor = `rgb( ${x} , ${y}, ${z})`;
	return bgColor;
};
document.body.style.backgroundColor = randomBg();
const bodyElement = document.querySelector("body");
for (const childrens of bodyElement.children) {
	console.log(childrens);
}
