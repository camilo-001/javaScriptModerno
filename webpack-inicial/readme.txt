
En este readme se encuentra la informción que se trabajará desde el capitulo 81 al 86 ya que despues de este se creara un archivo de configuracion
y en estos capitulos veremos como funciona el webpack

Luego de que configuraramos en el archivo packgage.json el build: "webpack" pasamos a ejecutar en consola el comando 
npm run build el cual al culminar nos creará una carpeta dist en la cual estara el main.js el cual comprime todos los archivos js encontrados en nuestra 
carpeta src. Ya hecho lo anterior en el cap 87 hemos credo el archivo el archivo de configuración del webpack "webpack.config.js" en donde se quiere
que al ejecutar el comando "npm run build" no solo cree la carpeta dist con el main.js también pase el archivo index.html a la carpeta de dist y que en
el path de rutas coloque la ruta correcta

Para poder realizar lo mencionado anteriormente en cuanto a lo del index.html instalamos los siguientes paquetes
" npm install -D html-loader html-webpack-plugin " el primero nos permite mover el index.html y el segundo encrustar el path en el el archivo html

Al ejecutar el npm run build realizara los cambios mencionados.

Instalación del node server "npm i -D webpack-dev-server" 
en el packgage.json incertamos el script "start": "webpack serve --mode development --env development" para poder ejecutar el servidor con el comando 
"npm start" 

IMPORTACION DE ESTILOS DE MANERA DINAMICA 

clase 89. Instalacion de paquetes para la sección " npm i -D css-loader style-loader"

- Hemos creado una carpeta llamada css donde tendremos los estilos exclusivamente para componentes.js 
- A su vez hemos creado un archivo styles.css que será el de los estilos globales 
Para utilizar el archivo exclusivo lo importamos dentro del archivo de componenetes.js y para usar el de manera global 
lo importamos dentro del archivo index.js 

Para que al ejecutar el build el css que se encuentra de manera global pase a la carpeta dist usaramos el siguiente paquetes
" npm i -D mini-css-extract-plugin " y lo importamos y configuramos dentro del webpack-config 

Cuando usamos las configuraciones para desarrollo en el mode del webpack-config en el cual especificamos development o production
los archivos de main.js y main.css pasarán a ofuscarse o ser archivos .min. para poder hacer esto con el archivo css usaremos un plugin
el cual es: " npm i -D optimize-css-assets-webpack-plugin "
