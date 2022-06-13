"use strict";

const main = document.querySelector("main");
const calculatorDiv = document.createElement("div");
main.appendChild(calculatorDiv);
calculatorDiv.classList.add("calculator");

let calculatorTouch = ["", "%", "+/-", "C", "/", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+", "0", ",", "="];
for (let touchs in calculatorTouch) {
	const newButton = document.createElement("button");
	newButton.textContent = calculatorTouch[touchs];
	calculatorDiv.appendChild(newButton);
	newButton.classList.add(`ct${touchs}`);
	newButton.addEventListener("click", () => {
		newButton.style.backgroundColor = "black";
		newButton.style.color = "white";
		// let sum;
		// if(calculatorTouch[touchs] === "+")  sum+=;
		// if(calculatorTouch[touchs] === "-")  sum-=;
		// if(calculatorTouch[touchs] === "/")  sum/=;
		// if(calculatorTouch[touchs] === "x")  sum*=;
	});
}
// const displayCalcul = () => {};
