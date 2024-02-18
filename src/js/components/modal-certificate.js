const modalCertificate = () => {
  const btns = Array.from(document.querySelectorAll('.modal-certificate__card'));
  const nominalBtns = Array.from(document.querySelectorAll('.modal-certificate__nominal-btn'));

  if (btns) {
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (!btn.classList.contains('modal-certificate__card--active')) {
          btns.forEach(btn => {
            btn.classList.remove('modal-certificate__card--active')
          });
          btn.classList.add('modal-certificate__card--active');
        }
      });
    });
  }

  if (nominalBtns) {
    nominalBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (!btn.classList.contains('modal-certificate__nominal-btn--active')) {
          nominalBtns.forEach(btn => {
            btn.classList.remove('modal-certificate__nominal-btn--active')
          });
          btn.classList.add('modal-certificate__nominal-btn--active');

          const values = Array.from(document.querySelectorAll('.modal-certificate__item-value'));
          const price = btn.innerText.slice(0, -1).replace(/\s/g, '');
          const percent = values[1].innerText.slice(0, -1).trim();
          const amount = price - price * percent / 100;

          values[0].innerText = btn.innerText;
          values[2].innerText = amount.toLocaleString() + ' ₽';
        }
      });
    });
  }
}

modalCertificate();
