/*
Find if a number is even or not. 
Write a program that generates a random number between 1 and 10 (both inclusive). 
If the random number is even, print true. 
Otherwise, print false.
 
Examples: 
1   -> false 
2   -> true 
5   -> false 
10   -> true 
*/

let num1 = Math.floor(Math.random() * 10) + 1;

eNum = num1 % 2 === 0;

eNum ? console.log(true) : console.log(false);


/*
Find if a number is odd or not. 
Write a program that generates a random number between 1 and 10 (both inclusive). 
If the random number is odd, print true. 
Otherwise, print false. 
 
Examples: 
1   -> true 
2   -> false 
5   -> true 
10   -> false
*/

num2 = Math.floor(Math.random() * 10) + 1;
oNum = num2 % 2 !== 0;

if (oNum) {
    console.log(false);
} else {
    console.log(true);
}

if (oNum) console.log(false);
else console.log(true);



/*
Find if a number is positive or not. 
Write a program that generates a random number between -5 and 5 (both inclusive). 
If the random number is positive, print true. 
Otherwise, print false. 
 
Examples: 
-5   -> false 
-1   -> false 
0   -> false 
1   -> true 
5   -> true 
*/

let pNum = Math.floor(Math.random() * 11) - 5;
console.log(pNum)

if(pNum > 0){
    console.log(true)
} else{
    console.log(false)
}



/* Find if a number is divisible by 5 or not. 
Write a program that generates a random number between 1 and 50 (both inclusive). 
If the random number is divisible by 5, print true. 
Otherwise, print false. 
 
Examples: 
1   -> false 
5   -> true 
20   -> true 
37   -> false 
50   -> true
*/

let rnd = Math.floor(Math.random() * 50) + 1;
console.log(rnd);

if(rnd % 5 === 0) console.log(true);
else console.log(false);


/*
Find if a number is divisible by 7 or not. 
Write a program that generates a random number between 1 and 50 (both inclusive). 
If the random number is divisible by 7, print true. 
Otherwise, print false. 
 
Examples: 
1   -> false 
7   -> true 
35   -> true 
49   -> true 
50   -> false
*/

let rnd1 = Math.floor(Math.random() * 50) + 1;
console.log(rnd1);

rnd1 % 7 === 0 ? console.log(true) : console.log(false);


/*
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
Calculate the sum of the numbers and print it. 
 
Examples: 
3, 5     -> 8 
7, 3    -> 10 
5, 5     -> 10 
1, 10     -> 11 
10, 1     -> 11
*/

let n1 = Math.floor(Math.random() * 10) + 1;
let n2 = Math.floor(Math.random() * 10) + 1;
let sum = n1 + n2

console.log(n1);
console.log(n2);
console.log(sum);


/*
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
Calculate the absolute difference of the numbers and print it. 
 
Examples: 
3, 5     -> 2 
7, 3    -> 4 
5, 5     -> 0 
1, 10     -> 9 
10, 1     -> 9
*/

let n3 = Math.floor(Math.random() * 10) + 1
let n4 = Math.floor(Math.random() * 10) + 1
let abs = Math.abs(n3 - n4);

console.log(n3);
console.log(n4);
console.log(abs);


/*
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
Calculate the product of the numbers and print it. 
 
Examples: 
3, 5     -> 15 
7, 3    -> 21 
5, 5     -> 25 
1, 10     -> 10 
10, 1     -> 10
*/

let n5 = Math.floor(Math.random() * 10) + 1;
let n6 = Math.floor(Math.random() * 10) + 1;
let prd = n5 * n6;

console.log(n5);
console.log(n6);
console.log(prd);


/*
Write a program that generates a random number between 1 and 10 (both inclusive). 
Calculate the square of the number and print it. 
 
Examples: 
1   -> 1 
2   -> 4 
5   -> 25 
10   -> 100
*/

let n7 = Math.floor(Math.random() * 10) + 1;
let sqr = n7 ** 2;

