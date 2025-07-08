document.addEventListener('DOMContentLoaded', () => {
  const sendButton = document.getElementById('send-email');
  if (!sendButton) return;

  // Puedes editar estos valores si los cambias en el HTML
  const email = "pabloaxel.rojas@gmail.com";
  const subject = "Hola, vi tu página web";
  const body = "¡Hola Pablo! Vi tu portafolio y me gustaría contactarte.";

  sendButton.addEventListener('click', () => {
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailLink, '_blank');
  });
});
