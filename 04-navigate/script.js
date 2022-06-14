/*
 */
/******************** 4.1 ********************/

const ol = document.querySelector("ol");
const olFirstChild = ol.children[0];
const olLastChild = ol.lastElementChild;
const olInvertLastAndFirst = ol.insertBefore(olLastChild, olFirstChild);

/******************** 4.2 ********************/

const section = document.querySelector("section");
const thirdSection = section.nextElementSibling;
let thirdTitle = thirdSection.firstElementChild;
const secondSection = thirdSection.nextElementSibling;
let secondTitle = secondSection.firstElementChild.firstElementChild;
secondSection.appendChild(thirdTitle);
thirdSection.appendChild(secondTitle);

/******************** 4.3 ********************/

secondSection.removeChild(thirdTitle);
