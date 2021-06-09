var imagenes = ['assets/Podcast.png', 'assets/Gifos.png'],
    links1 = ['https://oscar2620.github.io/Podcast/Proyecto/', 'https://daniele0802.github.io/Proyecto-GIFOS/']
    links2 = ['https://github.com/oscar2620/Podcast', 'https://github.com/DanielE0802/Proyecto-GIFOS']
    titulo = ['Podcast', 'Gifos']
    descripcion = ['Diseño de la landing page de un canal de Podcast, siguiendo las pautas visuales de la interfaz de usuario proporcionada y empleando HTML, CSS  y SASS. Logrando funciones de reproducción de contenido, navegación y compatibilidad con múltiples navegadores y dispositivos.', 'Creación de una aplicación web interactiva para compartir GIF animados, a partir de HTML, CSS, SASS y JavaScript. Obteniendo datos de la API de Giphy con funciones asincrónicas y utilizando herramientas locales del navegador.']
    cont = 0;

function slider(contenedor){
    contenedor.addEventListener('click', e =>{
        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('img')
            demo = contenedor.querySelector('.demo')
            repo = contenedor.querySelector('.repo')
            desc = contenedor.querySelector('.descripcion')
            title = contenedor.querySelector('.titulo')
            tgt = e.target;

        if (tgt == atras) {
            if (cont > 0) {
                img.src = imagenes[cont - 1];
                demo.href = links1[cont - 1];
                repo.href = links2[cont - 1];
                desc.innerHTML  = descripcion[cont - 1];
                title.innerHTML  = titulo[cont - 1];

                cont--;
            } else {
                img.src = imagenes[imagenes.length - 1];
                demo.href = links1[links1.length - 1];
                repo.href = links2[links2.length - 1];
                desc.innerHTML  = descripcion[descripcion.length - 1];
                title.innerHTML  = titulo[titulo.length - 1];
                cont = imagenes.length - 1;
            }
        } else if(tgt == adelante){
            if (cont < imagenes.length -1) {
                img.src = imagenes[cont + 1];
                demo.href = links1[cont + 1];
                repo.href = links2[cont + 1];
                desc.innerHTML  = descripcion[cont + 1];
                title.innerHTML  = titulo[cont + 1];

                cont++;
            } else {
                img.src = imagenes[0];
                demo.href = links1[0];
                repo.href = links2[0];
                desc.innerHTML  = descripcion[0];
                title.innerHTML  = titulo[0];

                
                cont = 0;
            }
        }
    })
}

document.addEventListener("DOMContentLoaded", () =>{
    let contenedor = document.querySelector('.Proyectos');
    slider(contenedor);
})