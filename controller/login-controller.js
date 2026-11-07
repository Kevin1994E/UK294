class LoginController {
    
    static onSubmit(event) {
        // Verhindert das die Seinte neu geladen wird beim drücken des Buttons.
        event.preventDefault();
        LoginController.sendLogin();
        document.body.classList.add("loading");
    }

    static async loginFailedAlert(response) {
        const errorData = await response.json();
        alert(response.status + ": " + errorData.error_message);
    }

    // async Code darunter läuft weiter und wartet nicht bis er fertig ist. (Bei Anfragen / wartezeit unbekannt)
    static async sendLogin() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        try {
            const response = await ApiModel.sendLogin(username, password);

            if (!response.ok) {
                document.body.classList.remove("loading");
                await LoginController.loginFailedAlert(response);
                return;
            }

            console.log("Login erfolgreich");
            LoginController.loginSuccessfully();
        } catch (error) {
            console.error(error.message);
        }
    }
    static loginSuccessfully(){
        window.location.href = "/view/products.php";
    }
}