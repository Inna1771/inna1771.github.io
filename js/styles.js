/* Variables de color */
:root {
  --aws-blue: #232f3e;
  --aws-dark-blue: #1a2533;
  --aws-orange: #ff9900;
  --aws-light-orange: #ffad33;
}

/* Banner Superior */
.portfolio-header {
  position: relative;
  height: 250px;
  width: 100%;
  overflow: hidden;
}

.code-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../images/code_background.jpg');
  background-size: cover;
  opacity: 0.7;
  z-index: 0;
}

.portfolio-title {
  position: relative;
  z-index: 1;
  font-size: 4rem;
  font-weight: 800;
  color: white;
  text-align: center;
  margin-top: 50px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-family: 'Montserrat', sans-serif;
}

/* Barra de navegación */
.code-banner {
  position: relative;
  z-index: 2;
  width: 100%;
  background: rgba(35, 47, 62, 0.9);
}

.banner-tabs {
  display: flex;
  justify-content: center;
  height: 60px;
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

.profile-section {
  text-align: center;
  margin-bottom: 25px;
}

.profile-photo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--aws-orange);
  margin: 0 auto 15px;
  display: block;
}

/* ... (resto de tus estilos para sidebar) ... */

/* Contenido principal */
main {
  margin-left: 250px;
  margin-top: 60px;
  padding: 30px;
  min-height: calc(100vh - 60px);
}
