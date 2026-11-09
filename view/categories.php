<?php
$page_title = 'Kategorien';
$page_controller_path = '/controller/categories-controller.js';

require __DIR__ . '/blocks/header.php';
?>

<h1>Kategorien</h1>

<button type="button">
    Neue Kategorie erfassen
</button>

<table border="20">
    <thead>
        <tr>
            <th>Kategorie ID:</th>
            <th>Aktiv:</th>
            <th>Name:</th>
            <th>Details / Bearbeiten / Löschen:</th>
        </tr>
    </thead>
    <tbody id="categories"></tbody>
</table>

<?php
require __DIR__ . '/blocks/footer.php';