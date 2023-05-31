import ProductManager from "./ProductManager.js";

const Manager1 = new ProductManager;
//Añadir productos
// Manager1.addProduct("añadido1", "description1", 125, "foto2.jpg", "azz123", 5)
// Manager1.addProduct("añadido2", "description2", 250, "foto332.jpg", "a5z123", 15)



// //Mostrar productos añadidos
// Manager1.getProducts()

//Buscar producto por ID
// console.log("Búsqueda por ID")
// Manager1.getProductById(3)

// //Búsqueda ID inexistente
// console.log("Búsqueda ID inexistente")
// Manager1.getProductById(8)


// EDITAR PRODUCTOS
// //Mostrar productos añadidos
// Manager1.getProducts()

// // //Editar producto por ID
// // console.log("Editar por ID")
// // Manager1.updateProductById(3,{"title":"añadidobis","description":"editado2","price":1250,"thumbnail":"foto332.jpg","code":"a5z123","stock":15})

// //Búsqueda ID inexistente
// console.log("Editar ID inexistente")
// Manager1.getProductById(8)

//ELIMINAR PRODUCTOS
Manager1.getProducts()
Manager1.addProduct("añadido3", "description3", 2125, "foto3.jpg", "aXX123", 50)
Manager1.getProducts()
Manager1.deleteProductById(4)
Manager1.getProducts()
