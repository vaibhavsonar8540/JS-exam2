function Book(title, author, year) {
    return {
        title: title,
        author: author,
        year: year
    };
}

const book = Book("To Kill a Mockingbird", "Harper Lee", 1960);
console.log(book);
