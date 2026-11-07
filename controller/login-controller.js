class LoginController {
    
    static onSubmit(event) {
        // Verhindert das die Seinte neu geladen wird beim drücken des Buttons.
        event.preventDefault();
        LoginController.sendLogin();
    }

    static async loginFailedAlert(response) {
        let errorData = await response.json();
        alert(response.status + ": " + errorData.error_message);
    }

    // async Code darunter läuft weiter und wartet nicht bis er fertig ist. (Bei Anfragen / wartezeit unbekannt)
    static async sendLogin() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        try {
            let response = await ApiModel.sendLogin(username, password);

            if (!response.ok) {
                return LoginController.loginFailedAlert(response);
            }

            console.log("Login erfolgreich");
        } catch (error) {
            console.error(error.message);
        }
    }
}

document
    .querySelector("#login-form")
    // Ruft Funktion onSubmit auf. (Sobald Button Anmeldung gedrückt wird)
    .addEventListener("submit", LoginController.onSubmit);