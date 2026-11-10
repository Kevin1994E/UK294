/**
 * Steuert die Abmeldung.
 */
class LogoutController {

    /**
     * Startet die Abmeldung beim Klick auf den Button.
     * @param event Klick auf den Abmelde-Button
     */
    static onSubmit(event) {
        // Verhindert das die Seinte neu geladen wird beim drücken des Buttons.
        event.preventDefault();
        LogoutController.sendLogout();
    }

    /**
     * Zeigt die Fehlermeldung der API an.
     * @param response Fehlerantwort der API
     */
    static async logoutFailedAlert(response) {
        const errorData = await response.json();
        alert(response.status + ": " + errorData.error_message);
    }

    // async Code darunter läuft weiter und wartet nicht bis er fertig ist. (Bei Anfragen / wartezeit unbekannt)
    /**
     * Sendet die Abmeldung an die API.
     */
    static async sendLogout() {

        document.body.classList.add("loading");

        try {
            const response = await ApiModel.sendLogout();

            if (!response.ok) {
                await LogoutController.logoutFailedAlert(response);
                return;
            }

            console.log("Logout erfolgreich");
            LogoutController.logoutSuccessfully();
        } catch (error) {
            console.error(error.message);
        }
        // Wird hier beendet das auch im Fall die Anfrage fehlschlägt.
        finally {
            document.body.classList.remove("loading");
        }
    }
    /**
     * Öffnet nach der Abmeldung die Loginseite.
     */
    static logoutSuccessfully() {
        window.location.href = "/index.php";
    }
}