const myLibrary = [];

function creatAbook(author, pages, read, title) {
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.title = title;
  this.id = crypto.randomUUID();
}
function addBookToLibrary(author, pages, read, title) {
  const book = new creatAbook(author, pages, read, title);
  myLibrary.push(book);
}

const libraryContainer = document.getElementById("main");

function displayBooks() {
  libraryContainer.innerHTML = "";

  myLibrary.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book");

    const detailsDiv = document.createElement("div");
    detailsDiv.classList.add("details");

    const bookTitle = document.createElement("div");
    bookTitle.classList.add("title");
    bookTitle.textContent = book.title;

    const bookAutor = document.createElement("div");
    bookAutor.classList.add("author");
    bookAutor.textContent = book.author;

    const bookPages = document.createElement("div");
    bookPages.classList.add("pages");
    bookPages.textContent = book.pages;

    const bookButtons = document.createElement("div");
    bookButtons.classList.add("buttons");

    const bookRead = document.createElement("button");
    bookRead.classList.add("togelRead");
    bookRead.textContent = "Read";

    const bookDel = document.createElement("button");
    bookDel.classList.add("delet");
    bookDel.textContent = "Delete";

    bookButtons.appendChild(bookRead);
    bookButtons.appendChild(bookDel);

    detailsDiv.appendChild(bookTitle);
    detailsDiv.appendChild(bookAutor);
    detailsDiv.appendChild(bookPages);

    bookCard.appendChild(detailsDiv);
    bookCard.appendChild(bookButtons);
    libraryContainer.appendChild(bookCard);
  });
}

addBookToLibrary("ali", "44", "no", "hallo");
addBookToLibrary("mohamed", "9", "yes", "fuck");
addBookToLibrary("Book 1", 200, "yes", "Title 1");
addBookToLibrary("Book 2", 150, "no", "Title 2");
addBookToLibrary("ali", "44", "no", "hallo");
addBookToLibrary("mohamed", "9", "yes", "fuck");
addBookToLibrary("Book 1", 200, "yes", "Title 1");
addBookToLibrary("Book 2", 150, "no", "Title 2");
addBookToLibrary("Book 2", 150, "no", "Title 2");

displayBooks();
