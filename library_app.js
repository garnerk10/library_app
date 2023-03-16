let myLibrary = [{
    name: "A Game of Thrones",
    author: "George R. R. Martin",
    pages: 835,
    read: false,
    id: 1
}];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = true;
    this.id = myLibrary.length + 1;
};

function addBookToLibrary() {
    document.getElementById("add_form").addEventListener("submit", function(event){
        event.preventDefault();
    });

    myLibrary.push(new Book(
        document.getElementById("title").value,
        document.getElementById("author").value,
        document.getElementById("pages").value,
        document.getElementsByName("read").value
    ));

    document.getElementById("popup_form").style.display = "none";
    document.getElementById("new_button").style.display = "flex";

    console.log(myLibrary)
}

const show_form = () => {
   document.getElementById("popup_form").style.display = "flex";
   document.getElementById("new_button").style.display = "none";
};