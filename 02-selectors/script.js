/*
 */
const important = document.querySelectorAll(".important");
important.forEach((el) => {
	el.setAttribute("title", "This is an important item");
});

const tagsImg = document.querySelectorAll("img");
tagsImg.forEach((el) => {
	if (!el.classList.contains("important")) el.style.display = "none";
});

const paragraphs = document.querySelectorAll("p");
paragraphs.forEach((el) => {
	let x = Math.trunc(Math.random() * 256);
	let y = Math.trunc(Math.random() * 256);
	let z = Math.trunc(Math.random() * 256);
	let bgColor = `rgb( ${x} , ${y}, ${z})`;
	console.log(el);
	if (!el.classList.contains("important")) el.style.background = bgColor;
});