console.log(n7);
console.log(sqr);


/*
Write a program that generates a random number between 1 and 10 (both inclusive). 
Calculate the cube of the number and print it. 
 
Examples: 
1   -> 1 
2   -> 8 
5   -> 125 
10   -> 1000
*/

let n8 = Math.floor(Math.random() * 10) + 1;
let cbe = n8 ** 3;

console.log(n8);
console.log(cbe);


/*
Write a program that generates a random number between 1 and 10 (both inclusive) to be considered 
as a mile unit. 
Convert miles unit to kilometers and print it. 
Please assume that 1 mile equals 1.6 kilometers. 
 
Examples: 
1   -> 1.6 
2   -> 3.2 
5   -> 8 
*/

let miles = Math.floor(Math.random() * 10) + 1;
let kilo = miles * 1.6;

console.log(miles);
console.log(kilo);


/*
Write a program that generates a random number between 1 and 100 (both inclusive) to be considered 
as a kilogram unit. 
Convert kilogram unit to pounds and print it. 
Please assume that 1 kilogram equals 2.2 pounds. 
 
Examples: 
1   -> 2.2 
20   -> 44 
75   -> 165 
100   -> 220 
*/

let kilo1 = Math.floor(Math.random() * 100) + 1;
let pnd = kilo1 * 2.2;

console.log(kilo1);
console.log(pnd);


/*
Write a program that generates 2 random numbers between 1 and 3 (both inclusive). 
If the numbers are equal, print true. 
Otherwise, print false. 
 
 
Examples: 
1, 1     -> true 
1, 2    -> false 
2,3     -> false 
2,2     -> true 
3, 3     -> false
*/


let grd1 = Math.floor(Math.random() * 3) + 1;
let grd2 = Math.floor(Math.random() * 3) + 1;

console.log(grd1);
console.log(grd2);

if(grd1 === grd2) console.log(true);
else console.log(false);


/*
Write a program that generates a random number between 1 and 100 (both inclusive) to be considered 
as an age. 
If the age is more than or equal to 16, print true. 
Otherwise, print false. 
 
Examples: 
1   -> false 
15   -> false 
16   -> true 
45   -> true 
100   -> true
*/

let age = Math.floor(Math.random() * 100) + 1;
console.log(age);

if(age >= 16) console.log(true)
else console.log(false);


/*
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
Find the greatest of the numbers and print it. 
 
Examples: 
3, 5     -> 5 
7, 3    -> 7 
5, 5     -> 5 
1, 10     -> 10 
10, 1     -> 10
*/

let numb1 = Math.floor(Math.random() * 10) + 1;
let numb2 = Math.floor(Math.random() * 10) + 1;
let gNum = Math.max(numb1, numb2);

console.log(numb1, numb2);
console.log(gNum);


/*
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
Find the smallest of the numbers and print it. 
 
Examples: 
3, 5     -> 3 
7, 3    -> 3 
5, 5     -> 5 
1, 10     -> 1 
10, 1     -> 1
*/

let numb3 = Math.floor(Math.random() * 10) + 1;
let numb4 = Math.floor(Math.random() * 10) + 1;
let sNum = Math.min(numb3, numb4);

console.log(numb3, numb4);
console.log(sNum);


/*
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). 
Find the smallest of the numbers and print it. 
 
Examples: 
3, 5, 2     -> 2 
7, 3, 1    -> 1 
5, 5, 5     -> 5 
1, 10, 9    -> 1 
10, 1, 2    -> 1
*/

let s1 = Math.floor(Math.random() * 10) + 1;
let s2 = Math.floor(Math.random() * 10) + 1;
let s3 = Math.floor(Math.random() * 10) + 1;
let snumb = Math.min(s1, s2, s3);

console.log(s1, s2, s3);
console.log(snumb);


/*
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). 
Calculate the average of the numbers and print it. 
 
Examples: 
3, 5, 7     -> 5 
7, 3, 2    -> 4 
5, 5, 5     -> 5 
1, 10, 7    -> 6 
10, 1, 1    -> 4 
*/

