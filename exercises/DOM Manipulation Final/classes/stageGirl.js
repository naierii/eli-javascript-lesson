class StageGirl {
  constructor({
    firstName,
    lastName,
    image, 
    hp, 
    attack, 
    defense, 
    spAttack, 
    spDefense, 
    speed
  }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.image = image;

    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.spAttack = spAttack;
    this.spDefense = spDefense;
    this.speed = speed;

    this.cardContainer = document.getElementById('cards-section');
  }

  #cardClone() {
    const cardTemplate = this.cardContainer.querySelector('.card').cloneNode(true);
    this.cardContainer.appendChild(cardTemplate);
    return cardTemplate;
  }

  #fillIdCard(domTemplate) {
    const nameElement = domTemplate.querySelector('.card-name');
    const imageElement = domTemplate.querySelector('.card-img-container').querySelector('img');
    
    const hpElement = domTemplate.querySelector('.hp');
    const attackElement = domTemplate.querySelector('.attack');
    const defenseElement = domTemplate.querySelector('.defense');
    const spAttackElement = domTemplate.querySelector('.sp-attack');
    const spDefenseElement = domTemplate.querySelector('.sp-defense');
    const speedElement = domTemplate.querySelector('.speed');

    nameElement.innerHTML = `${this.firstName} ${this.lastName}`;
    imageElement.src = this.image;

    hpElement.innerHTML = this.hp;
    attackElement.innerHTML = this.attack;
    defenseElement.innerHTML = this.defense;
    spAttackElement.innerHTML = this.spAttack;
    spDefenseElement.innerHTML = this.spDefense;
    speedElement.innerHTML = this.speed;
  }

  renderIdCard() {
    const domTemplate = this.#cardClone();
    this.#fillIdCard(domTemplate);
  }
}