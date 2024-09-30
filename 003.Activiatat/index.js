let platos = {
  Tacos: 1,
  Pizza: 120,
  Ensalada: 40,
};
let disponibilidad;
let nombrePlato = prompt("Como se llama el plato").toLowerCase();

let platoEncontrada = false;
let confirmar = false;

bucle();
for (const key in platos) {
  if (key.toLowerCase() === nombrePlato) {
    platoEncontrada = true;
  }
}

if (platoEncontrada) {
  console.log(`Ya existe el plato ${nombrePlato}`);
  
  platos[nombrePlato.charAt(0).toUpperCase() + nombrePlato.slice(1)]--; 
  
  if (isNaN(platos[nombrePlato]) || platos[nombrePlato] <= 0) {
    console.log(`El plato ${nombrePlato} ha sido eliminado.`);
    delete platos[nombrePlato.charAt(0).toUpperCase() + nombrePlato.slice(1)];
  }
} else {
  alert(`No existe el plato ${nombrePlato}!`);
  confirmar = confirm("¿Quieres agregar el plato nuevo?");
}

if (confirmar) {
  disponibilidad = parseInt(prompt("¿Cuántos platos deseas agregar?"), 10);
  if (!isNaN(disponibilidad) && disponibilidad > 0) {
    platos[nombrePlato.charAt(0).toUpperCase() + nombrePlato.slice(1)] = disponibilidad;
    console.log(`Se agregó el plato ${nombrePlato} con ${disponibilidad} disponibles.`);
  } else {
    console.log("Entrada inválida para la cantidad de platos.");
  }
}

console.log("Línea nueva:");

function bucle() {
  for (const key in platos) {
    console.log(key.toLowerCase() + " " + platos[key]);
  }
}

bucle();