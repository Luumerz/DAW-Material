# 📁 Estructura de un Proyecto Web (Full Stack o Frontend)

```plaintext
mi-proyecto/
├── 📁 public/              # Archivos públicos (favicon, index.html, imágenes)
├── 📁 src/                 # Código fuente principal
│   ├── 📁 assets/          # Imágenes, fuentes, íconos, estilos globales
│   ├── 📁 components/      # Componentes reutilizables (botones, formularios)
│   ├── 📁 pages/           # Vistas o páginas completas (Home, About, etc.)
│   ├── 📁 services/        # Funciones para consumir APIs
│   ├── 📁 utils/           # Funciones utilitarias
│   ├── 📁 hooks/           # Custom hooks (React)
│   ├── 📁 styles/          # Archivos CSS/SCSS si no usas CSS-in-JS
│   └── App.jsx            # Componente raíz (React) o similar
│   └── main.jsx           # Punto de entrada (React)
├── 📁 backend/ (opcional) # Lógica del servidor (si es full stack)
│   ├── 📁 routes/          # Rutas API
│   ├── 📁 controllers/     # Lógica de negocio
│   ├── 📁 models/          # Modelos de base de datos
│   ├── 📁 middlewares/     # Middleware de autenticación, errores, etc.
│   └── server.js          # Archivo principal del servidor (Node.js/Express)
├── .env                   # Variables de entorno
├── .gitignore             # Archivos ignorados por Git
├── package.json           # Dependencias y scripts del proyecto
├── README.md              # Documentación general del proyecto
└── vite.config.js         # Configuración de Vite (si usas Vite)
```

---

## 📄 Archivos clave

- **README.md**: Qué hace el proyecto, cómo instalarlo, cómo usarlo.
- **package.json**: Lista de dependencias, scripts (`npm run dev`, `build`, etc.).
- **.env**: Variables como claves API, URLs de backend, tokens.
- **.gitignore**: Para ignorar `node_modules`, `.env`, etc.

---

## 🧰 Herramientas comunes

- **Frontend**: React, Vite, Next.js, Vue, Tailwind, Sass
- **Backend** (opcional): Node.js, Express, MongoDB, PostgreSQL
- **Control de versiones**: Git + GitHub
- **Testing**: Jest, Cypress
- **Linting/Formateo**: ESLint, Prettier
