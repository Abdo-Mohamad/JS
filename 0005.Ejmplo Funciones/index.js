/* let edad = 18;

let resultat = edad >= 18 ? " Pots votar!" : " No, no pots votar"; // se busca se es true o  false y se ejecuta la primera o segunda opción

console.log(edad >= 18 ? " Pots votar!" : " No, no pots votar"); // se busca se es true o  false y se ejecuta la primera o segunda opción

console.log(resultat); // se busca se es true o  false y se ejecuta la primera o segunda opción

function miFuncion(edad) {
  console.log("Ejectado dese la funcion!" + edad);
}

miFuncion(18);

let edaD;

function miFuncion2() {
  console.log("Ejectado dese la funcion 2!");
  edaD = 18;
}

miFuncion2();

let edat = 25,
  sueldo = 500,
  prima = 1000;

function calcularNouSou(edat, sueldo, prima) {
  if (edat >= 50) {
    return sueldo + prima;
  }
  return sueldo;
}

sueldo = calcularNouSou(edat, sueldo, prima);

// console.log(sueldo(edat, sueldo, prima)); // no se puede llamar

console.log(sueldo); */
let not1 = 10,
  not2 = 4;

function calcularNotaMeda(not1, not2) {
  let suma = not1 + not2;
  console.log(arguments.length + " arguments");
  if (arguments.length < 2) {
    console.log("No se pude ecejutar");
  } else {
    for (let i = calcularNotaMeda.length; i < arguments.length; i++) {
      const element = arguments[i];
      //suma = element + suma;
      suma += element;
      console.log(element + "elemento");
    }
    let totalNotas = arguments.length;

    console.log(totalNotas + " not total");

    let media = suma / totalNotas;

    console.log("sum total de las nota:", suma);
    console.log("meda de las nota", media);
  }
}

calcularNotaMeda(not1,not2);
