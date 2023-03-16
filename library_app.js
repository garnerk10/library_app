let myLibrary = [{
    name: "A Game of Thrones",
    author: "George R. R. Martin",
    pages: 835,
    read: false,
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

const addBookToLibrary = () => {
    addForm.addEventListener("submit", function(event){
        event.preventDefault();
    });

    myLibrary.push(new Book(
        document.getElementById("title").value,
        document.getElementById("author").value,
        document.getElementById("pages").value,
        document.getElementsByName("read").value
    ));

    popupForm.style.display = "none";
    newButton.style.display = "flex";

    console.log(myLibrary)
};

const showForm = () => {
   popupForm.style.display = "flex";
   newButton.style.display = "none";
};

console.log(newButton)
console.log(popupForm);