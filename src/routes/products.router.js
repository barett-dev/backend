const { Router } = require('express');
const fs = require('fs');

const router = Router();
module.exports = router;


const products = [];

//--------------------------------------------------------------------------------------
//router.get('/', (req, res) => {
   // res.json({ message: products})
//})
//-----------------------------------------------------------

router.get('/:pid', (req, res) => { // traer el valor de id desde el JSON
    const  pid  = req.body
    const productsFile = fs.readFileSync('./routes/products.json')
    const newProducts = JSON.parse(productsFile)

    console.log(newProducts[0].category) //Ejemplo 
    
    res.send('Datos guardados correctamente');


    
})


router.post('/', (req, res) => { 
    const  products  = req.body
    //products.push(product);

    fs.writeFile('products.json', JSON.stringify(products), (err) => {
        if (err) {
        console.error(err);
        res.status(500).send('Error al guardar los datos');
        }  else {
        res.send('Datos guardados correctamente');
    }
  });
  

   //res.json({ message: 'Usuario Creado'})

})

router.delete('/', (req, res) => { //Elimina producto por id
    const  pid  = req.body
    const products = req.params.pid
    products.find(products => products.pid === req.params.pid )

    if (!products) res.status(404).send()

    products.splice(pid, 1) //Prodcuts viene del archivo json

    res.send()

})
