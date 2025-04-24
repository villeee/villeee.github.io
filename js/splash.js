window.addEventListener('load', () => {
  const splash = document.getElementById('splash-screen');

  setTimeout(() => {
    splash.classList.add('fade-out');
    setTimeout(() => {
      splash.remove();
    }, 1000); // Wait for fade-out transition to finish
  }, 2000); // Show splash for 2 seconds
});
