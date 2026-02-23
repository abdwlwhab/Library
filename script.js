let myLibrary = [];

// Constructor للكتاب
function creatAbook(author, pages, read, title) {
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.title = title;
  this.id = crypto.randomUUID();
}

// إضافة كتاب للمكتبة
function addBookToLibrary(author, pages, read, title) {
  const book = new creatAbook(author, pages, read, title);
  myLibrary.push(book);
}

// اختيار العناصر من الـ DOM
const libraryContainer = document.getElementById("main");
const addBookBtn = document.querySelector(".addbookbtn");
const bookFormDialog = document.getElementById("book-form-dialog");
const closeBtn = document.getElementById("close-btn");
const bookForm = document.getElementById("book-form");

// دالة عرض الكتب
function displayBooks() {
  libraryContainer.innerHTML = ""; // نمسح الكتب الحالية

  myLibrary.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book");

    const detailsDiv = document.createElement("div");
    detailsDiv.classList.add("details");

    const bookTitle = document.createElement("div");
    bookTitle.classList.add("title");
    bookTitle.textContent = book.title;

    const bookAuthor = document.createElement("div");
    bookAuthor.classList.add("author");
    bookAuthor.textContent = book.author;

    const bookPages = document.createElement("div");
    bookPages.classList.add("pages");
    bookPages.textContent = book.pages;

    const bookButtons = document.createElement("div");
    bookButtons.classList.add("buttons");

    // زر تغيير حالة القراءة
 const bookRead = document.createElement("button");
bookRead.classList.add("togelRead");

// تعيين اللون أو الكلاس المبدئي حسب حالة الكتاب
if (book.read === "yes") {
  bookRead.textContent = "Read";
  bookRead.classList.remove("notread");
} else {
  bookRead.textContent = "Not Read";
  bookRead.classList.add("notread");
}

bookRead.addEventListener("click", () => {
  // تبديل حالة الكتاب
  book.read = book.read === "yes" ? "no" : "yes";

  // تحديث النص والكلاس للزرار فقط
  if (book.read === "yes") {
    bookRead.textContent = "Read";
    bookRead.classList.remove("notread");
  } else {
    bookRead.textContent = "Not Read";
    bookRead.classList.add("notread");
  }
});

    // زر الحذف
    const bookDel = document.createElement("button");
    bookDel.classList.add("delet");
    bookDel.textContent = "Delete";
    bookDel.addEventListener("click", () => {
      myLibrary = myLibrary.filter((b) => b.id !== book.id);
      displayBooks();
    });

    bookButtons.append(bookRead, bookDel);
    detailsDiv.append(bookTitle, bookAuthor, bookPages);
    bookCard.append(detailsDiv, bookButtons);
    libraryContainer.appendChild(bookCard);
  });

  // إضافة زر "+" في آخر المكتبة دائمًا
  libraryContainer.appendChild(addBookBtn);
}

// فتح الفورم عند الضغط على زر "+"
addBookBtn.addEventListener("click", () => {
  bookFormDialog.showModal();
});

// إغلاق الفورم عند الضغط على Cancel
closeBtn.addEventListener("click", () => {
  bookFormDialog.close();
});

// التعامل مع submit الفورم
bookForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").value;

  addBookToLibrary(author, pages, read, title);
  displayBooks();
  bookFormDialog.close();
  bookForm.reset();
});

// كتب تجريبية
addBookToLibrary("ali", "44", "no", "hallo");
addBookToLibrary("mohamed", "9", "yes", "example");
addBookToLibrary("Book 1", 200, "yes", "Title 1");
addBookToLibrary("Book 2", 150, "no", "Title 2");

// عرض الكتب عند التحميل
displayBooks();