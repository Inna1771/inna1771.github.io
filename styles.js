// Efecto hover mejorado para los badges
document.querySelectorAll('.aws-badge').forEach(badge => {
  badge.addEventListener('mouseenter', () => {
    badge.style.transition = 'all 0.3s ease';
  });
});

// Animación del workflow al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  const steps = document.querySelectorAll('.step');
  steps.forEach((step, index) => {
    step.style.animationDelay = `${index * 0.5}s`;
  });
});
