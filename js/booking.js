// ============================================
// FUNZIONALITÀ PAGINA PRENOTAZIONE
// ============================================
// Questo file gestisce tutta la logica della pagina di booking:
// - Autenticazione utente (login/registrazione)
// - Gestione del calendario
// - Visualizzazione/nascondimento dell'overlay di login
// - Notifiche all'utente

// ============================================
// VARIABILI GLOBALI
// ============================================

// Variabile booleana che traccia lo stato di login dell'utente
// - false = utente NON autenticato (vede l'overlay di login)
// - true = utente autenticato (vede il calendario)
let isUserLoggedIn = false;

// ============================================
// EVENTO AL CARICAMENTO DELLA PAGINA
// ============================================

// Questo evento si attiva quando il DOM (Document Object Model) è completamente caricato
// Viene eseguito UNA SOLA VOLTA al caricamento della pagina
window.addEventListener('DOMContentLoaded', () => {
    // Controlla se l'utente è già loggato (legge da localStorage)
    checkLoginStatus();
    
    // Inizializza il calendario (imposta l'URL correto dell'iframe)
    initializeCalendar();
});

// ============================================
// FUNZIONE: checkLoginStatus()
// ============================================
// Scopo: Verifica se l'utente ha una sessione attiva in localStorage
// Logica:
//   1. Legge il valore 'userSession' da localStorage
//   2. Se esiste una sessione (userSession !== null) → utente loggato
//   3. Se NON esiste (null) → utente NON loggato
//   4. Chiama updateUIBasedOnLogin() per aggiornare la UI di conseguenza

function checkLoginStatus() {
    // Controlla localStorage per una sessione utente salvata in precedenza
    // localStorage persiste anche dopo la chiusura del browser (finché non è cancellato)
    const userSession = localStorage.getItem('userSession');
    
    // Se userSession non è null, significa che l'utente è già loggato
    // Imposta la variabile globale isUserLoggedIn di conseguenza
    isUserLoggedIn = userSession !== null;
    
    // Aggiorna l'interfaccia utente in base allo stato di login
    updateUIBasedOnLogin();
}

// ============================================
// FUNZIONE: updateUIBasedOnLogin()
// ============================================
// Scopo: Mostra o nasconde l'overlay di login e il calendario
// Logica:
//   - Se loggato: nascondi overlay, mostra calendario
//   - Se NON loggato: mostra overlay (blocca l'accesso al calendario)

function updateUIBasedOnLogin() {
    // Recupera gli elementi DOM necessari
    // 1. L'overlay bianco che copre il calendario e chiede il login
    const loginOverlay = document.getElementById('login-overlay');
    
    // 2. L'iframe che contiene il calendario Google
    const calendarIframe = document.getElementById('google-calendar');
    
    // 3. Il messaggio di caricamento con lo spinner animato
    const loadingCalendar = document.getElementById('loading-calendar');
    
    // Controlla lo stato di login
    if (isUserLoggedIn) {
        // ========== UTENTE LOGGATO ==========
        
        // Aggiunge la classe 'hidden' all'overlay di login
        // Nel CSS: .login-overlay.hidden { display: none !important; }
        // Questo nasconde completamente l'overlay bianco
        loginOverlay.classList.add('hidden');
        
        // Simula il caricamento del calendario con un ritardo di 1.5 secondi
        // Questo dà un feedback visivo all'utente (appare il caricamento, poi il calendario)
        setTimeout(() => {
            // Nasconde il messaggio di caricamento
            loadingCalendar.style.display = 'none';
            
            // Mostra l'iframe del calendario
            calendarIframe.style.display = 'block';
        }, 1500); // 1500 millisecondi = 1.5 secondi
        
    } else {
        // ========== UTENTE NON LOGGATO ==========
        
        // Rimuove la classe 'hidden' dall'overlay di login
        // L'overlay viene visualizzato, bloccando l'accesso al calendario
        loginOverlay.classList.remove('hidden');
    }
}

// ============================================
// FUNZIONE: initializeCalendar()
// ============================================
// Scopo: Inizializza il calendario Google impostando l'URL corretto
// Nota: Questo URL deve essere personalizzato con il tuo calendario Google

