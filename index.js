// 1. Find the last solutions to each problems
const arr1 = [3,7,34,90,12];
console.log(arr1.at(-1));

const arr2 = [true, "green", "where",12,56];
console.log(arr2.at(-1));


// 2. Join array elements into a string:
const myPets = ["Cow", "Bird", "Snake", "Dog"];
console.log(myPets.join(" ")); 

// 3. sorting the array
var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
arr3.sort((a, b) => a - b);
console.log(arr3); 


// 4. Removing duplicates and finding the duplicates
let arr = ["boy", "man", "girl", "school", "girl", "woman"];
const frequency = {};
const nonFrequent = [];
const duplicates = [];

arr.forEach(item => {
    if (frequency[item]) {
        frequency[item]++;
        if (frequency[item] === 2) duplicates.push(item);
    } else {
        frequency[item] = 1;
        nonFrequent.push(item);
    }
});

console.log("Unique:", nonFrequent);
console.log("Duplicates:", duplicates);


// 5. search for a word in array
let arr5 = ["the", "way", "x", 4];
const searchWord = arr5.includes("food") ? "Food" : "The search word was not found";
console.log(searchWord); 


// 6. Soring a string
let word = "renniw";
const sortedWord1 = word.split("").sort().join("");
console.log("Sorted:", sortedWord1);



// 7. Insert "Tomato" at the 5th index:
let fruits = ["apple", "banana", "cherry", "mango", "blueberry", "pineapple", "grape", "orange", "kiwi", "lemon"];
fruits1.splice(5, 0, "Tomato");
console.log({"Fruits:": fruits});