let a1 = Math.floor(Math.random() * 10) + 1;
let a2 = Math.floor(Math.random() * 10) + 1;
let a3 = Math.floor(Math.random() * 10) + 1;
let avg = (a1 + a2 + a3) / 3;

console.log(a1, a2, a3);
console.log(avg);


/*
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). 
Calculate the greatest and the smallest numbers and print their absolute difference. 
 
Examples: 
3, 5, 2     -> 3 
7, 3, 1    -> 6 
5, 5, 5     -> 0 
1, 10, 9    -> 9 
10, 1, 2    -> 9
*/

let t1 = Math.floor(Math.random() * 10) + 1;
let t2 = Math.floor(Math.random() * 10) + 1;
let t3 = Math.floor(Math.random() * 10) + 1;
let gVal = Math.max(t1, t2, t3);
let sVal = Math.min(t1, t2, t3);
let abs1 = Math.abs(gVal - sVal);

console.log(t1, t2, t3);
console.log(gVal);
console.log(sVal);
console.log(abs1);


/*
Write a program that generates a random number between 1 and 100 (both inclusive). 
Find which quarter of the range the number falls into and print it. 
1st quarter is 1-25 
2nd quarter is 26-50 
3rd quarter is 51-75 
4th quarter is 76-100 
 
Examples: 
15     -> 1st quarter 
73    -> 3rd quarter 
39     -> 2nd quarter 
87     -> 4th quarter
*/

let ray3 = Math.floor(Math.random() * 100) + 1;

console.log(ray3);

if(ray3 <= 25) console.log('1st quarter');
else if(ray3 >= 26 && ray3 <= 50) console.log('2nd quarter');
else if(ray3 >= 51 && ray3 <= 75) console.log('3rd quarter');
else console.log('4th quarter');

/*
Write a program that generates a random number between 1 and 100 (both inclusive). 
Find which half of the range the number falls into and print it. 
1st half is 1-50 
2nd half is 51-100 
 
Examples: 
15     -> 1st half 
50    -> 1st half 
51     -> 2nd half  
87     -> 2nd half  
100     -> 2nd half
*/

let ali = Math.floor(Math.random() * 100) + 1;
console.log(ali);

if(ali <= 50) console.log('1st half');
else console.log('2nd half');


/*
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
If the sum of the random numbers is even, print true. 
Otherwise, print false. 
 
Examples: 
3, 5     -> true 
7, 3    -> true 
5, 5     -> true 
1, 10     -> false 
10, 1     -> false
*/

let ib1 = Math.floor(Math.random() * 10) + 1;
let ib2 = Math.floor(Math.random() * 10) + 1;
let sum1 = ib1 + ib2;

console.log(ib1, ib2);

if(sum1 % 2 === 0) console.log(true);
else console.log(false);


/*
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
If the product of the random numbers is odd, print true. 
Otherwise, print false. 
 
Examples: 
3, 5     -> true 
7, 3    -> true 
5, 5     -> true 
1, 10     -> false 
10, 1     -> false
*/

let ray1 = Math.floor(Math.random() * 10) + 1;
let ray2 = Math.floor(Math.random() * 10) + 1;
let product = ray1 * ray2

console.log(ray1, ray2);

if(product % 2 !== 0) console.log(true)
else console.log(false);


/*
Write a function named as rectangleArea()which calculates the area of a rectangle when invoked. 
NOTE: Assume the sides of the rectangle are x and y. 
Conversion Formula: Area = x * y 
 
Examples: 
rectangleArea(5, 4)   -> 20 
rectangleArea(3, 7)   -> 21 
rectangleArea(6, 10)   -> 60
*/

function rectangleArea(x, y){
    let area = x * y;
    return area;
}

console.log(rectangleArea(5, 4));
console.log(rectangleArea(3, 7));
console.log(rectangleArea(6, 10));


