let myLibrary = [{
    title: "A Game of Thrones",
    author: "George R. R. Martin",
    pages: 835,
    read: true,
    id: 1
}];

const newButton = document.getElementById("new_button");
const popupForm = document.getElementById('popup_form');
const addForm = document.getElementById('add_form');

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.id = myLibrary.length + 1;
    }
};

//Function to get input from form and add new book to library and library grid
const addBookToLibrary = () => {
    addForm.addEventListener("submit", function(event){
        event.preventDefault();
    });

    myLibrary.push(new Book(
        document.getElementById("title").value,
        document.getElementById("author").value,
        document.getElementById("pages").value,
        document.getElementById("read").checked
    ));
    
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value= "";
    popupForm.style.display = "none";
    newButton.style.display = "flex";
    displayLibrary();
    
    
    console.log(myLibrary)
};

//toggle read/unread
const toggleRead = (e) => {
    if(e.target.classList.contains("read") === true){
        e.target.setAttribute("class", "read_button unread")
    } else {e.target.setAttribute("class", "read_button read")}
};

//display and center the popup form
const showForm = () => {
   popupForm.style.display = "flex";
   const newLeft = (screen.width - 400)/2;
   const newTop = (screen.height - 400)/3;

   popupForm.style.left = `${newLeft}px`;
   popupForm.style.top = `${newTop}px`;
};

//Display all books stored in the library
const bookGrid = document.getElementById("book_grid");

const displayLibrary = () => {
    myLibrary.forEach(book => {
        const newBook = document.createElement("div");
        newBook.setAttribute("class", "card")

        const newTitle = document.createElement("h2");
        newTitle.innerText = `${book.title}`;

        const newAuthor = document.createElement("h3");
        newAuthor.innerText = `by ${book.author}`;

        const newPages = document.createElement("h3");
        newPages.innerText = `${book.pages} pages`;

        const newReadButton = document.createElement("button");
        newReadButton.innerText = "Read";
        if(book.read === true){
            newReadButton.setAttribute("class", "read_button read")} 
            else {
                newReadButton.setAttribute("class", "read_button unread")
        }
        newReadButton.addEventListener("click", toggleRead);

        const newRemove = document.createElement("button");
        newRemove.innerText = "Remove"
        newRemove.setAttribute("class", "remove_button");

        
        
        newBook.appendChild(newTitle);
        newBook.appendChild(newAuthor);
        newBook.appendChild(newPages);
        newBook.appendChild(newReadButton);
        newBook.appendChild(newRemove);
        bookGrid.appendChild(newBook);
        
    })
}

window.addEventListener("load", displayLibrary());