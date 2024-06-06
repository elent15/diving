function showMore() {
  const moreBtns = document.querySelectorAll('.more-btn');
  let step;

  if (moreBtns.length > 0) {
    moreBtns.forEach(moreBtn => {
      moreBtn.addEventListener('click', (e) => {
        const moreBtn = e.target;
        const moreCardsBlock = moreBtn.closest('section').querySelector('.more-cards-block');
        const invisibleCards = Array.from(moreCardsBlock.querySelectorAll('.none'));

        step = (document.documentElement.clientWidth > 1470) ? 10 : 5;

        invisibleCards.splice(0, step).forEach(card => {
          card.classList.remove('none');
        });

        if (invisibleCards.length === 0) {
          moreBtn.classList.add('none');
        }
      });
    });
  }
}

showMore();
