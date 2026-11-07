<h1>Anmeldung</h1>
<p>Produkt und Kategorieverwaltung</p>
<form id="login-form" onSubmit="LoginController.onSubmit(event)">
    <label>Benutzername: <br>
    <input required maxlength="50" id="username" type="text" placeholder="Benutzername"><br></label>
    <label>Passwort: <br>
    <input required maxlength="50" id="password" type="password" placeholder="Passwort"><br></label>
    <p>
        <button>Anmelden</button>
    </p>
</form>