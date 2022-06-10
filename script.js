

// Remove Blanks: Create a function that, given a string, returns all of that string’s contents, but without blanks.

function removeBlanks(str){
    var newString = "";
    for (var i = 0; i < str.length; i++){
        if (str[i] !== " "){
            newString += str[i];
        }
    }
    return newString;
}


// Get Digits: Create a function that given a string, returns the integer made from the strings digits. 

function returnDigits(str){
    var Digits = "";
    for (var i = 0; i < str.length; i++){
        if (isNaN(str[i])) {
            null
        }
        else {
            Digits += str[i];
        }
    }
    return Number(Digits);
}


// Acronyms: Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized)

function acronyms(str){
    var acronym = ""
    var words = str.split(" ")
    for (var i = 0; i < words.length; i++){
        if(words[i].length > 0){
            acronym += words[i][0]
        }
    }
    return acronym.toUpperCase();
}


// Count Non-Spaces: Create a function that, given a string, returns the number of non-space characters found in the string. 

function countNonSpaces(str){
    var count = '';
    for (var i = 0; i < str.length; i++){
        if (str[i] != " "){
            count += str[i];
        }
    }
    return Number(count.length);

}


// Remove Shorter Strings: Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.

function removeShorterStrings(arr, val){
    var shortArray = []
    var shortArrayIndex = 0;
    for (i = 0; i < arr.length; i++){
        if (arr[i].length >= val){
            shortArray[shortArrayIndex] = arr[i]
            shortArrayIndex ++;
        }
    }
    return shortArray;
}


// Test cases
console.log(removeBlanks("C o ding D o jo")); // success
console.log(returnDigits("kek43kj45k2j3k4kk53k3")); // Success
console.log(acronyms("I love coding dojo!")); // Success
console.log(countNonSpaces("Honey pie, you are driving me crazy")); // Success
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3));
