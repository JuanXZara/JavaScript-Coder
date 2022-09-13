const suma = (a,b) => a + b
const resta = (a,b) => a - b
const iva = x => x * 0.21
const descuentoA = x => x * 0.95
const descuentoB = x => x * 0.90
const descuentoC = x => x * 0.80

let precioProducto = 7500


let nuevoPrecio = suma(precioProducto, iva(precioProducto))

alert ("Bienvenido a nuestra tienda virtual")

let cantProducto = parseInt(prompt("¿Cuantas prendas desea llevar?"))
if (cantProducto === 1){
  alert("Recibiste un descuento del 5%")
  alert("El total a pagar es $" +(descuentoA(nuevoPrecio*cantProducto)))
}  else if (cantProducto === 2){
  alert("Recibiste un descuento del 10%")
  alert("El total a pagar es $" +(descuentoB(nuevoPrecio*cantProducto)))
} else if (cantProducto > 2){
  alert("Recibiste un descuento del 20%")
  alert("El total a pagar es $" +(descuentoC(nuevoPrecio*cantProducto)))
}
alert ("Muchas gracias por su compra")