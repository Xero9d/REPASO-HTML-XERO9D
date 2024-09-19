# REPASO-HTML-XERO9D
 
 El archivo index.html debe llamarse SIEMPRE así para que el servidor web (cuando la web sea pública en internet) sepa qué archivo debe cargar por defecto.

Los elementos HTML se pueden conformar de una etiqueta o de dos.

Dependiendo del tipo de elemento de HTML al que nos refiramos estos contendrán otros elemenos de HTML u otro contenido.

Las etiquetas <meta> de HTML siempre se encontrarán en el <head></head> del documento y valdrán para configurar ciertos aspectos técnicos de la web así como la carga de otros archivos externos. Hay dos que son obligatorias en la estructura de cualquier archivo HTML:
    - La etiqueta <meta> de codificación. Para cargar el set de caracteres que necesitaremos en la web.
    - La etiqueta <meta> para indicar al navegador que la web es responsive. name="viewport"

Para activar el "word wrap" -> Al+Z

Para abrir la web en el navegador:
    - Botón "Go Live" en la interfaz de Visual abajo a la derecha.
    - Click Derecho sobre cualquier archivo de la web y "reveal in file explorer"

En el primer nanosegundo en el que abrimos la web en el navegador vamos a abrir también las DevTools con F12 o Click Derecho "Inspeccionar".

Los elementos de TML que va a rendereizar el navegador SIEMPRE se encontrarán dentro del elemento <body></body>, algunos serán visibles para el usuario y otros no. 

AÑADIR ESTOS ELEMENTOS AL HTML:

- Un subtitulo.
- Un sub-subtitulo.

- Un párrafo y dentro del párrafo, que una palabra o varias sean un enlace clickable a la Wikipedia. <p> <a href="url">
- Otro párrafo y dentro una palabra en negrita y otra en cursiva. <strong><em> / NO USAR <b></b>/<i></i> (DEPRECATED)
- Otro párrafo y dentro un salto de línea. <br>
Para los párrafos copiar texto de Wikipedia o Lorem Ipsum.

- Una lista desordenada de lo que queramos. <ul>
- Una lista ordenada de números (con el texto en inglés). <ol>

-----

- Descargar una imagen (jpg o png o webp) y conventirla en un enlace a un artículo de Wikipedia / Meter un <img src="dirección/imagen.png"> Dentro de un <a href="url"></a>

- Agrupar 2 de los 3 párrafos anteriores dentro de otro elemento de HTML que funcione como un contenedor. <div> <section>: La diferencia entre ambas es que el div es un contenedor sin más, el section es un contenedor semántico, por lo que el navegador le aplica prioridades

Recomienda hacer commit cada vez que subimos fotos/archivos

En los <img src="" alt=""> el alt es el texto alternativo de la imagen y debe de describir la imagen bien, esto es importante para el SEO ya que Google se basa, entre otras cosas, en estos alt para las búsquedas, por lo que es más probable que si alguien busca "Patapon", le salga la img de mi web

COMANDOS:
Alt + Flechas arriba o abajo : MUEVE LAS LÍNEAS DE CÓDIGO ARRIBA O ABAJO