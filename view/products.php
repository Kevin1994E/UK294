<?php
$page_title = 'Produkte';
$page_controller_path = '/controller/products-controller.js';

require __DIR__ . '/blocks/header.php';
?>

<h1>Produkte</h1>

<button type="button" onclick="window.location.href='product-detail.php'">
    Neues Produkt erfassen
</button>

<table border="20">
    <thead>
        <tr>
            <th>SKU:</th>
            <th>Name:</th>
            <th>Preis:</th>
            <th>Lagerbestand:</th>
            <th>Aktiv:</th>
            <th>Kategorie ID:</th>
            <th>Details / Bearbeiten / Löschen:</th>
        </tr>
    </thead>
    <tbody id="products"></tbody>
</table>

<?php
require __DIR__ . '/blocks/footer.php';


