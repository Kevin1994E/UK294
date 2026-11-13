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

<button type="button" onclick="window.location.href='product-detail.php'">
    Neues Produkt erfassen
</button>

<form id="product-form" onSubmit="ProductDetailController.onSubmit(event)"><br>
    <label>SKU: <br>
        <input required maxlength="10" id="sku" type="text" placeholder="SKU"></label><br>
    <label for="id_category">Kategorie</label><br>
    <select id="id_category" required>
        <option value="">Bitte auswählen</option>
    </select><br>
    <label>Produkt Name: <br>
        <input required maxlength="50" id="name" type="text" placeholder="Produkt Name"></label><br>
    <label>Bild Link: <br>
        <input required maxlength="100" id="image" type="url" placeholder="Bild Link"></label><br>
    <label>Preis: <br>
        <input required id="price" type="number" min="0" step="0.05" placeholder="Preis"></label><br>
    <label>Lagerbestand stk.: <br>
        <input required id="stock" type="number" min="0" step="1" placeholder="Lagerbestand stk."></label><br>
    <label>Beschreibung: <br>
        <textarea id="description" required maxlength="1000" rows="5" cols="100"
            placeholder="Beschreibung"></textarea></label><br>
    <label>Produkt aktiv: <br>
        <input type="checkbox" id="product_active" name="active"></label><br>
    <button type="submit">Speichern</button>
</form>

<?php
require __DIR__ . '/blocks/footer.php';