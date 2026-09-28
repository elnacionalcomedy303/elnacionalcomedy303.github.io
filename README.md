# Portafolio Web Neofuturista — Mario

## 🎯 Propósito del Sitio
Este sitio web es un portafolio profesional interactivo diseñado con una estética ciberpunk y neofuturista. Su objetivo es presentar mi perfil como desarrollador Back-End y técnico, exponiendo de forma organizada mi experiencia, proyectos personales, habilidades y visión en distintas áreas tecnológicas.

---

## 🛠️ ¿De qué se compone la página?

La plataforma está construida con tecnologías web nativas (**HTML5, CSS3 y JavaScript Vanilla**) y se compone de los siguientes módulos visuales e interactivos:

* **Portada Principal (`index.html`)**: Presentación general, resumen profesional, red de proyectos principales, intereses técnicos y enlaces de contacto (GitHub, LinkedIn).
* **Subpáginas Temáticas**: Secciones independientes dedicadas a profundizar en áreas clave:
  * **Java**: Proyectos back-end, arquitectura REST y lógica de negocio.
  * **Python**: Scripts, automatización y análisis.
  * **SysAdmin**: Administración de sistemas Linux, servidores y tuning LTS.
  * **Hardware**: Montaje de equipos, análisis térmico y rendimiento.
  * **JavaScript**: Integración del lado del cliente, consumo de APIs y dinamismo en pantalla.
* **Fondo Dinámico Animado**: Una red de nodos y partículas cibernéticas en Canvas 2D que cambia automáticamente de color según la tecnología que estés consultando.
* **Sistema de Sonido**: Efectos auditivos retrofuturistas (Web Audio API) al interactuar con elementos clave y botones.

---

## 📂 Estructura del Proyecto

El proyecto utiliza una arquitectura de archivos modular y rutas relativas:

```
.
├── index.html              # Página de inicio / Portada principal
├── style.css               # Hoja de estilos globales, animaciones y colores
├── script.js               # Lógica del canvas de fondo, audio y paleta dinámica
├── java/
│   └── index.html          # Subpágina especializada en Java
├── python/
│   └── index.html          # Subpágina especializada en Python
├── sysadmin/
│   └── index.html          # Subpágina especializada en SysAdmin y Servidores
├── hardware/
│   └── index.html          # Subpágina especializada en Hardware y Métricas
└── js/
    └── index.html          # Subpágina especializada en JavaScript
```
