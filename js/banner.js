// banner.js - Funcionalidad para los tabs
document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tab');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // Remover clase active de todos los tabs
      tabs.forEach(t => t.classList.remove('active'));
      
      // Añadir clase active al tab clickeado
      this.classList.add('active');
      
      // Obtener el tab id
      const tabId = this.getAttribute('data-tab');
      
      // Aquí puedes añadir lógica para cambiar contenido
      console.log(`Mostrando sección: ${tabId}`);
      
      // Ejemplo: Scroll a la sección correspondiente
      const section = document.getElementById(tabId);
      if(section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
    
    // Efecto hover mejorado
    tab.style.transition = 'all 0.3s ease';
  });
  
  // Opcional: Efecto de máquina de escribir para el título
  const title = document.querySelector('.portfolio-title');
  if(title) {
    const text = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const typeWriter = setInterval(() => {
      if(i < text.length) {
        title.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(typeWriter);
      }
    }, 100);
  }
});
