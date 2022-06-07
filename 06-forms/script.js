/*
 */

/************** 6.1 ***************/

const firstName = document.getElementById("firstname");
let displayFirstName = document.getElementById("display-firstname");

firstName.addEventListener("keyup", (e) => {
	displayFirstName.textContent += e.key;
});

/************** 6.1 ***************/

const age = document.getElementById("age");
const hardTruth = document.getElementById("a-hard-truth");

age.addEventListener("keyup", (e) => {
	if (e.key >= "18") {
		hardTruth.style.visibility = "visible";
	} else {
		hardTruth.style.visibility = "hidden";
	}
});

/************** 6.3 ***************/
