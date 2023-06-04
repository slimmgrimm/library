let myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}
//SETUP FOR HTML FORM VALIDATION
// const title = document.querySelector('#title');
// const author = document.querySelector('#author');
// const pages = document.querySelector('#pages');

// const addBookBtn = document.querySelector('.add-book');
// addBookBtn.addEventListener('click', (event) => {
//     testAddBook.innerText = `${title} ${author} ${pages}`
// });

// const testAddBook = document.querySelector('.test-button');

let addBookBtn = document.querySelector('.add-book-btn')
addBookBtn.addEventListener('click', function() {
    let newBookForm = document.querySelector('#new-book-form')
    newBookForm.style.display = 'block'
})

document.querySelector('#new-book-form').addEventListener('submit', function(event) {
    event.preventDefault()
    addBookToLibrary()
})

function addBookToLibrary() {
    let title = document.getElementById('title').value
    let author = document.getElementById('author').value
    let pages = document.getElementById('pages').value

    let newBook = new Book(title, author, pages)
    myLibrary.push(newBook)
    window.alert('Book added!')
    let newBookForm = document.querySelector('#new-book-form')
    newBookForm.style.display = 'none'
}

function checkLibrary() {
    console.table(myLibrary);
}

function displayLibrary() {

    for (book of myLibrary) {
    console.log(book);

    const container = document.querySelector('.display');
    const card = document.createElement('div');
    card.classList.add('card')
    container.appendChild(card);

    const bookTitle = document.createElement('h2');
    bookTitle.textContent = book.title;
    card.appendChild(bookTitle);

    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = book.author;
    card.appendChild(bookAuthor);

    const bookPages = document.createElement('p');
    bookPages.textContent = `${book.pageCount} pages`;
    card.appendChild(bookPages);
    }
}
function deleteBook(currentBook) {
    library.splice(currentBook, currentBook + 1);
  }

//How to remove book from myLibrary array?
//myLibrary.splice(thisIndexSomehow, 1);
//find a way to link the index value and then remove it


// this.element.dataset.id = book.id;

// book.container = this;

// this.bookRemove = function() {
//   // remove book and container
//   let index = myLibrary.findIndex((b) => b.id === book.id);
//   myLibrary.splice(index, 1);

//   libraryContainer.removeChild(this.element);
//   saveAll();
// };

