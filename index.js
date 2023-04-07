const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d"); // c de contexto

canvas.width = innerWidth;
canvas.height = innerHeight;
/* 
 # agora vamos criar o jogado, que
 tem suas propriedas(tamanho,
    cor, ), onde para isso
 vamos criar uma classe. onde cada jogador
 criado vai ter essas propriedades comuns
 criadas de um construtor no seu inicio(instancia)

*/

class Player {
	constructor(x, y, radius, color) {
		(this.x = x),
			(this.y = y),
			(this.radius = radius),
			(this.color = color);
	}
	/*  
  - para podermos desenhar o jogador
  usamos a função draw()
*/
	draw() {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, Math.PI * 2, false);
		c.fillStyle = this.color;
		c.fill();
	}
}

/*  iniciamos um jogador 
 com eixo vertical e horizontal de 100,
 raio de 30 e cor azul */
const player = new Player(100, 100, 30, " blue");
player.draw();
// lançando no console
console.log(player);
