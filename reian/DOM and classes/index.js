/**
 * Use class
 * Fill out the last two cards with Maya and Claudine's data
 */

class card{
  constructor(stageGirlData){
    this.stageGirlData = stageGirlData;
  }

  fillCard(dom) {
    /**
     * create an algorithm inside this 
     * method that uses the "dom" parameter
     */

    const cardImg = dom
      .querySelector('.card-img-container')
      .querySelector('img')

    const cardName = dom.querySelector('.card-name')
    const cardBirthday = dom.querySelector('.card-birthday')
    const cardAddress = dom.querySelector('.card-address')
    const cardPhone = dom.querySelector('.card-phone')

    cardImg.src = this.stageGirlData.image;
    cardName.innerHTML = `${this.stageGirlData.firstName} ${this.stageGirlData.lastName}`;
    cardBirthday.innerHTML = this.stageGirlData.birthday;
    cardAddress.innerHTML = this.stageGirlData.address;
    cardPhone.innerHTML = this.stageGirlData.phone;
  }
}

const mayaData = stageGirls.find(function(ghorl){
  return ghorl.firstName === 'Maya';
});
const claudineData = stageGirls.find(function(ghorl){
  return ghorl.firstName === 'Claudine';
});

const mayaCard = new card(mayaData);
const claudineCard = new card(claudineData);

const cardsDom = document.querySelectorAll('.card');
const thirdCardDom = cardsDom[2]
const fourthCardDom = cardsDom[3]

/**
 * Then use fillCard method you made from mayaCard and 
 * claudineCard to fill the details in the 3rd dom
 * and 4th dom
 */

mayaCard.fillCard(thirdCardDom);
claudineCard.fillCard(fourthCardDom);