/*
Write a function named as rectanglePerimeter() which calculates the perimeter of a rectangle when 
invoked. 
NOTE: Assume the sides of the rectangle are x and y. 
Conversion Formula: Perimeter = 2 * (x + y) 
 
Examples: 
rectanglePerimeter(5, 4)   -> 18 
rectanglePerimeter(3, 7)   -> 20 
rectanglePerimeter(6, 10)   -> 32
*/

function rectanglePerimeter(x, y){
    let perimeter = 2 * (x + y);
    return perimeter
}

console.log(rectanglePerimeter(5, 4));
console.log(rectanglePerimeter(3, 7));
console.log(rectanglePerimeter(6, 10));


/*
Write a function named as squareArea() which calculates the area of a square when invoked. 
NOTE: Assume the side of the square is x. 
Conversion Formula:Area = x * x 
 
Examples: 
squareArea(5)   -> 25 
squareArea(3)   -> 9 
squareArea(6)   -> 36
*/

function squareArea(x){
    let area = x ** 2;
    return area;
}

console.log(squareArea(5));
console.log(squareArea(3));
console.log(squareArea(6));


/*
Write a function named as squarePerimeter() which calculates the perimeter of a square when invoked. 
NOTE: Assume the side of the square is x. 
Conversion Formula: Perimeter = 4 * x 
 
Examples: 
squarePerimeter(5)   -> 20 
squarePerimeter(3)   -> 12 
squarePerimeter(6)   -> 24
*/

function squarePerimeter(x){
    let perimeter = 4 * x;
    return perimeter;
}

console.log(squarePerimeter(5));
console.log(squarePerimeter(3));
console.log(squarePerimeter(6));


/*
Write a function named as doubleWord() which takes a string word as an argument and returns the 
given word back doubled when invoked. 
NOTE: Assume you will not be given an empty word. 
 
Examples: 
doubleWord("Tech")    -> "TechTech" 
doubleWord("Global")     -> "GlobalGlobal"
*/

function doubleWord(word){
    return word + word;
}

console.log(doubleWord("Tech"));
console.log(doubleWord("Global"));



/*
Write a function named as firstCharacter() which takes a string word as an argument and returns the 
first character of the given word when invoked. 
NOTE: Assume you will not be given an empty word. 
 
Examples: 
firstCharacter("Tech")    -> "T" 
firstCharacter("Global")   -> "G"
*/

function firstCharacter(str){
    return str[0];
}

console.log(firstCharacter("Tech"));
console.log(firstCharacter("Global"));



/*
Write a function named as firstTwoCharacters() which takes a string word as an argument and returns 
the first two characters of the given word when invoked. 
NOTE: If the given word does not have 2 or more characters, then return the given string back. 
 
Examples: 
firstTwoCharacters("Tech")    -> "Te" 
firstTwoCharacters("Global")     -> "Gl" 
firstTwoCharacters("")      -> "" 
firstTwoCharacters(" ")      -> " " 
firstTwoCharacters("1")     -> "1"
*/

function firstTwoCharacters(word){
    if(word.length > 2) return word.slice(0, 2);
    else return word;
}

console.log(firstTwoCharacters("Tech"));
console.log(firstTwoCharacters("Global"));
console.log(firstTwoCharacters(""));
console.log(firstTwoCharacters(" "));
console.log(firstTwoCharacters("1"));


/*
Write a function named as lastCharacter() which takes a string word as an argument and returns the last 
character of the given word when invoked. 
NOTE: Assume you will not be given an empty word. 
 
Examples: 
lastCharacter("Tech")    -> "h" 
lastCharacter("Global")    -> "l" 
lastCharacter(" ")    -> " " 
lastCharacter("123")     -> "3
*/

function lastCharacter(word){
    return word.charAt(word.length - 1);
}

console.log(lastCharacter("Tech"));
console.log(lastCharacter("Global"));
console.log(lastCharacter(" "));
console.log(lastCharacter("123"));


