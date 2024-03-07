// gift card
const calculateSum = (values, card) => {

  const textContent = card.querySelector('.gift-card__price').textContent;
  const price = parseInt(textContent.replace(/[^\d]/g, ''));
  const percent = values[1].textContent.slice(0, -1).trim();
  const amount = price - price * percent / 100;

  return {
    price,
    amount
  }
}

const showSum = (values, price, amount) => {

  values[0].textContent = price.toLocaleString() + ' ₽';
  values[2].textContent = amount.toLocaleString() + ' ₽';
}

const giftCards = () => {
  const giftCards = Array.from(document.querySelectorAll('.gift-card'));
  const formValues = Array.from(document.querySelectorAll('.form-block__item-value'));

  if (giftCards.length) {

    if (giftCards[1].querySelector('.gift-card__price')) {
      let { price, amount } = calculateSum(formValues, giftCards[1]);
      showSum(formValues, price, amount);
    }

    giftCards.forEach(card => {
      card.addEventListener('click', () => {

        if (!card.classList.contains('gift-card--active')) {
          giftCards.forEach(e => {
            e.classList.remove('gift-card--active')
          });
          card.classList.add('gift-card--active');

          if (card.querySelector('.gift-card__price')) {
            const { price, amount } = calculateSum(formValues, card);
            showSum(formValues, price, amount);
          }
        }
      });
    });
  }
}

giftCards();
