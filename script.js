let myLibrary = [];

function Book(title, author, pageCount, hasRead) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.hasRead = hasRead;
}

function addBookToLibrary() {
    newTitle = prompt('What is the title of the book?');
    newBook = new Book(newTitle, 'Dan', '187', true);
    console.log(newBook);

    // bookCard = document.createElement('p');
    // bookCard.textContent = newBook.title;
    // bookCard.appendChild(newTitle);
}