/*
Write a function named as lastTwoCharacters() which takes a string word as an argument and returns 
the last two characters of the given word when invoked. 
NOTE: If the given word does not have 2 or more characters, then return the string back. 
 
Examples: 
lastTwoCharacters("Tech")  -> "ch" 
lastTwoCharacters("Global")   -> "al" 
lastTwoCharacters("")    -> "" 
lastTwoCharacters(" ")    -> " " 
lastTwoCharacters("1")    -> "1" 
*/

function lastTwoCharacters(word){
    if(word.length > 2) return word.charAt(word.length - 2) + word.at(-1);
    else return word;
}

function lastTwoCharacterss(word){
    if(word.length > 2) return word.at(-2) + word.at(-1);
    else return word;
}

console.log(lastTwoCharacterss("Tech"));
console.log(lastTwoCharacterss("Global"));
console.log(lastTwoCharacterss(""));
console.log(lastTwoCharacterss(" "));
console.log(lastTwoCharacterss("1"));


/*
Write a function named as firstLast() which takes a string word as an argument and returns the first and 
the last characters of the given word when invoked. 
NOTE: If the given word does not have 2 or more characters, then return the string back. 
 
Examples: 
firstLast("Tech")    -> "Th" 
firstLast("TechGlobal")     -> "Tl" 
firstLast("")      -> "" 
firstLast(" ")      -> " " 
firstLast("1")       -> "1" 
firstLast("abcde")     -> ae
*/

function firstLast(word){
    if(word.length > 2) return word.at(0) + word.at(-1);
    else return word;
}

console.log(firstLast("Tech"));
console.log(firstLast("TechGlobal"));
console.log(firstLast(""));
console.log(firstLast(" "));
console.log(firstLast("1"));
console.log(firstLast("abcde"));


/*
Write a function named as hasFive() which takes a string word as an argument and returns true if given 
string has at least 5 characters, and false otherwise when invoked. 
 
Examples: 
hasFive("Tech")   -> false 
hasFive("Global")   -> true 
hasFive("")    -> false 
hasFive("12345")   -> true 
hasFive("hello")   -> true
*/

function hasFive(word){
    return word.length >= 5;
}

console.log(hasFive("Tech"));
console.log(hasFive("Global"));
console.log(hasFive(""));
console.log(hasFive("12345"));
console.log(hasFive("hello"));


/*
Write a function named as middle() which takes a string word as an argument and returns the middle 
character if the string has odd length, and returns the middle two characters if the string has even 
length when invoked. 
NOTE: If the given word is empty, then return the empty string back. 
 
Examples: 
middle("Tech")    -> "ec" 
middle("Global")   -> "ob" 
middle("abcde")   -> "c" 
middle("1")     -> "1" 
middle("abc")     -> "b" 
middle(“1234”)    -> "23"
*/

function middle(str){
    let mIndex = Math.floor(str.length / 2);
    if(str.length % 2 !== 0) return str.at(mIndex);
    else return str.substring(mIndex - 1, mIndex + 1);
}

console.log(middle("Tech"));
console.log(middle("Global"));
console.log(middle("abcde"));
console.log(middle("1"));
console.log(middle("abc"));
console.log(middle("1234"));


/*
Write a function named as longer() which takes two string words as arguments and returns the string 
that has more characters when invoked. 
NOTE: If both of the words have the same length, then return the first string. 
 
Examples: 
longer("Tech", "Global")  -> "Global" 
longer("Hello", "Hi")    -> "Hello" 
longer("Hello", "World")  -> "Hello"
*/

function longer(str1, str2){
    if(str1.length >= str2.length) return str1;
    else return str2;
}

console.log(longer("Tech", "Global"));
console.log(longer("Hello", "Hi"));
console.log(longer("Hello", "World"));


/*
Write a function named as shorter() which takes two String words as arguments and returns the String 
has less characters when invoked. 
NOTE: if both of the words have the same length, then return the second String. 

Examples: 
shorter("Tech", "Global")  -> "Tech" 
shorter("Hello", "Hi")    -> "Hi" 
shorter("Hello", "World")  -> "World"
*/

