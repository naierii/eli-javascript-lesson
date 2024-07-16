class Entity {
  contructor(){
  }

  logHp(){
    console.log(this.hp);
  }

  logAttack() {
    console.log(this.attack);
  }
}

class Player extends Entity {
  constructor(){
    super();
    this.hp = 100;
    this.attack = 100;
    this.defense = 100;
  }
}

class Npc extends Entity{
  constructor(){
    this.hp = 100;
    this.attack = 100;
    this.defense = 100;
  }
}

const player1 = new Player();
player1.logHp();