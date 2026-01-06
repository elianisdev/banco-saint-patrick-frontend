Banco Saint Patrick – Frontend

Frontend del proyecto Banco Saint Patrick, una aplicación de home banking que permite a usuarios existentes iniciar sesión, visualizar su saldo y realizar transacciones entre cuentas de forma segura.

Este repositorio corresponde exclusivamente al frontend del proyecto.

⸻

Descripción del proyecto

La aplicación permite a los usuarios:
•	Iniciar sesión con número de tarjeta y PIN
•	Visualizar saldo actual
•	Ver historial de transacciones
•	Realizar nuevas transacciones a otras tarjetas
•	Confirmar transacciones
•	Cierre automático de sesión por inactividad o cierre manual

⸻

🛠️ Tecnologías utilizadas
•	⚛️ React (Vite)
•	🟦 TypeScript
•	🎨 Tailwind CSS
•	🧭 React Router DOM
•	🧹 ESLint
•	📦 Vite

📁 Arquitectura del proyecto

Se utiliza **Screaming Architecture**, donde la estructura del proyecto refleja el dominio


src/

│

├── auth/

│   ├── pages/
│   ├── components/
│   └── services/
│

├── accounts/
│   ├── pages/
│   ├── components/
│   └── services/
│

├── transactions/
│   ├── pages/
│   ├── components/
│   └── services/
│

├── shared/
│   ├── components/
│   ├── hooks/
│   └── utils/
│

├── router/
│   └── AppRouter.tsx
│

├── styles/
│

└── main.tsx

📌 **Cada feature es independiente**, lo que facilita:
- escalabilidad
- trabajo en equipo
- mantenimiento

---

##  Ruteo

El ruteo principal de la aplicación se encuentra en:

src/router/AppRouter.tsx

Se utiliza `react-router-dom` para manejar las rutas públicas y privadas.

---

## Alias de Imports

El proyecto utiliza alias para evitar imports relativos largos:

```ts
@/ → src

Ejemplo:

import { LoginPage } from "@/auth/pages/LoginPage";

Configurados en:
	•	vite.config.ts
	•	tsconfig.json

Cómo levantar el proyecto

1️⃣ Instalar dependencias
npm install

2️⃣ Ejecutar en desarrollo
npm run dev

👥 Trabajo en Equipo
	•	Este repositorio corresponde al Frontend
	•	El Backend se desarrolla en un repositorio independiente
	•	La integración se realizará vía API REST
	•	El tablero del proyecto se gestiona en GitHub Projects