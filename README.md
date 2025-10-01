# 🇪🇺 Quiz de Banderas Europeas

Una aplicación web interactiva para aprender las banderas y capitales de Europa. El juego permite practicar con países de la Unión Europea o con todos los países europeos.

## ✨ Características

- **Dos modos de juego**: Unión Europea (27 países) o toda Europa (~50 países)
- **Selección flexible**: Elige países específicos, los primeros 25, todos, o una selección aleatoria
- **Quiz interactivo**: Identifica tanto el país como su capital para cada bandera
- **Seguimiento de errores**: Revisa tus errores y practica solo con ellos
- **Persistencia de estado**: Tu progreso se guarda automáticamente
- **Interfaz responsive**: Optimizada para móvil y escritorio
- **Celebración de logros**: Confeti cuando obtienes puntuación perfecta

## 🚀 Tecnologías

- **React Router v7** con Server-Side Rendering (SSR)
- **TypeScript** para type safety
- **Tailwind CSS v4** para estilos
- **Bun** como runtime y package manager
- **Netlify** para deployment
- **React Confetti** para efectos visuales

## 🎮 Flujo del Juego

1. **Selección de Región**: Elige entre UE o toda Europa
2. **Selección de Países**: Marca los países que quieres practicar
3. **Quiz**: Identifica país y capital para cada bandera mostrada
4. **Resultados**: Ve tu puntuación y revisa errores
5. **Práctica dirigida**: Repite el quiz solo con los errores

## 🛠️ Desarrollo

### Requisitos
- [Bun](https://bun.sh/) instalado en tu sistema

### Comandos disponibles

```bash
# Instalar dependencias
bun install

# Desarrollo
bun dev

# Build de producción
bun build

# Servir build de producción
bun start

# Type checking
bun typecheck
```

### Estructura del proyecto

```
app/
├── routes/
│   ├── region.tsx      # Selección UE vs Europa
│   ├── home.tsx        # Selección de países
│   ├── game.tsx        # Quiz principal
│   └── countries.tsx   # Lista de repaso
├── components/
│   └── countryList.tsx # Componente reutilizable
├── utils/
│   ├── countries.ts    # Datos de países
│   └── sort.ts         # Utilidades de ordenación
└── constants/
    └── storageKeys.ts  # Claves de localStorage
```

## 📊 Datos de Países

Los países están organizados en dos conjuntos:

- **`euCountries`**: 27 países miembros de la UE
- **`allEuropeanCountries`**: Todos los países europeos (incluye Reino Unido, Suiza, Noruega, etc.)

Cada país incluye:
```typescript
{
  flag: "🇪🇸",
  name: "España", 
  capital: "Madrid"
}
```

## 🎯 Funcionalidades de Selección

- **Seleccionar todo**: Todos los países de la región elegida
- **Primeros 25**: Los primeros 25 países alfabéticamente
- **Borrar todo**: Limpia la selección
- **Aleatorio**: Selección aleatoria con número personalizable
- **Individual**: Selección manual país por país

## 💾 Persistencia

El juego utiliza `localStorage` para mantener:
- Región seleccionada (UE/Europa)
- Países seleccionados para el quiz
- Estado del juego entre sesiones

## 🌐 Deployment

### Netlify (Recomendado)
El proyecto está configurado para deployment automático en Netlify:

```toml
[build]
command = "react-router build"
publish = "build/client"
```

### Docker
También incluye soporte para Docker:

```bash
docker build -t quiz-banderas .
docker run -p 3000:3000 quiz-banderas
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📝 Convenciones

- **Idioma**: Todo el texto de la interfaz está en español
- **Nombres**: Se usan los nombres oficiales en español (ej: "Países Bajos", no "Netherlands")
- **Componentes**: TypeScript con interfaces tipadas
- **Estilos**: Tailwind CSS con diseño responsive

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

¡Disfruta aprendiendo las banderas y capitales de Europa! 🎉
