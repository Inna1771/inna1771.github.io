/* Variables de color */
:root {
  --aws-blue: #232f3e;
  --aws-dark-blue: #1a2533;
  --aws-orange: #ff9900;
  --aws-light-orange: #ffad33;
}

/* Estilos generales */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  background-color: #f5f5f5;
  color: #333;
}

/* Banner */
.code-banner {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: linear-gradient(135deg, var(--aws-blue) 0%, var(--aws-dark-blue) 100%);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
}

.banner-tabs {
  display: flex;
  height: 100%;
}

.tab {
  color: white;
  padding: 0 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
}

.tab:hover {
  background: rgba(255, 255, 255, 0.1);
}

.tab.active {
  background: rgba(255, 153, 0, 0.2);
  border-bottom: 3px solid var(--aws-orange);
}

/* Sidebar */
.sidebar {
  width: 250px;
  height: calc(100vh - 60px);
  background: var(--aws-blue);
  color: white;
  padding: 20px;
  position: fixed;
  top: 60px;
  overflow-y: auto;
}

/* ... (resto de tus estilos existentes) ... */
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

/* Contenido principal */
main {
  margin-left: 250px;
  margin-top: 60px;
  padding: 30px;
  min-height: calc(100vh - 60px);
}
