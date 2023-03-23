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
const bookGrid = document.getElementById("book_grid");

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

    const getTitle = document.getElementById("title").value;
    const getAuthor = document.getElementById("author").value;
    const getPages = document.getElementById("pages").value;
    const getRead = document.getElementById("read").checked;

    const newBook = new Book(
        getTitle,
        getAuthor,
        getPages,
        getRead
    );
    
    myLibrary.push(newBook);
    addBookCard(newBook);
    
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value= "";
    popupForm.style.display = "none";
    newButton.style.display = "flex";
};

//Create and add new book card to grid display
const addBookCard = (bookObj) => {
        const newCard = document.createElement("div");
        newCard.setAttribute("class", "card");
        newCard.setAttribute("id", `${bookObj.id}`)

        const newTitle = document.createElement("h2");
        newTitle.innerText = `${bookObj.title}`;

        const newAuthor = document.createElement("h3");
        newAuthor.innerText = `by ${bookObj.author}`;

        const newPages = document.createElement("h3");
        newPages.innerText = `${bookObj.pages} pages`;

        const newReadButton = document.createElement("button");
        newReadButton.innerText = "Read";
        if(bookObj.read === true){
            newReadButton.setAttribute("class", "read_button read")} 
            else {
                newReadButton.setAttribute("class", "read_button unread")
        }
        newReadButton.addEventListener("click", toggleRead);

        const newRemove = document.createElement("button");
        newRemove.innerText = "Remove";
        newRemove.setAttribute("class", "remove_button");
        newRemove.addEventListener("click", removeBook);

        newCard.appendChild(newTitle);
        newCard.appendChild(newAuthor);
        newCard.appendChild(newPages);
        newCard.appendChild(newReadButton);
        newCard.appendChild(newRemove);
        bookGrid.appendChild(newCard);
};

//Remove the card the grid and book from the library
const removeBook = (e) => {
    const targetId = e.target.getAttribute("id");
    const targetCard = e.target.parentNode;
    myLibrary.splice(targetId - 1, 1);
    bookGrid.removeChild(targetCard); 
}

//toggle read/unread
const toggleRead = (e) => {
    if(e.target.classList.contains("read") === true){
        e.target.setAttribute("class", "read_button unread");
        e.target.innerText = "Not Read";
    } else {
        e.target.setAttribute("class", "read_button read");
        e.target.innerText = "Read";
    }
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
const displayLibrary = () => {
    myLibrary.forEach(book => addBookCard(book))
}

window.addEventListener("load", displayLibrary());