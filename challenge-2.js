/* Challenge 2: Count Vowels */

/* Write a JavaScript function called **`countVowels`** that takes a string as input and counts the number of vowels (a, e, i, o, u) in the string. The function should return the count.

Implement the **`countVowels`** function using either the provided example solutions or your own solution. */

function countVowels(wordInput) {
    // Create String That Includes Vowels
    const vowels = "aeiou";

    // Convert String To Array In Order To Use Filter
    wordInput = Array.from(wordInput);

    // Return a New Array From Filter That Includes The Vowels In The String
    // Use The Length Method To Return The Number Of Vowels Included
    return wordInput.filter((letter) => vowels.includes(letter)).length;
}


const input = 'Hello, World!';

console.log(countVowels(input)); // Output: 3

const word = 'Counting Vowels';

console.log(countVowels(word)); // Output: 5