"use strict";
function logger(a) {
    console.log(`Name is: ${a.author}, Book is called: ${a.title}`);
}
class Book {
    constructor(title, author, published, pages) {
        this.title = title;
        this.author = author;
        this.published = published;
        this.pages = pages;
    }
}
let book1 = new Book("Moby Dick", "JK Rowlings", 2021, 1000000);
logger(book1);
//# sourceMappingURL=interface1.js.map