const iconoMenu = document.querySelector('#icono_menu'),
        menu = document.querySelector('#menu');
        // animacion menu
        iconoMenu.addEventListener('click', (e) => {

            menu.classList.toggle('active')
        });