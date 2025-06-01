// Añadir para inicializar tooltips
document.querySelectorAll('.aws-badge').forEach(badge => {
  badge.setAttribute('data-tooltip', badge.querySelector('p').textContent);
});
