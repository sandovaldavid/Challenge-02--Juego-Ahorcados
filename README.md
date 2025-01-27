# 🎮 Juego del Ahorcado | Hangman Game

---

## 📝 Descripción
Un juego clásico del ahorcado implementado en HTML, CSS y JavaScript puro. El jugador debe adivinar una palabra letra por letra antes de que el dibujo del "ahorcado" se complete.

## ✨ Características Principales
- 🎲 Selección aleatoria de palabras
- ➕ Agregar nuevas palabras al juego
- 🎨 Interfaz intuitiva y responsive
- 🖼️ Animación del ahorcado mediante Canvas
- ⌨️ Validación de entrada de teclado

## 🛠️ Tecnologías Utilizadas
| Tecnología | Uso |
|------------|-----|
| HTML5 | Estructura de la aplicación |
| CSS3 | Estilos y diseño responsive |
| JavaScript | Lógica del juego |
| Canvas API | Dibujo del ahorcado |

## 📁 Estructura del Proyecto
```
├── 📄 index.html          # Página principal
├── 📄 juego.html          # Interfaz del juego
├── 📄 agregar palabras.html # Interfaz para agregar palabras
├── 📂 css/
│   ├── reset.css         # Reset de estilos
│   ├── style.css         # Estilos globales
│   ├── style_AP.css      # Estilos para agregar palabras
│   └── style_J.css       # Estilos del juego
└── 📂 js/
    ├── numero_random.js   # Generador de números aleatorios
    ├── palabra_adivinar.js # Lógica principal del juego
    └── palabras_nuevas.js # Gestión de palabras nuevas
```

## 🎯 Funcionalidades Principales

### 1. Sistema de Juego
- 🎲 Selección aleatoria de palabras desde 

palabras_predeterminadas


- ⌨️ Detección de teclas presionadas
- ✅ Validación de letras correctas e incorrectas
- 🎨 Dibujo progresivo del ahorcado

### 2. Gestión de Palabras
- ➕ Agregar nuevas palabras al juego
- ✔️ Validación de palabras (máximo 8 letras)
- 🔤 Solo se permiten letras mayúsculas

### 3. Interfaz de Usuario
- 📱 Diseño responsive
- 🎨 Animaciones en botones
- 💬 Mensajes de victoria/derrota
- 🔄 Botón de reinicio

## 🎮 Cómo Jugar
1. Click en "Iniciar Juego" desde la página principal
2. Usa el teclado para adivinar letras
3. Tienes 9 intentos antes de que el dibujo se complete
4. ¡Adivina la palabra antes de que el ahorcado se complete!

## 🌟 Reglas del Juego
| Acción | Resultado |
|--------|-----------|
| Letra correcta | Se muestra en la palabra |
| Letra incorrecta | Se dibuja una parte del ahorcado |
| Palabra completa | ¡Victoria! |
| 9 errores | Juego terminado |

## 💻 Desarrollo
Para agregar nuevas palabras al juego:
1. Click en "Agregar nueva palabra"
2. Ingresa la palabra (máximo 8 letras)
3. Click en "Guardar y empezar"

## 🤝 Contribuciones
¡Las contribuciones son bienvenidas! Puedes:
- 🐛 Reportar bugs
- 💡 Sugerir nuevas funcionalidades
- 🔧 Enviar pull requests

## ✍️ Autor
**Sandoval David** - Abril 2022
- 🔗 [GitHub](https://github.com/sandovaldavid)
- 🔗 [LinkedIn](https://www.linkedin.com/in/jdavidsandovals/)

---
🎮 **¡Diviértete jugando!** 🎮