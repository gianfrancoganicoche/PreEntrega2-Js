let carrito = []

let Nombre = prompt ("Bienvenido/a.\nPor favor, ingrese su nombre:");
while (Nombre == ""){
    alert ("Debes ingresar tu nombre");
    Nombre = prompt ("Ingrese su nombre");
}

alert (`Gracias por elegirnos ${Nombre} \nEstos son los productos que tenemos en stock:`)
let catalogo = Productos.map ((item) => item.nombre + ", $" + item.precio + "\n")
alert (catalogo.join("\n"))

let respuesta = prompt ("Desea comprar alguno de nuestros productos? Si / No")
respuestaLC = respuesta.toLowerCase()
while (respuestaLC != "si" && respuestaLC != "no"){
    alert ("Por favor, ingresa Si o No")
    respuesta = prompt ("Desea comprar alguno de nuestros productos? Si / No")
    respuestaLC = respuesta.toLowerCase()
}
if (respuestaLC == "no"){
    alert ("No hay problema! Esperamos verte pronto 👋")
}
while (respuestaLC == "si"){
    let item = prompt ("Por favor, agrega un producto al carrito 🛒")
    let precio = 0;

    //Casos de productos validos
if (item == "remera" || item == "camisa" || item == "pantalon" || item == "campera" || item == "zapatillas")
{
    switch(item){
    case "remera":
        precio = 890
        break;
    case "camisa":
        precio = 1290
        break;
    case "pantalon":
        precio = 1890
        break;
    case "campera":
        precio = 2490
        break;
    case "zapatillas":
        precio = 3590
        break;
    default:
        break;
    }
    let cantidad = parseInt (prompt(`Cuantas unidades de ${item} desea comprar?`))
    carrito.push ({item,cantidad,precio})
} 

else {
    alert ("El producto que elegiste no es valido \nSolo tenemos remera, camisa, pantalon, campera y zapatilla")
}

respuesta = prompt ("Desea continuar comprando? 🔁 Si / No") 
respuestaLC = respuesta.toLowerCase ()
while (respuestaLC == "no"){
    carrito.forEach((compraFinal) => {
        console.log (`Producto: ${compraFinal.item} Cantidad: ${compraFinal.cantidad} Total a pagar por este producto: ${compraFinal.precio*compraFinal.cantidad}`)
    })
    alert ("Gracias por tu compra!")

    const total = carrito.reduce ((acumulador,item) => acumulador + item.precio * item.cantidad, 0)
    alert (`El total a pagar por su compra es de $${total}, para retirar los productos pasa por Montevideo Shopping!`)

    break
}
}

