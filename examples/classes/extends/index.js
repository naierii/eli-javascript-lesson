class Entity {
  constructor(entityType){
    console.log(`I am a ${entityType}`);
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
    super('Player');
    this.hp = 100;
    this.attack = 100;
    this.defense = 100;
  }
}

class Npc extends Entity{
  constructor(){
    super('NPC');
    this.hp = 100;
    this.attack = 100;
    this.defense = 100;
  }
}

const player1 = new Player();
const npc1 = new Npc();