function shorter(wrd1, wrd2){
    if(wrd1.length <= wrd2.length) return wrd1;
    else return wrd2 
}

console.log(shorter("Tech", "Global"));
console.log(shorter("Hello", "Hi"));
console.log(shorter("Hello", "World"));




/*
Write a function named as doubleWord() which takes a string word as an argument and returns the 
given word back doubled when invoked. 
NOTE: Assume you will not be given an empty word. 
 
Examples: 
doubleWord("Tech")    -> "TechTech" 
doubleWord("Global")     -> "GlobalGlobal"
*/

function doubleWord(word){
    return word + word
}

console.log(doubleWord("Tech"));
console.log(doubleWord("Global"));

/*
Write a function named as firstCharacter() which takes a string word as an argument and returns the 
first character of the given word when invoked. 
NOTE: Assume you will not be given an empty word. 
 
Examples: 
firstCharacter("Tech")    -> "T" 
firstCharacter("Global")   -> "G"
*/

function firstCharacter(word){
    return word.at(0);
}

console.log(firstCharacter("Tech"));
console.log(firstCharacter("Global"));


/*
First Two Characters 
Write a function named as firstTwoCharacters() which takes a string word as an argument and returns 
the first two characters of the given word when invoked. 
NOTE: If the given word does not have 2 or more characters, then return the given string back. 
 
Examples: 
firstTwoCharacters("Tech")    -> "Te" 
firstTwoCharacters("Global")     -> "Gl" 
firstTwoCharacters("")      -> "" 
firstTwoCharacters(" ")      -> " " 
firstTwoCharacters("1")     -> "1" 
*/

function firstTwoCharacters(word){
    return word.slice(0, 2);
}

console.log(firstTwoCharacters("Tech"));
console.log(firstTwoCharacters("Global"));


/*
Write a function named as lastCharacter() which takes a string word as an argument and returns the last 
character of the given word when invoked. 
NOTE: Assume you will not be given an empty word. 
 
Examples: 
lastCharacter("Tech")    -> "h" 
lastCharacter("Global")    -> "ll" 
lastCharacter(" ")    -> " " 
lastCharacter("123")     -> "3"
*/

function lastCharacter(word){
    return word.at(-1);
}

console.log(lastCharacter("Tech"));
console.log(lastCharacter("Global"));
console.log(lastCharacter("123"));


/*
Write a function named as lastTwoCharacters() which takes a string word as an argument and returns 
the last two characters of the given word when invoked. 
NOTE: If the given word does not have 2 or more characters, then return the string back. 
 
Examples: 
lastTwoCharacters("Tech")  -> "ch" 
lastTwoCharacters("Global")   -> "al" 
lastTwoCharacters("")    -> "" 
lastTwoCharacters(" ")    -> " " 
lastTwoCharacters("1")    -> "1" 
*/

function lastTwoCharacters(word){
   if(word.length > 2) return word.at(-2) + word.at(-1);
   else return word;
}

console.log(lastTwoCharacters("Tech"));
console.log(lastTwoCharacters("Global"));
console.log(lastTwoCharacters("1"));
 
 
 
/*
Write a function named as firstLast() which takes a string word as an argument and returns the first and 
the last characters of the given word when invoked. 
NOTE: If the given word does not have 2 or more characters, then return the string back. 
 
Examples: 
firstLast("Tech")    -> "Th" 
firstLast("TechGlobal")     -> "Tl" 
firstLast("")      -> "" 
firstLast(" ")      -> " " 
firstLast("1")       -> "1" 
firstLast("abcde")     -> ae
*/

function firstLast(word){
    if(word.length > 2) return word.at(0) + word.at(-1);
    else return word;
}

console.log(firstLast("Tech"));
console.log(firstLast("Global"));
console.log(firstLast("1"));


