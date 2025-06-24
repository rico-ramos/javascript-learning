// String Properties
// String Length
let str = "Hello, JS WORLDS!"
console.log("String Length:", str.length);

// String Indexing - ie. accessing first character from the string
console.log("First Char:", str[0]);
console.log("Last Char:", str[str.length-1]);


let tweetPost = "Learning JS is awesome!! #boomeh";

if(tweetPost.length > 280) {
    console.log("Tweet is too long. Please shorten it.");
} else{
    console.log(`Tweet is within the limit. ${tweetPost.length} / 280 characters.`);
}

// Password length validation
let pw = '';
if(pw <8 ){
    console.log("your password is too short. It needs to be at least 8 characters.");
} else {"passowrd is valid length."}

// Search Functionality
let searchQuery ="";
if(searchQuery.length===0){
    console.log("Search query is empty. Please enter a search term.")
} else{
    // Simulate a search operation or logic
    console.log(`Searching for: ${searchQuery}`);
}

// String with 'new' keyword
let newString = new String("This is my new amazing string");
console.log("new string:", newString);