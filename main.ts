/**
 * @author Miles Aube
 * @version 1.0.0
 * @date 2025-12-01
 * @fileoverview This program that ask user for name and age then returns that info
 */

// variables
let userName: string;
let ageAsString: string;
let ageAsNumber: number;
let ageFiveYearsAgo: number;

// input
userName = prompt("What is your name?") || "No name entered!";
ageAsString = prompt("How old are you?") || "-1";

// process
ageAsNumber = parseInt(ageAsString);
ageFiveYearsAgo = ageAsNumber - 5;

// output
console.log("\n");
console.log("Hello, " + userName + "!");
console.log("You are " + ageAsNumber + " years old.");
console.log(
  "Five years ago, you were " + ageFiveYearsAgo.toString() + " years old."
);
