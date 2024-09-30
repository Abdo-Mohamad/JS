/* let frutas = ["test", "test2"];

let buscarFrutas = prompt("¿Cómo se llama la fruta?");

if (frutas.includes(buscarFrutas)) {
  console.log(`Ya existe la fruta ${buscarFrutas}`);
} else {
  console.log(`No existe la fruta ${buscarFrutas}`);
  frutas.push(buscarFrutas);
}

console.log(frutas); */

// variables
let frutas = ["Manzana", "Banana", "Naranja"];

let buscarFrutas = prompt("¿Cómo se llama la fruta?");
let frutaEncontrada = false;

frutas.forEach((fruta) => {
  if (fruta.toUpperCase() === buscarFrutas.toLocaleUpperCase()) {
    frutaEncontrada = true;
  }
});

if (frutaEncontrada) {
  console.log(`Ya existe la fruta ${buscarFrutas}`);
} else {
  console.log(`No existe la fruta ${buscarFrutas}!`);
  frutas.push(buscarFrutas.toLocaleLowerCase());
  console.log(frutas.push(buscarFrutas.toLocaleLowerCase()));
  
}
console.log(` la lista nueva de la frutas`);

document.getElementById("title").innerText = "Lista nueva de los frutas"; // Update the title text

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  console.log(frutas[i][0].toUpperCase());

  document.getElementById("fruta").innerHTML += frutas[i] =
    frutas[i][0].toUpperCase() + frutas[i].substring(1) + "<br>"; // Append each fruit and a line break
}

/* let eliminado = frutas.shift();
console.log(eliminado +" sdgsgsdag"); */

console.log(typeof buscarFrutas);
