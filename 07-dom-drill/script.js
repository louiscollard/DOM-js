"use strict";

const ul = document.querySelector("ul");
const li = ul.children;

for (let i = 0; i < li.length && li[i].nodeType === 1; i++) {
	if (li[i].textContent === "Fast and Furious") {
		li[i].classList.add("important");
		ul.insertBefore(li[i], ul.firstElementChild);
	}
}

for (let j = 0; j < li.length; j++) {
	li[j].addEventListener("click", () => {
		if (li[j].textContent === "Fast and Furious") {
			alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.");
		} else {
			alert(li[j].textContent);
		}
	});
}
