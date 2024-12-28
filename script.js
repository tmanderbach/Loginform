var a;
function showpass()
{
    if(a==1) {
        document.getElementById('passwordInput').type='password';
        document.getElementById('lockImg').src='eye_open.png';
        a=0;
    }
    else {
        document.getElementById('passwordInput').type='text';
        document.getElementById('lockImg').src='eye.png';
        a=1;
    }
} 

const loginForm = document.getElementById('loginForm');

        // Füge einen EventListener hinzu, der ausgeführt wird, wenn das Formular abgeschickt wird
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();

            // Hole die Werte aus den Eingabefeldern
            const username = document.getElementById('usernameInput').value;
            const password = document.getElementById('passwordInput').value;

            // Definiere die korrekten Anmeldedaten
            const correctUsername = "admin";
            const correctPassword = "123";

            // Vergleiche die eingegebenen Werte mit den korrekten Werten
            if (username === correctUsername && password === correctPassword) {
                console.log("Anmeldung erfolgreich!");
                window.location.href = "welcome.html";
            } else {
                console.error("Falsche Anmeldedaten");
                alert("Falscher Benutzername oder Passwort");
            }
        });