class StageGirl {
  constructor({firstName, lastName, birthday, address, phone, image}) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
    this.address = address;
    this.phone = phone;
    this.image = image;

    this.cardContainer = document.getElementById('cards-section');
  }

  #cardClone() {
    const cardTemplate = this.cardContainer.querySelector('.card').cloneNode(true);
    this.cardContainer.appendChild(cardTemplate);
    return cardTemplate;
  }

  #fillIdCard(domTemplate) {
    const nameElement = domTemplate.querySelector('.card-name');
    const birthdayElement = domTemplate.querySelector('.card-birthday');
    const addressElement = domTemplate.querySelector('.card-address');
    const phoneElement = domTemplate.querySelector('.card-phone');
    const imageElement = domTemplate.querySelector('.card-img-container').querySelector('img');

    nameElement.innerHTML = `${this.firstName} ${this.lastName}`;
    birthdayElement.innerHTML = this.birthday;
    addressElement.innerHTML = this.address;
    phoneElement.innerHTML = this.phone;
    imageElement.src = this.image;
  }

  renderIdCard() {
    const domTemplate = this.#cardClone();
    this.#fillIdCard(domTemplate);
  }
}