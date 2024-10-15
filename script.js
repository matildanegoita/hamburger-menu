const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu li a');


menuToggle.addEventListener('click', () => {
    menu.classList.toggle('open');
    menuToggle.classList.toggle('active'); 
});


menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        const nextEl = item.nextElementSibling;

        if (nextEl && nextEl.classList.contains('submenu')) {
            e.preventDefault();
            
            const parent = item.parentElement.parentElement;
            Array.from(parent.children).forEach(li => {
                if (li !== item.parentElement) {
                    li.classList.remove('show');
                }
            });

            item.parentElement.classList.toggle('show');
        }
    });
});
menuListItems.forEach(menuItem => {
    menuItem.addEventListener('mouseover', () => {
        const submenu = menuItem.querySelector('.submenu');
        if (submenu) {
            submenu.style.display = 'block';
        }
    });

    menuItem.addEventListener('mouseleave', () => {
        const submenu = menuItem.querySelector('.submenu');
        if (submenu) {
            submenu.style.display = 'none';
        }
    });
});