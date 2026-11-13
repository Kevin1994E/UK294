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

    // Mit await wartet die Funktion auf die Antwort der API.
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
            alert("Abmeldung nicht möglich.");
        }
        // Beendet den Ladecursor auch bei einem Fehler.
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