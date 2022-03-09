class Book{
    constructor(tile, category, author, isRead = false){
        this.tile = tile;
        this.category = category;
        this.author = author;
        this.isRead = isRead;
    }
    markBookAsRead(){
        this.isRead = true;
    }
    finishedDate(){
        
    }
}