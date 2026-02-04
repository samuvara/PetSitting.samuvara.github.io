// ============================================
// PALETTE & THEME SWITCHER
// ============================================

// Funzione per cambiare palette
function changePalette(palette) {
    document.documentElement.setAttribute('data-palette', palette);
    localStorage.setItem('preferred-palette', palette);
    
    // Aggiorna stato attivo dei bottoni
    updateActiveButton(palette);
    
    // Feedback visivo
    showNotification(`Modalità ${getPaletteName(palette)} attivata! 🎨`);
}

// Funzione per toggle dark/light
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('preferred-theme', newTheme);
    
    // Cambia icona del bottone
    const btn = document.getElementById('theme-toggle');
    if (btn) {
        btn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    }
    
    showNotification(`Modalità ${newTheme === 'dark' ? 'scura' : 'chiara'} attivata!`);
}

// Aggiorna il bottone attivo
function updateActiveButton(palette) {
    document.querySelectorAll('.palette-switcher button').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const activeBtn = document.querySelector(`[onclick="changePalette('${palette}')"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

// Carica preferenze salvate all'avvio
window.addEventListener('DOMContentLoaded', () => {
    const savedPalette = localStorage.getItem('preferred-palette') || 'human';
    const savedTheme = localStorage.getItem('preferred-theme') || 'light';
    
    document.documentElement.setAttribute('data-palette', savedPalette);
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Aggiorna icona theme toggle
    const btn = document.getElementById('theme-toggle');
    if (btn) {
        btn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
    }
    
    // Aggiorna stato bottone palette
    updateActiveButton(savedPalette);
});

// Nomi delle palette
function getPaletteName(palette) {
    const names = {
        'human': 'Umano Friendly',
        'dog': 'Visione Cane',
        'cat': 'Visione Gatto',
        'pet': 'Pet Friendly'
    };
    return names[palette] || palette;
}

// Notifica visiva
function showNotification(message) {
    // Rimuovi notifiche esistenti
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 10);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 400);
    }, 2500);
}

// ============================================
// MENU HAMBURGER
// ============================================

const menuToggle = document.querySelector('.menu-toggle');
const sideNav = document.querySelector('.side-nav');

if (menuToggle && sideNav) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        sideNav.classList.toggle('active');
    });

    // Chiudi menu cliccando sui link
    const navLinks = sideNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            sideNav.classList.remove('active');
        });
    });
}