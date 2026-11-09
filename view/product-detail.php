<?php
$page_title = 'Produkte-Detail';
$page_controller_path = '/controller/product-detail-controller.js';

require __DIR__ . '/blocks/header.php';
?>

<h1>Produkte-Detail</h1>
<p>Auf dieser Seite können Produkte bearbeiten, erstellt oder Details angesehen werden.</p>

<button type="button" onclick="window.location.href='products.php'">
    Zurück
</button>

<button type="button">
    Neues Produkt erfassen
</button>

<button type="button">
    Speichern
</button>

<button type="button" onclick="LogoutController.onSubmit(event)">
    Abmelden
</button><br>

<form id="product-form" onSubmit="ProductDetailController.onSubmit(event)"><br>
    <label>Produkt ID: <br>
    <input required id="product_id" type="number" min="0" placeholder="Produkt ID"><br></label>
    <label>SKU: <br>
    <input required maxlength="50" id="sku" type="text" placeholder="SKU"><br></label>
    <label>Kategorie ID: <br>
    <input required maxlength="20" id="id_category" type="text" placeholder="Kategorie ID"><br></label>
    <label>Produkt Name: <br>
    <input required maxlength="50" id="name" type="text" placeholder="Produkt Name"><br></label>
    <label>Bild Link: <br>
    <input required maxlength="50" id="image" type="text" placeholder="Bild Link"><br></label>
    <label>Preis: <br>
    <input required id="price" type="number" min="0" max="999999.99" step="0.01" placeholder="Preis"><br></label>
    <label>Lagerbestand stk.: <br>
    <input required id="stock" type="number" min="0" placeholder="Lagerbestand stk."><br></label>
    <label>Beschreibung: <br>
    <input required maxlength="1000" id="description" type="text" placeholder="Beschreibung"><br></label>
    <p class="product-status">Produkt-Status:</p> 
    <label><input type="radio" name="activ" value="1"> Aktiv</label>
    <label><input type="radio" name="activ" value="0"> Nicht aktiv</label>
</form>

<?php
require __DIR__ . '/blocks/footer.php';