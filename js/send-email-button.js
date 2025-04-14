const email = "pabloaxel.rojas@gmail.com";
const subject = "Hola, vi tu página web";
const body = "¡Hola Pablo! Vi tu portafolio y me gustaría contactarte.";

document.getElementById('send-email').addEventListener('click', () => {
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(gmailLink, '_blank');
});
