interface IBook{
    title:string, 
    readonly author:string, 
    published?:number, 
    pages?:number}

function logger(a:IBook){
    console.log(`Name is: ${a.author}, Book is called: ${a.title}`);
}

class Book implements IBook{

    constructor(title: string, author: string, published?: number, pages?: number) {
        this.title = title;
        this.author = author;
        this.published = published;
        this.pages = pages;
    }
    title: string;
    author: string;
    published?: number | undefined;
    pages?: number | undefined;

}

let book1 = new Book("Moby Dick", "JK Rowlings", 2021, 1000000);

logger(book1);