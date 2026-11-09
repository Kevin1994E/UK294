class LogoutController {
    
    static onSubmit(event) {
        // Verhindert das die Seinte neu geladen wird beim drücken des Buttons.
        event.preventDefault();
        LogoutController.sendLogout();
        document.body.classList.add("loading");
    }

    static async logoutFailedAlert(response) {
        const errorData = await response.json();
        alert(response.status + ": " + errorData.error_message);
    }

    // async Code darunter läuft weiter und wartet nicht bis er fertig ist. (Bei Anfragen / wartezeit unbekannt)
    static async sendLogout() {

        try {
            const response = await ApiModel.sendLogout();

            if (!response.ok) {
                document.body.classList.remove("loading");
                await LogoutController.logoutFailedAlert(response);
                return;
            }

            console.log("Logout erfolgreich");
            LogoutController.logoutSuccessfully();
        } catch (error) {
            console.error(error.message);
        }
    }
    static logoutSuccessfully(){
        window.location.href = "/index.php";
    }
}