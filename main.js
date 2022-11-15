const Pizzas = [
  {
    nombre: "Hawaiana",
    id: 1,
    ingredientes: ["Piña", "Jamon", "Queso"],
    precio: 566,
  },

  {
    nombre: "Jamon y Queso",
    id: 2,
    ingredientes: ["Jamon", "Queso"],
    precio: 566,
  },

  {
    nombre: "Mexicana",
    id: 3,
    ingredientes: ["Carne desmechada", "Nachos", "Queso"],
    precio: 727,
  },

  {
    nombre: "Samba",
    id: 4,
    ingredientes: ["Maduro", "Maiz", "Tocineta", "Jamon", "Queso"],
    precio: 727,
  },

  {
    nombre: "Vegetariana",
    id: 5,
    ingredientes: [
      "Tomate",
      "Oregano",
      "Cebolla",
      "Pimentón",
      "Champiñon",
      "Queso",
    ],
    precio: 889,
  },

  {
    nombre: "Napolitana",
    id: 6,
    ingredientes: ["Tomate", "Oregano", "Queso"],
    precio: 889,
  },

  {
    nombre: "Atlantias Americana",
    id: 7,
    ingredientes: ["Salchicha", "Jamon", "Tocineta", "Queso"],
    precio: 889,
  },
];

const idImpares = Pizzas.filter((pizza) => {
  return pizza.id % 2 === 1;
});
console.log(`A)`);
idImpares.forEach((pizza) => {
  console.log(`La pizza ${pizza.nombre} tiene ID impar.`);
});

console.log(`B)`);

const pizzasmenoresa600 = (precio) => {
  return Pizzas.some((pizza) => {
    return pizza.precio < precio;
  })
    ? console.log(`Si hay pizzas que cuestan mas de $${precio}`)
    : console.log(`No hay pizzas que cuestan mas de $${precio}`);
};

pizzasmenoresa600(600);

console.log(`C)`);

const nombreypreciopizza = Pizzas.filter((pizza) => {
  return pizza.nombre && pizza.precio;
});

nombreypreciopizza.forEach((pizza) => {
  console.log(`La pizza ${pizza.nombre} tiene un precio de $${pizza.precio}`);
});

console.log(`D)`);

const pizzaconingredientes = Pizzas.filter((pizza) => {
  return pizza.nombre && pizza.ingredientes;
});

pizzaconingredientes.forEach((pizza) => {
  console.log(`Los ingredientes de ${pizza.nombre} son: ${pizza.ingredientes}`);
});
