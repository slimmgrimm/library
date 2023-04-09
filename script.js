let myLibrary = [];

function Book(title, author, pageCount) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
}

function addBookToLibrary(book) {

    title = prompt('What is the title?');
    author = prompt('Who is the author?');
    pageCount = prompt('How many pages is it?');

    const newBook = new Book(title, author, pageCount);
    console.log(newBook);

    const container = document.querySelector('section');
    const card = document.createElement('card');
    container.appendChild(card);

    const bookTitle = document.createElement('h2');
    bookTitle.textContent = title;
    card.appendChild(bookTitle);

    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = author;
    card.appendChild(bookAuthor);

    const bookPages = document.createElement('p');
    bookPages.textContent = `${pageCount} pages`;
    card.appendChild(bookPages);

    myLibrary.push(newBook);
}

function checkLibrary() {
    console.table(myLibrary);
}

// function displayLibrary() {
//     for (const book of library) {

//     }
// }




