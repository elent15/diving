// accordion
const accordion = () => {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(accordion => {
    accordion.addEventListener('click', (el) => {
      const self = el.currentTarget;
      const trigger = self.querySelector('.accordion__trigger');
      const content = self.querySelector('.accordion__content');

      if (self.classList.contains('accordion')) {
        self.classList.toggle('accordion--active');
      }

      if (self.classList.contains('accordion--active')) {
        trigger.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        trigger.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
        content.style.maxHeight = null;
      }
    });
  });
}

accordion();
