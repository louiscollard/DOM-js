const _initTime = Date.now();

const getElapsedTime = () => {
	return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s";
};

const displayedSquareWrapper = document.querySelector(".displayedquare-wrapper");
const body = document.querySelector("body");
const ul = document.querySelector("ul");
const green = document.querySelector(".green");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
let newLi;

const clickOnSquare = (e) => {
	console.log(e.target.classList[1]);
	console.log(getElapsedTime());
	if (e.target.classList[1] === "green") {
		const newDiv = document.createElement("div");
		newDiv.style.display = "inline-block";
		newDiv.classList.add("displayedsquare", "green");
		displayedSquareWrapper.appendChild(newDiv);
		newLi = document.createElement("li");
		ul.appendChild(newLi);
		newLi.textContent = `[${getElapsedTime()}] Created a new green square`;
	} else if (e.target.classList[1] === "violet") {
		const newDiv = document.createElement("div");
		newDiv.style.display = "inline-block";
		newDiv.classList.add("displayedsquare", "violet");
		displayedSquareWrapper.appendChild(newDiv);
		newLi = document.createElement("li");
		ul.appendChild(newLi);
		newLi.textContent = `[${getElapsedTime()}] Created a new violet square`;
	} else {
		const newDiv = document.createElement("div");
		newDiv.style.display = "inline-block";
		newDiv.classList.add("displayedsquare", "orange");
		displayedSquareWrapper.appendChild(newDiv);
		newLi = document.createElement("li");
		ul.appendChild(newLi);
		newLi.textContent = `[${getElapsedTime()}] Created a new orange square`;
	}
};

const actionSquares = document.querySelectorAll(".actionsquare");
for (let actionSquare of actionSquares) {
	actionSquare.addEventListener("click", clickOnSquare);
}

body.addEventListener("keydown", (e) => {
	console.log(e.key);
	if (e.key === " ") {
		let r = Math.trunc(Math.random() * 256);
		let g = Math.trunc(Math.random() * 256);
		let b = Math.trunc(Math.random() * 256);
		let bgColor = `rgb( ${r} , ${g}, ${b})`;
		body.style.background = bgColor;
		newLi = document.createElement("li");
		ul.appendChild(newLi);
		newLi.textContent = `[${getElapsedTime()}] Created a new background`;
	} else if (e.key === "l") {
		while (ul.hasChildNodes()) {
			ul.removeChild(ul.firstChild);
		}
	} else if (e.key === "s") {
		while (displayedSquareWrapper.hasChildNodes()) {
			displayedSquareWrapper.removeChild(displayedSquareWrapper.firstChild);
		}
	}
});
