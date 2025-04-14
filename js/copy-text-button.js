const copyButton = document.getElementById('copy-email');
const textToCopy = 'pabloaxel.rojas@gmail.com';


copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        const alertBox = document.getElementById('copy-email-alert');
        alertBox.style.display = 'block';
        setTimeout(() => {
          alertBox.style.display = 'none';
        }, 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  });
  