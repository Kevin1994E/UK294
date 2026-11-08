<?php
$page_title = 'Produkte';
$page_controller_path = '/controller/products-controller.js';

require __DIR__ . '/blocks/header.php';
?>

<h1>Produkte</h1>
<button type="button" onclick="window.location.href='categories.php'">
    Kategorien
</button>

<button type="button">
    Abmelden
</button>

<table border="10">
    <thead>
        <tr>
            <th>SKU:</th>
            <th>Name:</th>
            <th>Preis:</th>
            <th>Lagerbestand:</th>
            <th>Aktiv:</th>
            <th>ID Kategorie:</th>
            <th>Details / Bearbeiten / Löschen:</th>
        </tr>
    </thead>
    <tbody id="products"></tbody>
</table>

<?php
require __DIR__ . '/blocks/footer.php';