function initializeCalendar() {
    // Recupera l'elemento iframe del calendario dal DOM
    const calendarIframe = document.getElementById('google-calendar');
    
    // Imposta l'attributo 'src' dell'iframe con l'URL del calendario Google
    // IMPORTANTE: Devi sostituire questo URL con il tuo vero calendario
    // Come farlo:
    //   1. Vai su Google Calendar (calendar.google.com)
    //   2. Vai a Impostazioni > Impostazioni calendario (clicca sul tuo calendario)
    //   3. Scorri fino a "Integra calendario"
    //   4. Copia il link fornito e sostituiscilo qui
    calendarIframe.src = "https://calendar.app.google/6f2ZD78CHcpnDkCd9";
}

// ============================================
// FUNZIONE: showLoginForm()
// ============================================
// Scopo: Mostra il modal (finestra popup) del login
// Logica:
//   1. Recupera il modal del login dal DOM (id="login-modal")
//   2. Aggiunge la classe 'active' per mostrarlo

function showLoginForm() {
    // Recupera il modal del login
    const modal = document.getElementById('login-modal');
    
    // Aggiunge la classe 'active' al modal
    // Nel CSS: .modal.active { display: flex; align-items: center; justify-content: center; }
    // Questo mostra il modal al centro dello schermo con animazione
    modal.classList.add('active');
}

// ============================================
// FUNZIONE: showRegisterForm()
// ============================================
// Scopo: Mostra il modal (finestra popup) della registrazione
// Funziona allo stesso modo di showLoginForm()

function showRegisterForm() {
    // Recupera il modal della registrazione
    const modal = document.getElementById('register-modal');
    
    // Aggiunge la classe 'active' per mostrarlo
    modal.classList.add('active');
}

// ============================================
// FUNZIONE: closeModal()
// ============================================
// Scopo: Chiude tutti i modal aperti (login e registrazione)
// Logica:
//   1. Seleziona TUTTI gli elementi con classe 'modal'
//   2. Rimuove la classe 'active' da ognuno di loro
//   3. I modal scompaiono

function closeModal() {
    // Seleziona TUTTI gli elementi della pagina con classe 'modal'
    // querySelectorAll ritorna una NodeList (simile a un array)
    const modals = document.querySelectorAll('.modal');
    
    // Ciclo: per ogni modal trovato, rimuove la classe 'active'
    modals.forEach(modal => modal.classList.remove('active'));
    // Questo chiude contemporaneamente login e registrazione se aperti
}

// ============================================
// FUNZIONE: switchToRegister()
// ============================================
// Scopo: Permette di passare dal form di login a quello di registrazione
// Logica:
//   1. Chiude il modal corrente (login)
//   2. Aspetta 300ms per la transizione animata
//   3. Mostra il modal di registrazione

function switchToRegister() {
    // Chiude il modal attualmente aperto (login)
    closeModal();
    
    // Aspetta 300 millisecondi prima di aprire il modal di registrazione
    // Questo tempo permette l'animazione di chiusura del modal precedente
    setTimeout(showRegisterForm, 300);
}

// ============================================
// FUNZIONE: switchToLogin()
// ============================================
// Scopo: Permette di passare dal form di registrazione a quello di login
// Funziona allo stesso modo di switchToRegister() ma in direzione inversa

function switchToLogin() {
    // Chiude il modal attualmente aperto (registrazione)
    closeModal();
    
    // Aspetta 300 millisecondi prima di aprire il modal di login
    setTimeout(showLoginForm, 300);
}

// ============================================
// FUNZIONE: handleLogin(event)
// ============================================
// Scopo: Gestisce l'invio del form di login
// Logica:
//   1. Previene il comportamento standard del form (ricarica pagina)
//   2. Raccoglie email e password
//   3. Esegue l'autenticazione (attualmente simulata)
//   4. Salva la sessione in localStorage
//   5. Aggiorna la UI

function handleLogin(event) {
    // Previene il comportamento di default del form (che ricaricherebbe la pagina)
    event.preventDefault();
    
    // Recupera i valori dal form di login
    // getElementById seleziona l'elemento con l'id specificato
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // ⚠️ NOTA: Attualmente è solo una simulazione di login
    // TODO: Implementare la vera logica di autenticazione con un backend
    // - Inviare email e password a un server
    // - Verificare le credenziali
    // - Ricevere un token di autenticazione
    
    // Simula una chiamata al server con un ritardo di 800ms
    // Questo dà all'utente il feedback che qualcosa sta accadendo
    setTimeout(() => {
        // Crea un oggetto sessione con i dati dell'utente
        const sessionData = {
            email: email,
            loginTime: new Date().toISOString() // Salva l'ora del login
        };
        
        // Salva la sessione in localStorage come stringa JSON
        // localStorage persiste anche dopo il riavvio del browser
        localStorage.setItem('userSession', JSON.stringify(sessionData));
        
        // Aggiorna la variabile globale di stato
        isUserLoggedIn = true;
        
        // Chiude il modal del login
        closeModal();
        
        // Aggiorna l'interfaccia (mostra il calendario, nasconde l'overlay)
        updateUIBasedOnLogin();
        
        // Mostra una notifica di successo all'utente
        showNotification('✅ Login effettuato con successo!');
    }, 800); // Attende 800 millisecondi (0.8 secondi)
}

