const cardsSection = document.getElementById('cards-section');

cardsSection
.querySelectorAll('.card')
.forEach((element, i) => {
  i !== 0 && element.remove();
});

for (let i = 0; i < stageGirls.length; i++) {
  const stageGirl = new StageGirl(stageGirls[i]);
  stageGirl.renderIdCard();
}

cardsSection.querySelector('.card').remove();