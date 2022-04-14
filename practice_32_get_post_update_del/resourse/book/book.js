const  LIST_BOOKS = []

class Books {
    constructor(params) {
        this.id = params.id
        this.title = params.title
        this.coverImage = params.coverImage
        this.synopsis = params.synopsis
        this.publisher = params.publisher
        this.author = params.author
        this.price = params.price
    }
    static create(params){
        const book = new this(params)

        LIST_BOOKS.push(book)

        return book

    }
    static list () {
        return LIST_BOOKS
    }
    static find (params) {
        const books = LIST_BOOKS.filter((books) => params === books.title) 
        return books
    }
    static update (id, body) {
        // const books = LIST_BOOKS.filter((books) => params === books.id)
        // logic sigle
        LIST_BOOKS.forEach((books) => {
            if (books.id === Number(id)) {
                Object.keys(body).forEach((key) => {
                    books[key] = body[key]
                })
                return true
            }
            })
    }
    static delete (id) {
        const books = LIST_BOOKS.filter((book) => Number(id) === book.id)
        const indexObj = LIST_BOOKS.indexOf(books[0])
        LIST_BOOKS.splice(indexObj, 1)
        return true
        // return LIST_BOOKS.splice(indexObj, 1)
    }
}

module.exports = {
    Books
}