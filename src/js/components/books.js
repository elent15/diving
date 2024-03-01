function calculateSum(book) {

  const textContent = book.querySelector('.books__card-price').textContent;
  const price = parseInt(textContent.replace(/[^\d]/g, ''));
  const percent = 10;
  const amount = price - price * percent / 100;

  return {
    price,
    amount
  }
}

function showSum (booksValues, price, amount) {

  booksValues[0].textContent = price.toLocaleString() + ' ₽';
  booksValues[2].textContent = amount.toLocaleString() + ' ₽';
}

const books = () => {
  const books = Array.from(document.querySelectorAll('.books__card'));
  const booksValues = Array.from(document.querySelectorAll('.books__form-item-value'));

  if (books) {
    books.forEach(book => {
      book.addEventListener('click', () => {

        if (!book.classList.contains('books__card--active')) {
          books.forEach(e => {
            e.classList.remove('books__card--active')
          });
          book.classList.add('books__card--active');

          const {price, amount} = calculateSum(book);
          showSum(booksValues, price, amount);
        }
      });
    });
  }
}

books();
