"use strict";

const bg = document.querySelector("#bg");
const nameing1 = document.querySelector("#name1");
const nameing2 = document.querySelector("#name2");
const btn = document.querySelector(".btn");

const valueList = [
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
];
let arr = [];
btn.addEventListener("click", () => {
	for (let i = 0; i < 6; i++) {
		const randomNumber = Math.floor(Math.random() * valueList.length);
		arr += valueList[randomNumber];
	}
	bg.style.backgroundColor = `#${arr}`;
	nameing1.innerText = `Hex color code is: #${arr}`;
	nameing2.innerText = `RGB color code is: ${bg.style.backgroundColor}`;
	arr = [];
});

// btn.addEventListener("click", () => {
// 	for (let i = 0; i < 6; i++) {
// 		const randomNumber = Math.floor(Math.random() * valueList.length);
// 		arr += valueList[randomNumber];
// 		bg.style.backgroundColor = `#${arr}`;
// 		nameing.innerText = `Color code is: #${arr}`;
// 	}
// 	arr = [];
// });

//!this is generating a loop for 6 times hence unnecessary load on browser is there ,top code is better with no loop generated
