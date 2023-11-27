//ONLINE BOOKSTORE

function Author(name, birthYr, nationality) {
    this.name = name;
    this.birthYr = birthYr;
    this.nationality = nationality;
}

function Book(title, author, genre, price) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
}

Book.prototype.getBookInfo = function() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author.name}`);
    console.log(`Genre: ${this.genre}`);
    console.log(`Price: $${this.price}`);
    console.log('----------------------');
};

const author1 = new Author("Jhumpa Lahiri", 1967, "Indian");
const author2 = new Author("Vikram Seth", 1952, "Indian");

const book1 = new Book("The God of Small Things", author1, "Fiction", 22);
const book2 = new Book("The Namesake", author2, "Fiction", 20);

book1.getBookInfo();
book2.getBookInfo();

