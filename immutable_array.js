const books = [
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        pages: 224
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        pages: 336
    },
    {
        title: "1984",
        author: "George Orwell",
        pages: 328
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        pages: 279
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        pages: 200
    },
    {
        title: "Moby-Dick; or, The Whale",
        author: "Herman Melville",
        pages: 704
    },
    {
        title: "Brave New World",
        author: "Aldous Huxley",
        pages: 288
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        pages: 304
    },
    {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        pages: 223
    },
    {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        pages: 1178
    }
];

console.log(books);

const newBook = {
    title : "Harrry Potter",
    author : "J.K. Rowling",
    pages: 412
};

//Adding a New Book to the list
const newBooks = [...books, newBook];
newBooks;

//Deleting a Book 
const deleteBook = newBooks.filter((book) => book.title !== "The Hobbit");
deleteBook;

//update a book 
 const updateBook = deleteBook.map(book => book.title == "The Catcher in the Rye" ? {...book, id: 1} : book);
 updateBook;