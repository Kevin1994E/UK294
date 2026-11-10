/**
 * Steuert die Anmeldung.
 */
class LoginController {

    /**
     * Startet die Anmeldung beim Absenden des Formulars.
     * @param event Ereignis beim Absenden des Formulars
     */
    static onSubmit(event) {
        // Verhindert das die Seinte neu geladen wird beim drücken des Buttons.
        event.preventDefault();
        LoginController.sendLogin();

    }

    /**
     * Zeigt die Fehlermeldung der API an.
     * @param response Fehlerantwort der API
     */
    static async loginFailedAlert(response) {
        const errorData = await response.json();
        alert(response.status + ": " + errorData.error_message);
    }

    // async Code darunter läuft weiter und wartet nicht bis er fertig ist. (Bei Anfragen / wartezeit unbekannt)
    /**
     * Sendet Benutzername und Passwort an die API.
     */
    static async sendLogin() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        document.body.classList.add("loading");

        try {
            const response = await ApiModel.sendLogin(username, password);

            if (!response.ok) {
                await LoginController.loginFailedAlert(response);
                return;
            }
            console.log("Login erfolgreich");
            LoginController.loginSuccessfully();
        } catch (error) {
            console.error(error.message);
        }
        // Wird hier beendet das auch im Fall die Anfrage fehlschlägt.
        finally {
            document.body.classList.remove("loading");
        }
    }
    /**
     * Öffnet nach der Anmeldung die Produktübersicht.
     */
    static loginSuccessfully() {
        window.location.href = "/view/products.php";
    }
}