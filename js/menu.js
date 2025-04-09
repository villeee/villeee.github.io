document.addEventListener('DOMContentLoaded', () => {
  const hamMenu = document.querySelector('.ham-menu');
  const offScreenMenu = document.querySelector('.off-screen-menu');
  const offScreenLinks = offScreenMenu.querySelectorAll('a');

  hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active'); // Toggle animation for ham-menu
    offScreenMenu.classList.toggle('active'); // Toggle visibility
  });

  offScreenLinks.forEach((link) => {
    link.addEventListener('click', () => {
      hamMenu.classList.remove('active'); // Reset animation
      offScreenMenu.classList.remove('active'); // Close menu
    });
  });

  // Ensure menu closes if clicked outside
  document.addEventListener('click', (event) => {
    if (
      !hamMenu.contains(event.target) &&
      !offScreenMenu.contains(event.target)
    ) {
      hamMenu.classList.remove('active'); // Reset animation
      offScreenMenu.classList.remove('active'); // Close menu
    }
  });
});
