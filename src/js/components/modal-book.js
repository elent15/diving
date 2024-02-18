const modalBook = () => {
  const modalBookBtns = Array.from(document.querySelectorAll(`[data-modal='modal-book']`));
  const modalBook = document.getElementById('modal-book');

  if (modalBookBtns && modalBook) {
    const modalTitle = modalBook.querySelector('.modal-book__title');

    modalBookBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.classList.contains('moskvarium')) {
          modalTitle.innerText = 'Заявка на погружение в «Москвариум»'
        } else if (btn.classList.contains('crocus-city')) {
          modalTitle.innerText = 'Заявка на погружение в «Крокус Сити Океанариум»'
        }
      });
    });
  }
}

modalBook();
