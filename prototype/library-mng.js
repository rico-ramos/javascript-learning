// Library Book System


// title, author, isAvailable (checkout => returnBook)  //

function Book (title, author, isAvailable){
    this.title = title;
    this.author = author;
    this.isAvailable = true;

    //checkout book
    this.checkout = function(){
        if(this.isAvailable){
            this.isAvailable = false    
            console.log(`You have checked out book "${title}" by ${author}.`);
            console.log("======================");
        } else {
            console.log(`Book '${title}' by ${author} is not available. Please try another selection.`);
            console.log("======================");
        }
    }

   
}

 Book.prototype.returnBook = function(){
        if(this.isAvailable){
            console.log(`${this.title} is already returned.`);
        } else {
            this.isAvailable = true;
            console.log(`Thank you for returning ${this.title} by ${this.author}. Have a great day!`);
            console.log("======================");
        }
    }


const bookSelection = new Book("Moby Dick", "Herman Melville");

console.log(`Added "${bookSelection.title}" to your library.`);

console.log("======================");

bookSelection.checkout();

bookSelection.returnBook();

bookSelection.checkout();

bookSelection.checkout();

bookSelection.returnBook();

bookSelection.returnBook();