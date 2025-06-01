document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', function() {
    // 1. Remover clase 'active' de todos los tabs
    document.querySelectorAll('.tab').forEach(t => {
      t.classList.remove('active');
    });
    
    // 2. Añadir clase 'active' al tab clickeado
    this.classList.add('active');
    
    // 3. Cambiar contenido (ejemplo)
    const tabId = this.getAttribute('data-tab');
    console.log(`Mostrando pestaña: ${tabId}`);
  });
});
