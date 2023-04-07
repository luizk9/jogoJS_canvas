const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d"); // c de contexto

canvas.width = innerWidth;
canvas.height = innerHeight;
/* agora vamos verificar o contexto
no console onde veremos um array */
console.log(c);