// ============================================
// FUNZIONE: handleRegister(event)
// ============================================
// Scopo: Gestisce l'invio del form di registrazione
// Logica:
//   1. Previene il comportamento standard del form
//   2. Raccoglie dati: nome, email, password, telefono
//   3. Esegue la registrazione (attualmente simulata)
//   4. Salva la sessione in localStorage
//   5. Aggiorna la UI

function handleRegister(event) {
    // Previene il comportamento di default del form (ricarica pagina)
    event.preventDefault();
    
    // Recupera i valori dal form di registrazione
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const phone = document.getElementById('register-phone').value;
    
    // ⚠️ NOTA: Attualmente è solo una simulazione di registrazione
    // TODO: Implementare la vera logica di registrazione con un backend
    // - Inviare i dati a un server
    // - Verificare se l'email è già registrata
    // - Creare un nuovo account nel database
    // - Inviare email di conferma
    // - Ricevere un token di autenticazione
    
    // Simula una chiamata al server con un ritardo di 800ms
    setTimeout(() => {
        // Crea un oggetto sessione con i dati del nuovo utente
        const sessionData = {
            name: name,
            email: email,
            phone: phone,
            registerTime: new Date().toISOString() // Salva l'ora della registrazione
        };
        
        // Salva la sessione in localStorage come stringa JSON
        localStorage.setItem('userSession', JSON.stringify(sessionData));
        
        // Aggiorna la variabile globale di stato
        isUserLoggedIn = true;
        
        // Chiude il modal della registrazione
        closeModal();
        
        // Aggiorna l'interfaccia (mostra il calendario, nasconde l'overlay)
        updateUIBasedOnLogin();
        
        // Mostra una notifica di benvenuto personalizzata con il nome dell'utente
        showNotification('✅ Registrazione completata! Benvenuto/a ' + name + '!');
    }, 800); // Attende 800 millisecondi (0.8 secondi)
}

// ============================================
// FUNZIONE: handleLogout()
// ============================================
// Scopo: Effettua il logout dell'utente
// Logica:
//   1. Cancella la sessione da localStorage
//   2. Aggiorna lo stato di login
//   3. Aggiorna la UI (mostra l'overlay di login)
//   4. Mostra una notifica di logout
// Nota: Questa funzione NON è ancora integrata nell'interfaccia

function handleLogout() {
    // Rimuove la sessione da localStorage
    // localStorage.removeItem() cancella completamente la chiave specificata
    localStorage.removeItem('userSession');
    
    // Aggiorna la variabile globale di stato
    isUserLoggedIn = false;
    
    // Aggiorna l'interfaccia (nascondi calendario, mostra overlay di login)
    updateUIBasedOnLogin();
    
    // Mostra una notifica di logout
    showNotification('👋 Logout effettuato');
    
    // TODO: Aggiungere un bottone di logout nel menu di navigazione
}

// ============================================
// EVENTO: Chiudi modal cliccando fuori da esso
// ============================================
// Scopo: Migliora l'esperienza utente permettendo di chiudere il modal
//        facendo click al di fuori del contenuto (sullo sfondo scuro)
// Logica:
//   1. Intercetta TUTTI i click della pagina
//   2. Controlla se il click è avvenuto su un elemento con classe 'modal'
//   3. Se sì, chiude il modal

window.onclick = function(event) {
    // Controlla se l'elemento su cui è stato fatto click ha la classe 'modal'
    // event.target è l'elemento su cui è stato cliccato
    // classList.contains() ritorna true se la classe esiste, false altrimenti
    if (event.target.classList.contains('modal')) {
        // Se il click è avvenuto direttamente sul modal (lo sfondo scuro),
        // chiude il modal
        closeModal();
    }
    // Nota: Se il click è sul .modal-content (il contenitore bianco inside),
    // NON viene chiuso perché .modal-content NON ha la classe 'modal'
}