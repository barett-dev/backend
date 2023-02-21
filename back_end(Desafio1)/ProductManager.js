class ProductManager{
    title = ''
    description = ''
    price 
    thumbnail = ''
    code 
    stock 
    products = []
    
    constructor(title,description,price,thumbnail,code,stock){
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock

    }
    
    addProduct(){
        if (code == code){
            console.log('El producto contiene el mismo codigo')
        }
    }

    getProducts(){
        return console.log(this.products)

    }

    getProductById(){
        if ()
        return this.products.find(product => product.id === id)
    }

    
}
module.exports = ProductManager