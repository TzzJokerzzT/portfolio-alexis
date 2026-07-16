# Persona 5 Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat)](LICENSE)

> **English version below** | **Versión en español abajo**

---

## 🌟 Persona 5 Portfolio (Versión en Español)
Un portfolio inspirado en el estilo visual y la temática del videojuego *Persona 5*, desarrollado con **Next.js**, **TypeScript** y **Tailwind CSS**. Incluye secciones para mostrar habilidades, proyectos, experiencia y un formulario de contacto.

### 📌 Introducción
Este es un proyecto [Next.js](https://nextjs.org) creado con [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### 📁 Distribución de Carpetas
```bash
persona5-portfolio/
├── app/                     # Código fuente (Next.js App Router)
│   ├── features/            # Secciones del portfolio (hero, about, skills, etc.)
│   ├── shared/              # Componentes reutilizables (Navigation, Footer, etc.)
│   └── page.tsx             # Página principal
├── public/                  # Assets estáticos (imágenes, SVGs, etc.)
├── .env                     # Variables de entorno
├── next.config.ts           # Configuración de Next.js
├── package.json             # Dependencias y scripts
├── tsconfig.json            # Configuración de TypeScript
└── README.md                # Documentación
```

### 🛠️ Tecnologías Utilizadas
| Tecnología          | Versión       | Descripción                                  |
|---------------------|---------------|----------------------------------------------|
| **Next.js**         | 16.1.6        | Framework de React para aplicaciones web.    |
| **TypeScript**      | 5.0+          | Lenguaje de programación tipado.             |
| **Tailwind CSS**    | v4            | Framework de estilos utility-first.          |
| **Motion**          | 12.35.0       | Librería para animaciones fluidas.           |
| **React Query**     | 5.101.0       | Manejo de datos y caché.                     |
| **Lucide React**    | 1.24.0        | Librería de iconos.                          |
| **Biome**           | 2.2.0         | Linter y formateador de código.              |

### 🚀 Instalación y Ejecución
#### Requisitos
- Node.js (v20 o superior).
- Bun (opcional, recomendado para mejor rendimiento).

#### Pasos
1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/persona5-portfolio.git
   cd persona5-portfolio
   ```

2. Instala las dependencias:
   ```bash
   bun install  # o npm install
   ```

3. Ejecuta el proyecto en modo desarrollo:
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   # o
   bun dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

4. Para construir el proyecto para producción:
   ```bash
   bun build  # o npm run build
   ```

5. Inicia el servidor en producción:
   ```bash
   bun start  # o npm start
   ```

### 🎨 Características
- **Diseño inspirado en *Persona 5***: Paleta de colores oscuros/rojos y animaciones fluidas.
- **Secciones completas**: Hero, About, Skills, Projects, Experience y Contact.
- **Optimizado para SEO**: Meta tags y estructura semántica.
- **Responsive**: Adaptable a móviles, tablets y escritorio.
- **Animaciones**: Transiciones suaves con `motion`.
- **Fuente optimizada**: Uso de [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) para cargar [Geist](https://vercel.com/font), la nueva familia de fuentes de Vercel.

### 📸 Capturas de Pantalla
![Hero Section](public/images/hero.png)
*Sección de Hero con animaciones.*

![Projects Section](public/images/projects.png)
*Sección de Proyectos.*

### 🤝 Contribuciones
¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar el proyecto, sigue estos pasos:
1. Haz un fork del repositorio.
2. Crea una rama para tu feature (`git checkout -b feature/nueva-feature`).
3. Realiza tus cambios y haz commit (`git commit -m "Añadir nueva feature"`).
4. Sube tus cambios (`git push origin feature/nueva-feature`).
5. Abre un Pull Request.

### 📜 Licencia
Este proyecto está bajo la licencia **MIT**. Consulta el archivo [LICENSE](LICENSE) para más detalles.

### 🙌 Agradecimientos
- A [Atlus](https://atlus.com/) por crear *Persona 5*, la inspiración para este diseño.
- A la comunidad de desarrolladores de Next.js y Tailwind CSS por sus increíbles herramientas.
- A [Lucide](https://lucide.dev/) por los iconos.
- A [Motion](https://motion.dev/) por las animaciones fluidas.
- A [Vercel](https://vercel.com/) por la plataforma de despliegue y la fuente Geist.

---

## 📚 Más Información
Para aprender más sobre Next.js, consulta los siguientes recursos:
- [Next.js Documentation](https://nextjs.org/docs) - Aprende sobre las características y API de Next.js.
- [Learn Next.js](https://nextjs.org/learn) - Tutorial interactivo de Next.js.

Puedes revisar el [repositorio de Next.js en GitHub](https://github.com/vercel/next.js) - ¡Tu feedback y contribuciones son bienvenidos!

---

## 🌟 Persona 5 Portfolio (English Version)
A portfolio inspired by the visual style and theme of the video game *Persona 5*, built with **Next.js**, **TypeScript**, and **Tailwind CSS**. It includes sections to showcase skills, projects, experience, and a contact form.

### 📌 Introduction
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### 📁 Folder Structure
```bash
persona5-portfolio/
├── app/                     # Source code (Next.js App Router)
│   ├── features/            # Portfolio sections (hero, about, skills, etc.)
│   ├── shared/              # Reusable components (Navigation, Footer, etc.)
│   └── page.tsx             # Main page
├── public/                  # Static assets (images, SVGs, etc.)
├── .env                     # Environment variables
├── next.config.ts           # Next.js configuration
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
└── README.md                # Documentation
```

### 🛠️ Technologies Used
| Technology         | Version       | Description                                  |
|--------------------|---------------|----------------------------------------------|
| **Next.js**        | 16.1.6        | React framework for web applications.        |
| **TypeScript**     | 5.0+          | Typed programming language.                  |
| **Tailwind CSS**   | v4            | Utility-first CSS framework.                 |
| **Motion**         | 12.35.0       | Library for smooth animations.               |
| **React Query**    | 5.101.0       | Data management and caching.                 |
| **Lucide React**   | 1.24.0        | Icon library.                                |
| **Biome**          | 2.2.0         | Code linter and formatter.                   |

### 🚀 Installation and Execution
#### Requirements
- Node.js (v20 or higher).
- Bun (optional, recommended for better performance).

#### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/persona5-portfolio.git
   cd persona5-portfolio
   ```

2. Install dependencies:
   ```bash
   bun install  # or npm install
   ```

3. Run the project in development mode:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. Build the project for production:
   ```bash
   bun build  # or npm run build
   ```

5. Start the production server:
   ```bash
   bun start  # or npm start
   ```

### 🎨 Features
- **Persona 5-inspired design**: Dark/red color palette and smooth animations.
- **Complete sections**: Hero, About, Skills, Projects, Experience, and Contact.
- **SEO optimized**: Meta tags and semantic structure.
- **Responsive**: Adapts to mobile, tablet, and desktop.
- **Animations**: Smooth transitions with `motion`.
- **Optimized font**: Uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to load [Geist](https://vercel.com/font), Vercel's new font family.

### 📸 Screenshots
![Hero Section](public/images/hero.png)
*Hero section with animations.*

![Projects Section](public/images/projects.png)
*Projects section.*

### 🤝 Contributions
Contributions are welcome! If you have ideas to improve the project, follow these steps:
1. Fork the repository.
2. Create a branch for your feature (`git checkout -b feature/new-feature`).
3. Make your changes and commit (`git commit -m "Add new feature"`).
4. Push your changes (`git push origin feature/new-feature`).
5. Open a Pull Request.

### 📜 License
This project is licensed under the **MIT** License. See the [LICENSE](LICENSE) file for details.

### 🙌 Acknowledgements
- To [Atlus](https://atlus.com/) for creating *Persona 5*, the inspiration for this design.
- To the Next.js and Tailwind CSS developer communities for their amazing tools.
- To [Lucide](https://lucide.dev/) for the icons.
- To [Motion](https://motion.dev/) for smooth animations.
- To [Vercel](https://vercel.com/) for the deployment platform and Geist font.

---

## 📚 Learn More
To learn more about Next.js, check out the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - Your feedback and contributions are welcome!

---

## 🚀 Deploy on Vercel
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.