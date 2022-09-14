const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = (x) => x * 0.21;
const descuentoA = (x) => x * 0.95;
const descuentoB = (x) => x * 0.9;
const descuentoC = (x) => x * 0.8;
let total;

let precioProducto = 7500;

let nuevoPrecio = suma(precioProducto, iva(precioProducto));

alert("Bienvenido a nuestra tienda virtual");

let cantProducto = parseInt(prompt("¿Cuantas prendas desea llevar?"));

while (!cantProducto) {
  //Validamos  que mande info!!
  cantProducto = parseInt(prompt("¿Cuantas prendas desea llevar?"));
}

if (cantProducto === 1) {
  alert("Recibiste un descuento del 5%");
  total = descuentoA(nuevoPrecio * cantProducto);
  alert(`El total a pagar es $${total}`);
} else if (cantProducto === 2) {
  alert("Recibiste un descuento del 10%");
  total = descuentoB(nuevoPrecio * cantProducto);
  alert(`El total a pagar es $${total}`);
} else if (cantProducto > 2) {
  alert("Recibiste un descuento del 20%");
  total = descuentoC(nuevoPrecio * cantProducto);
  alert(`El total a pagar es $${total}`);
}

const eleccion = prompt(
  "Quiere pagar en cuotas? \n\n A) si \n B) no"
).toUpperCase();

if (eleccion === "A") {
  const cuotas = parseInt(prompt("Cuantas cuotas? \n\n 3-6-12"));
  while (cuotas === 3 || cuotas === 6 || cuotas === 12) {
    switch (cuotas) {
      case 3:
        alert(`El total en 3 cuotas es de ${total / 3} por cuota`);
        break;
      case 6:
        alert(`El total en 6 cuotas es de ${total / 6} por cuota`);
        break;
      case 12:
        alert(`El total en 12 cuotas es de ${total / 12} por cuota`);
        break;
      default:
        break;
    }
    alert("Muchas gracias por su compra");
  }

  alert("Por favor, ingrese 3, 6 o 12 cuotas!");
  cuotas = parseInt(prompt("Quiere pagar en cuotas? \n\n 3-6-12"));
} else {
  alert("Muchas gracias por su compra");
}

//A esto le podes sumar el porcentaje dentro del switch!
