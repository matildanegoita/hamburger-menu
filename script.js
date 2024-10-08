const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu li a');

// Funcție pentru deschiderea meniului pe mobil
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('open');
    menuToggle.classList.toggle('active'); // Activează animația butonului hamburger
});

// Gestionare deschidere submeniu la click pe desktop și mobil
menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        const nextEl = item.nextElementSibling;

        // Verifică dacă următorul element este un submeniu
        if (nextEl && nextEl.classList.contains('submenu')) {
            e.preventDefault();
            
            // Închide toate submeniurile de același nivel înainte de a deschide unul nou
            const parent = item.parentElement.parentElement;
            Array.from(parent.children).forEach(li => {
                if (li !== item.parentElement) {
                    li.classList.remove('show');
                }
            });

            // Toggle submeniul curent
            item.parentElement.classList.toggle('show');
        }
    });
});
