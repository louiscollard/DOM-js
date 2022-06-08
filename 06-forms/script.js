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

age.addEventListener("keyup", () => {
	if (Number(age.value) >= 18) {
		hardTruth.style.visibility = "visible";
	} else {
		hardTruth.style.visibility = "hidden";
	}
});

/************** 6.3 ***************/

const pwd = document.getElementById("pwd");
const pwdConfirm = document.getElementById("pwd-confirm");

pwd.addEventListener("keyup", () => {
	if (pwd.value.length < 6) {
		pwd.style.background = "red";
	} else {
		pwd.style.background = "white";
	}
});

pwdConfirm.addEventListener("keyup", () => {
	if (pwd.value !== pwdConfirm.value) {
		pwdConfirm.style.background = "red";
	} else if (pwd.value === pwdConfirm.value) {
		pwdConfirm.style.background = "green";
	} else {
		pwdConfirm.style.background = "white";
	}
});

/************** 6.4 ***************/

const toggleMode = document.getElementById("toggle-darkmode");

toggleMode.addEventListener("change", () => {
	switch (toggleMode.value) {
		case "dark":
			document.body.style.background = "black";
			document.body.style.color = "white";
			break;
		case "light":
			document.body.style.background = "white";
			document.body.style.color = "black";
			break;
	}
});
