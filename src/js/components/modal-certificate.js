// modal certificate
function modalCertificate() {
  const modalCertificate = document.querySelector('.modal-certificate');

  if (modalCertificate) {
    const modalCard = modalCertificate.querySelector('.gift-card--active');
    const modalCardActive = Array.from(modalCertificate.querySelectorAll('.gift-card'))[1];

    modalCard.classList.remove('gift-card--active');
    modalCardActive.classList.add('gift-card--active');
  }
}
