const ProductManager = require("./ProductManager");

let phoneDescription = 'Equipo para poder comunicarse a distancia'
let phoneThumbnail = 'ABCD'
let laptopDescription = 'Equipo para realizar trabajos con gran rapidez'
let laptopThumbnail = 'EFGH'
let stockOn = true
let stockOff = false
const phone = new ProductManager('Phone',phoneDescription,1100,phoneThumbnail,'AZSD',stockOn)
phone.getProducts()

const laptop = new ProductManager('Laptop',laptopDescription,1500,laptopThumbnail,'DSZA',stockOff)