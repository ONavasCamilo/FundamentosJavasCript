/* 3️⃣ ***** EJERCICIO 3 ***** - sumarCostos() 3️⃣

Necesitamos cerrar las cuentas del hospital antes de que termine el mes. Hay que calcular el total de los gastos 
medicos del paciente. Para esto, crea una función que recibe un número (precio) y devuelva otra función. Esta
segunda función, a su vez, debe recibir otro número. Finalmente se deben sumar ambos números y retornar el resultado.
Estarás construyendo una closure.

📝 EJEMPLO 📝
const suma = sumarCostos(15)
suma(5) ------> 20

REQUISITOS
🟢 Si la función recibe por parámetro un cero, entonces debe devolver false.
*/

function sumarCostos(precios) {
  const precio = precios
  // Tu código aquí:
  return function(precioDos){
    if(precios === 0) return false
    return precio + precioDos
  }
}
const resultado = sumarCostos(10) 
resultado(20)
resultado(30)


// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  sumarCostos,
};
