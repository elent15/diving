// селект
const select = () => {
  const selectInput = document.querySelectorAll('.select__input');

  let select,
    selectDropdown,
    selectItems,
    id;

  const selectChoose = (item) => {
    const text = item.target.innerText;
    const currentText = select.querySelector('.select__current');

    currentText.innerText = text;
    select.classList.remove('select--open');
    select.querySelector('.select__dropdown').classList.remove('select--open');
  }

  selectInput.forEach(input => {
    input.addEventListener('click', () => {
      select = input.parentNode;
      id = select.id;
      selectDropdown = select.querySelector('.select__dropdown');
      selectItems = selectDropdown.querySelectorAll('.select__item');

      document.querySelectorAll('.select').forEach((el) => {
        if (el !== select && el.classList.contains('select--open')) {
          el.classList.remove('select--open');
          el.querySelector('.select__dropdown').classList.remove('select--open');
        }
      });

      select.classList.toggle('select--open');
      selectDropdown.classList.toggle('select--open');

      selectItems.forEach((item) => {
        item.addEventListener('click', selectChoose);
        item.addEventListener('keyup', (el) => {
          if (el.code === 'Enter') {
            selectChoose(el);
          }
        });
      });
    });
  });

  document.addEventListener('click', (el) => {
    const selectOpen = document.querySelectorAll('.select--open');

    if (selectOpen.length) {
      const target = el.target;
      const itsSelect = target == select || select.contains(target);

      if (!itsSelect && select.classList.contains('select--open')) {
        select.classList.remove('select--open');
        selectDropdown.classList.remove('select--open');
      }
    }
  });
}

select();
