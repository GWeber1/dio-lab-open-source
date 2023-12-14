class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
  
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou um ataque genérico';
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso
  const heroiMago = new Heroi('Gandalf', 1500, 'mago');
  heroiMago.atacar();
  
  const heroiGuerreiro = new Heroi('Aragorn', 35, 'guerreiro');
  heroiGuerreiro.atacar();
  
  const heroiMonge = new Heroi('Bruce Lee', 32, 'monge');
  heroiMonge.atacar();
  
  const heroiNinja = new Heroi('Hattori Hanzo', 40, 'ninja');
  heroiNinja.atacar();
  
