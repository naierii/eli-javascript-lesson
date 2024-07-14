class human {
  constructor (parameterPlayerName){
    this.hp = 100;
    this.mana = 100;
    this.attack = 100;
    this.magic = 100;

    this.playerName = parameterPlayerName;
  }

  deductHp(amountToBeDeducted){
    this.hp = this.hp - amountToBeDeducted;
  }

  checkUsername() {
    console.log(`Username is ${this.playerName}`)
  }
}

class demon {
  constructor (parameterPlayerName) {
    this.hp = 50;
    this.mana = 150;
    this.attack = 50;
    this.magic = 150;

    this.playerName = parameterPlayerName;
  }

  deductHp(amountToBeDeducted){
    this.hp = this.hp - amountToBeDeducted;
  }

  checkUsername() {
    console.log(`Username is ${this.playerName}`)
  }
}

const player1 = new human();
const player2 = new human();
const player3 = new human();
const player4 = new human();

const playerWithName = new human('Eli');
const demonClassPlayer = new demon('Reian');

console.log('player1 remaining HP:', player1.hp);
player1.deductHp(35);
console.log('player1 remaining HP:', player1.hp);