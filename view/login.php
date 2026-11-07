<h1>Anmeldung</h1>
<p>Produkt und Kategorieverwaltung</p>
<form onSubmit="LoginController.onSubmit" id="login-form" method="post">
    <label>Benutzername: <br>
    <input required maxlength="50" id="username" type="text" placeholder="Benutzername"><br></label>
    <label>Passwort: <br>
    <input required maxlength="50" id="password" type="password" placeholder="Passwort"><br></label>
    <p>
        <button type="submit">Anmelden</button>
    </p>
</form>
<p id="login-error" role="alert"></p>