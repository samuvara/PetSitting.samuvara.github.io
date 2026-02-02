const menuToggle = document.getElementById('menuToggle');
        const sideNav = document.getElementById('sideNav');

        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            sideNav.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !sideNav.contains(e.target)) {
                menuToggle.classList.remove('active');
                sideNav.classList.remove('active');
            }
        });

        // Close menu when clicking on a link
        const navLinks = sideNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                sideNav.classList.remove('active');
            });
        });