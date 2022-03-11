class BookList {
    constructor(root, list = []){
        this.books = list;
        this.root = root;
    }
    add(text){
        let book = new Book(text);
        this.books.push(book);
        this.createUI();
        return this.books.length;
    }
    handleDelete(id){
        let index = this.books.findIndex((book) => book.id === id);
        this.books.splice(index, 1);
        this.createUI();
        return this.books.length;
    }
    createUI(){
        this.root.innerHTML = "";
        this.books.forEach((book) => {
            let ui = book.createUI();
            ui.querySelector("span").addEventListener(
                "click", 
                this.handleDelete.bind(this, book.id)
                );
            this.root.append(ui);
        });
    }
}

class Book {
    constructor(text){
        this.text = text;
        this.isDone = false;
        this.id = `id - ${Date.now()}`;
    }
    handleCheck(){
        this.isDone = !this.isDone;
        this.createUI();
    }
    createUI(){
        let li = document.createElement("li");
        let input = document.createElement("input");
        input.type = "checkbox";
        input.checked = this.isDone;
        input.addEventListener("click", this.handleCheck.bind(this));
        let p = document.createElement("p");
        p.innerText = this.text;
        let span = document.createElement("span");
        span.innerText = "X";
        li.append(input, p, span);
        return li;
    }
}

let input = document.querySelector("input");
let myBooks = new BookList(document.querySelector(".books"));

input.addEventListener ("keyup", (event) => {
    if (event.keyCode === 13){
        myBooks.add(event.target.value);
        event.target.value = "";
    }
})