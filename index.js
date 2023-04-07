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

	draw() {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, Math.PI * 2, false);
		c.fillStyle = this.color;
		c.fill();
	}
}

/*
 - agora  vamos partir pra colocar no meio da tela o jogador
 onde para isso vamos pegar a largura total da tela dividir por 2
 para cada eixo...x e y
*/

const x = canvas.width / 2;
const y = canvas.height / 2;

const player = new Player(x, y, 30, " blue");
player.draw();

console.log(player);
