// form cost
const calcValues = (values, btn) => {

  const price = btn.textContent.slice(0, -1).replace(/\s/g, '');
  const percent = values[1].textContent.slice(0, -1).trim();
  const amount = price - price * percent / 100;

  return amount;
}

const showValues = (values, btn, amount) => {

  values[0].textContent = btn.textContent;
  values[2].textContent = amount.toLocaleString() + ' ₽';
}

const cost = () => {
  const nominalBtns = Array.from(document.querySelectorAll('.form-block__nominal-btn'));

  if (nominalBtns.length) {
    const nominalBtnsActive = document.querySelector('.form-block__nominal-btn--active');
    const values = Array.from(document.querySelectorAll('.form-block__item-value'));

    nominalBtnsActive.classList.remove('form-block__nominal-btn--active');
    nominalBtns[0].classList.add('form-block__nominal-btn--active');

    let amount = calcValues(values, nominalBtns[0]);
    showValues(values, nominalBtns[0], amount);

    nominalBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (!btn.classList.contains('form-block__nominal-btn--active')) {
          nominalBtns.forEach(btn => {
            btn.classList.remove('form-block__nominal-btn--active')
          });
          btn.classList.add('form-block__nominal-btn--active');

          amount = calcValues(values, btn);
          showValues(values, btn, amount);
        }
      });
    });
  }
}

cost();
