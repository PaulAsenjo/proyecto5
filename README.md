# React + Vite
# Proyecto de Bromas de Chuck Norris

Este proyecto es una aplicación web que muestra bromas aleatorias de Chuck Norris obtenidas de una API externa. Además, permite seleccionar categorías específicas de bromas y traduce las bromas al español utilizando la API de Google Translate.

## Características Principales

* Muestra bromas aleatorias de Chuck Norris.
* Permite seleccionar categorías específicas de bromas.
* Traduce las bromas al español utilizando la API de Google Translate.
* Interfaz de usuario moderna y responsiva con Material UI y CSS.
* Manejo de errores y estados de carga.

## Tecnologías Utilizadas

* React
* Material UI (@mui/material)
* React Router DOM
* @google-cloud/translate (o translate, según la implementación final)
* CSS

## Instalación

1.  Clona el repositorio:

    git clone https://github.com/PaulAsenjo/proyecto5.git


2.  Navega al directorio del proyecto:

    cd chucknorris-web

3.  Instala las dependencias:

    npm install


4.  Configura la API de Google Translate:

    * Obtén una clave de API de Google Translate.
    * Crea un archivo `.env.local` en la raíz del proyecto.
    * Agrega la clave de API al archivo `.env.local`:

        ```
        REACT_APP_GOOGLE_TRANSLATE_API_KEY=TU_CLAVE_DE_API
        ```

5.  Inicia la aplicación:

    npm run dev


## Uso

1.  Abre la aplicación en tu navegador: `http://localhost:3000`.
2.  Verás una broma aleatoria de Chuck Norris.
3.  Puedes seleccionar una categoría específica de bromas en el menú desplegable.
4.  Haz clic en el botón "Obtener chiste" para obtener una nueva broma.
5.  La broma se mostrará traducida al español.

## Dependencias
*    "@emotion/react": "^11.14.0",
*    "@emotion/styled": "^11.14.0",
*    "@fontsource/roboto": "^5.2.5",
*    "@google-cloud/translate": "^8.5.1",
*    "@mui/icons-material": "^6.4.6",
*    "@mui/material": "^6.4.6",
*    "@mui/styled-engine-sc": "^6.4.6",
*    "react": "^19.0.0",
*    "react-dom": "^19.0.0",
*    "react-error-boundary": "^5.0.0",
*    "react-router-dom": "^7.2.0",
*    "styled-components": "^6.1.15",
*    "translate": "^3.0.1"

## Scripts
*    "dev": "vite",
*    "build": "vite build",
*    "lint": "eslint .",
*    "preview": "vite preview"

## Autor

* Paula Asenjo - `https://github.com/PaulAsenjo`

## Licencia

Este proyecto está bajo la licencia Paula Asenjo

## Agradecimientos

* A la API de Chuck Norris por proporcionar las bromas.
* A Google Cloud Translate por la API de traducción.
* A Material UI por los componentes de interfaz de usuario.


## Bonus Track

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# proyecto5