/*
Write a function named as hasFive() which takes a string word as an argument and returns true if given 
string has at least 5 characters, and false otherwise when invoked. 
 
Examples: 
hasFive("Tech")   -> false 
hasFive("Global")   -> true 
hasFive("")    -> false 
hasFive("12345")   -> true 
hasFive("hello")   -> true
*/

function hasFive(word){
    if(word.length >= 5) return true;
    else return false;
}

console.log(hasFive("Tech"));
console.log(hasFive("Global"));
console.log(hasFive(""));


/*
Write a function named as middle() which takes a string word as an argument and returns the middle 
character if the string has odd length, and returns the middle two characters if the string has even 
length when invoked. 
NOTE: If the given word is empty, then return the empty string back. 
 
Examples: 
middle("Tech")    -> "ec" 
middle("Global")   -> "ob" 
middle("abcde")   -> "c" 
middle("1")     -> "1" 
middle("abc")     -> "b" 
middle(“1234”)    -> "23" 
*/

function middle(word){
    let mIndex = word.length / 2;
    if(word.length % 2 !== 0) return word.at(mIndex);
    else return word.substring(mIndex + 1, mIndex -1);
}

console.log(middle("Tech"));
console.log(middle("Global"));
console.log(middle("abcde"));
console.log(middle("1"));
console.log(middle("abc"));
console.log(middle("1234"));



/*
Write a function named as concat() which takes two string words as arguments and returns the words 
concatenated when invoked. 
NOTE: Concatenation should always be as first string + second string .  
 
Examples: 
concat("Tech", "Global")  -> "TechGlobal" 
concat("Hello", "World")  -> "HelloWorld" 
concat("", "abc")    -> "abc" 
concat("123", "1234")    -> "1231234"
*/

function concat(word1, word2){
    return word1.concat(word2);
}

console.log(concat("Tech", "Global"));
console.log(concat("Hello", "World"));
console.log(concat("", "abc"));
console.log(concat("123", "1234"));


/*
Write a function named as startsVowel() which takes a string word as an argument and returns true if 
given string starts with a vowel letter, and false otherwise when invoked. 
NOTE: Vowel letters are A, E, O, U, I, a, e, o, u, i. 
 
Examples: 
startsVowel("Tech")    -> false 
startsVowel("Apple")     -> true 
startsVowel("abc")     -> true 
*/


function startsVowel(word){
    if("AEIOUaeiou".includes(word[0])) return true
    else return false;
}

console.log(startsVowel("Tech"));
console.log(startsVowel("Apple"));   
console.log(startsVowel("abc"));  







/*
Write a program that generates a random numbers between 1 and 10 (both inclusive).
Calculate the square of the number and print it.
*/

let number1 = Math.floor(Math.random() * 10) + 1;
console.log(number1);
console.log(number1 ** 2);


/*
Write a program that generates 3 random numbers between 1 and 10 (both inclusive).
Calculate the greatest and the smallest numbers and print their absolute difference.
*/

let number2 = Math.floor(Math.random() * 10) + 1;
let number3 = Math.floor(Math.random() * 10) + 1;
let number4 = Math.floor(Math.random() * 10) + 1;

console.log(number2, number3, number4);
console.log(Math.max(number2, number3, number4));
console.log(Math.min(number2, number3, number4));
console.log(Math.abs(number2, number3, number4));


/*
Write a program that generates a random number between -5 and 5 (both inclusive).
If the random number is negative, print true.
Otherwise, print false.
*/

let alex = Math.floor(Math.random() * 11) - 5;
console.log(alex);
if(alex < 0) console.log(True);
else console.log(false);






let mum = Math.floor(Math.random() * 100) + 1;
console.log(mum);
if(mum <= 50) console.log("1st half");
else console.log("2nd half");




/*
Write a function named as firstLast () which takes a string word as an argument and returns the first and the last characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the string back.
*/

function fiLast(word){
    if(word.length >= 2) return word.at(0) + word.at(-1);
    else return word
}


console.log(fiLast("Ibrahim"));