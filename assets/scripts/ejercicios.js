let miNombre = "Felipe";
let miApellido = "Campos";
let miEdad = 29;
let miMascota = "Chubi";
let edadMascota = 6;
console.log(miNombre);
console.log(miApellido);
console.log(miEdad);
console.log(miMascota);
console.log(edadMascota);
let nombreCompleto = miNombre + " " + miApellido;
let textoPresentacion = "Mi nombre es " + nombreCompleto + " tengo " + miEdad + " años y mi perrita se llama " + miMascota + " y tiene " + edadMascota + " años.";
let sumaEdades = miEdad + edadMascota;
let restaEdades = miEdad - edadMascota;
let productoEdades = miEdad*edadMascota;
let divisionEdades = miEdad/edadMascota;
let direccion = "10880 Malibu Point, 90265, Malibú, California"
let alumno = {
    nombre : miNombre,
    apellido : miApellido,
    edad : miEdad,
    nombreCompleto : nombreCompleto,
    direccion : direccion,
}
console.table(alumno)
console.log(alumno.nombre)
console.log(alumno.apellido)
console.log(alumno.nombreCompleto)
console.log(alumno.edad)
console.log(alumno.direccion)
let mascota = {
    nombre : miMascota,
    edad : edadMascota,
    raza : "mestiza",
    especie : "perro",
    sexo : "hembra",
}
console.table(mascota)
console.log(mascota.nombre)
console.log(mascota.edad)
console.log(mascota.raza)
console.log(mascota.especie)
console.log(mascota.sexo)
let frutas = ["naranja", "manzana", "platano", "pera", "durazno"]
console.log(frutas)
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])
let soyMayorDeEdad = ( prompt("Ingrese su edad") >= 18 )
console.log("Soy mayor de edad " + soyMayorDeEdad)
let numeros = [99 , 66, 33, 27, 69]
console.log(numeros)
console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])
let familia = ["mamá", "papá", "hermanos", "abuelos", "tios"]
console.log(familia)
console.log(familia[0])
console.log(familia[1])
console.log(familia[2])
console.log(familia[3])
console.log(familia[4])
let textoAleatorio = frutas[1] + " " + numeros[3] + " " + familia[4]
let edad1 = prompt("Ingrese edad del primer alumno")
let edad2 = prompt("Ingrese edad del segundo alumno")
let edadesIguales = (edad1 == edad2)
let soyMayor = (edad1 > edad2)
let soyMenor = (edad1 < edad2)
console.log("Mi edad es igual a la de mi compañero:" + edadesIguales)
console.log("Mi edad es mayor a la de mi compañero:" + soyMayor)
console.log("Mi edad es menor a la de mi compañero:" + soyMenor)
let edad = prompt("Ingrese su edad")
let altura = prompt("Ingrese su altura")
let puedeSubir = (edad>6 && altura>120)
console.log("Puede subir a la atracción " + puedeSubir)
let pase = prompt("Ingrese el pase de la persona")
let saldo = prompt("Ingrese el saldo que dispone")
let puedePasar = (pase == "VIP" || saldo > 1000)
console.log("La persona puede pasar " + puedePasar)