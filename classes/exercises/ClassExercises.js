// Define your Book class here:
class Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut,discarded) {
        this.title = title;
        this.author = author;
        this.copyright = copyright;
        this.isbn = isbn;
        this.pages = pages;
        this.timesCheckedOut = timesCheckedOut;
        this.discarded = discarded;
    } 
    
    checkout(uses = 1) {
        this.timesCheckedOut += uses;
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut,discarded) {
        super(title, author, copyright, isbn, pages, timesCheckedOut,discarded);
    }

    dispose(currentyear){
        if (currentyear - this.copyright > 5) {
            this.discarded = "Yes";
        }
    }   
}

class Novel extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut,discarded) {
        super(title, author, copyright, isbn, pages, timesCheckedOut,discarded);
    }

    dispose() {
        if (this.timesCheckedOut > 100) {
            this.discarded = "Yes";
        }
    }
}

// Declare the objects for exercises 2 and 3 here:
let prideAndPrejudice = new Novel("Pride and Prejudice", "Jane Austen", 1813, "1111111111111", 432, 32, "No");

let secretShuttleManual = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, "0000000000000", 1147, 1, "No");

// Code exercises 4 & 5 here:
secretShuttleManual.dispose(2024); //2024 - 2013 is more than 5 years, discarded changes to "Yes"
console.log(secretShuttleManual); 

prideAndPrejudice.checkout(5); //added 5 checkouts to the 32
prideAndPrejudice.dispose(); //doesn't change to "Yes", 37 < 100
console.log(prideAndPrejudice);