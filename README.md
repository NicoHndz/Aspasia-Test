# Aspasia Test

Entrega de prueba técnica para el cargo de desarrollador frontend.
Construido con ReactJs + TailwindCSS + Material-UI.

Puede ver el despligue del sitio aquí:
https://aspasiatest.netlify.app/

Para ejecutar de manera local desde consola:

- Git clone https://github.com/NicoHndz/Aspasia-Test.git
- npm install
- npm run dev
- http://localhost:5173/

Para ejecutar storybook desde consola:

- npm run storybook

Para ejecutar test desde consola:

- Con Storybook ejecutándose, ingresa en la consola npm run test-storybook


# ¿Cómo decidiste las opciones técnicas y arquitectónicas utilizadas como parte de su solución?

Basado en los requisitos, es necesario desarrollar una interfaz capaz de navegar por diversas rutas y compartir estados e información entre páginas y componentes. 
Para lograr esto, he decidido utilizar react-router para el enrutamiento y la navegación, además de React Context para el manejo de estados.

En lo que respecta a los estilos, he optado por utilizar Tailwind CSS junto con Material-UI, herramientas con las cuales he creado una interfaz de usuario completamente responsiva, amigable e intuitiva.

En cuanto a la funcionalidad, he decidido combinar la información recibida de la API con un arreglo local. Esto le permite al usuario agregar objetos a la lista, visualizarlos e interactuar con ellos de la misma manera que los datos recibidos de la API, simulando una persistencia de datos mientras el usuario navega por el proyecto.


# ¿Hay alguna mejora que dejaste pendiente de hacer en su envío?

Respecto a la funcionalidad y la estética, considero que no queda ninguna mejora pendiente. En cuanto al uso de Storybook, queda pendiente explorar más a fondo esta herramienta.


# ¿Qué harías de manera diferente si se le asignara más tiempo?

Aplicación de TypeScript: Aunque tengo conocimientos en este lenguaje, aún son incipientes y estoy en proceso de desarrollo.

Mayor cantidad de pruebas: Me habría gustado profundizar más en el uso de Storybook y haber agregado mas pruebas a los componentes.
