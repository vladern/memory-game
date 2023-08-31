# Memory Game
Este proyecto es una aplicación web que implementa un juego clásico de memoria. El objetivo es encontrar todas las parejas de imágenes en una parrilla de tarjetas que se muestran del reverso. El juego termina cuando se hayan revelado todas las parejas.

## Tecnologías utilizadas
- NextJS: Un framework de React que permite crear aplicaciones web con renderizado en el servidor y generación estática de páginas.
- Typescript: Un lenguaje de programación que extiende JavaScript con tipado estático y otras características.
- Hooks para el manejo del estado.
## Cómo ejecutar el proyecto
Para ejecutar el proyecto en modo desarrollo, sigue estos pasos:

- Clona el repositorio https://github.com/vladern/memory-game
- Instala las dependencias con `npm install` o `yarn install`
- Ejecuta el servidor de desarrollo con `npm run dev` o `yarn dev`
- Abre `http://localhost:3000` en tu navegador para ver la aplicación

## Cómo jugar al juego
El juego consiste en encontrar todas las parejas de imágenes en una parrilla de 16 tarjetas que se muestran del reverso. Puedes hacer clic en dos tarjetas a la vez para revelar sus imágenes:

- Si las tarjetas son iguales, se quedan descubiertas.
- Si las tarjetas son distintas, se vuelven a poner del reverso y pierdes un intento.
- El juego termina cuando hayas encontrado las 8 parejas.
Puedes ver tu el tiempo transcurrido en el modal que sale despues de encontrar todas las parejas. También puedes reiniciar el juego en cualquier momento con el botón de volver a jugar.
