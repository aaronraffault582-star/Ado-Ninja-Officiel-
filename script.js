// CONFIGURATION ADMIN
const ADMIN_EMAIL = "aaronraffault582@gmail.com";
const ADMIN_PASS = "AdminDemonRenardANeufQueues";

// Éléments de l'interface
const loginScreen = document.getElementById('login-screen');
const adminPanel = document.getElementById('admin-panel');
const logsDisplay = document.getElementById('logs-display');

// Fonction de connexion
function handleAuth() {
    const email = document.getElementById('reg-email').value;
    const pass = document.getElementById('reg-pass').value;
    const prenom = document.getElementById('reg-prenom').value;

    // Vérification si c'est TOI (L'Admin)
    if (email === ADMIN_EMAIL && pass === ADMIN_PASS) {
        showAdminPanel();
        addLog("[AUTH] Connexion Admin réussie : " + email);
    } else {
        // Simulation création compte utilisateur
        alert("Bienvenue sur ADO NINJA, " + prenom + " ! Ton compte est créé.");
        addLog("[USER] Nouveau compte : " + prenom + " (" + email + ")");
    }
}

// Afficher le panneau Admin
function showAdminPanel() {
    loginScreen.style.display = 'none';
    adminPanel.style.display = 'block';
    document.body.style.alignItems = 'flex-start';
    document.body.style.padding = '20px';
}

// Système de Logs
function addLog(message) {
    const now = new Date();
    const time = now.getHours() + ":" + now.getMinutes();
    const newLog = document.createElement('p');
    newLog.textContent = `[${time}] ${message}`;
    logsDisplay.prepend(newLog);
}

// Poster une annonce (Admin seulement)
function postAnnouncement() {
    const text = document.getElementById('announcement-text').value;
    if (text.trim() !== "") {
        alert("Annonce publiée : " + text);
        addLog("[ANNONCE] Publication : " + text);
        document.getElementById('announcement-text').value = "";
    }
}

// Déconnexion
function logout() {
    location.reload();
}

// Simulation Modération Gemini (Exemple de logique)
function checkBioWithGemini(bioText) {
    // Ici on connectera ton API Key plus tard
    // Si gros mot détecté :
    // addLog("[IA WARNING] Avertissement 1/3 pour @User (Langage)");
}
