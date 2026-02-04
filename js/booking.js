// ============================================
// BOOKING PAGE FUNCTIONALITY
// ============================================

// Simulazione stato utente (sostituisci con vera autenticazione)
let isUserLoggedIn = false;

// Controlla login all'avvio
window.addEventListener('DOMContentLoaded', () => {
    checkLoginStatus();
    initializeCalendar();
});

// Controlla se l'utente è loggato
function checkLoginStatus() {
    // Controlla localStorage per sessione utente
    const userSession = localStorage.getItem('userSession');
    isUserLoggedIn = userSession !== null;
    
    updateUIBasedOnLogin();
}

// Aggiorna UI in base allo stato login
function updateUIBasedOnLogin() {
    const loginOverlay = document.getElementById('login-overlay');
    const calendarIframe = document.getElementById('google-calendar');
    const loadingCalendar = document.getElementById('loading-calendar');
    
    if (isUserLoggedIn) {
        loginOverlay.classList.add('hidden');
        
        // Simula caricamento calendario
        setTimeout(() => {
            loadingCalendar.style.display = 'none';
            calendarIframe.style.display = 'block';
        }, 1500);
    } else {
        loginOverlay.classList.remove('hidden');
    }
}

// Inizializza calendario
function initializeCalendar() {
    const calendarIframe = document.getElementById('google-calendar');
    
    // Aggiorna src del calendario con il tuo vero link
    // Vai su Google Calendar > Impostazioni > Integra calendario > Personalizza
    calendarIframe.src = "https://calendar.app.google/6f2ZD78CHcpnDkCd9";
}

// Mostra form login
function showLoginForm() {
    const modal = document.getElementById('login-modal');
    modal.classList.add('active');
}

// Mostra form registrazione
function showRegisterForm() {
    const modal = document.getElementById('register-modal');
    modal.classList.add('active');
}

// Chiudi modal
function closeModal() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => modal.classList.remove('active'));
}

// Switch tra login e registrazione
function switchToRegister() {
    closeModal();
    setTimeout(showRegisterForm, 300);
}

function switchToLogin() {
    closeModal();
    setTimeout(showLoginForm, 300);
}

// Gestisci login
function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // QUI: Implementa la vera logica di autenticazione
    // Per ora simuliamo un login riuscito
    
    // Simulazione chiamata API
    setTimeout(() => {
        // Salva sessione
        localStorage.setItem('userSession', JSON.stringify({
            email: email,
            loginTime: new Date().toISOString()
        }));
        
        isUserLoggedIn = true;
        closeModal();
        updateUIBasedOnLogin();
        
        showNotification('✅ Login effettuato con successo!');
    }, 800);
}

// Gestisci registrazione
function handleRegister(event) {
    event.preventDefault();
    
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const phone = document.getElementById('register-phone').value;
    
    // QUI: Implementa la vera logica di registrazione
    // Per ora simuliamo una registrazione riuscita
    
    setTimeout(() => {
        // Salva sessione
        localStorage.setItem('userSession', JSON.stringify({
            name: name,
            email: email,
            phone: phone,
            registerTime: new Date().toISOString()
        }));
        
        isUserLoggedIn = true;
        closeModal();
        updateUIBasedOnLogin();
        
        showNotification('✅ Registrazione completata! Benvenuto/a ' + name + '!');
    }, 800);
}

// Logout (aggiungi bottone nel menu se vuoi)
function handleLogout() {
    localStorage.removeItem('userSession');
    isUserLoggedIn = false;
    updateUIBasedOnLogin();
    showNotification('👋 Logout effettuato');
}

// Chiudi modal cliccando fuori
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        closeModal();
    }
}