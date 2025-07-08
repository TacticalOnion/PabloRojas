document.addEventListener('DOMContentLoaded', () => {
  const copyButtons = document.querySelectorAll('.copy-email-btn');
  const alertBox = document.getElementById('copy-email-alert');
  if (!copyButtons.length) return;

  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText('pabloaxel.rojas@gmail.com')
        .then(() => {
          alertBox.classList.add('show');
          setTimeout(() => alertBox.classList.remove('show'), 2000);
        });
    });
  });
});
