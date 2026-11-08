<?php
$page_title = 'Kategorien';
$page_controller_path = '/controller/categorys-controller.js';

require __DIR__ . '/blocks/header.php';
?>

<h1>Kategorien</h1>
<button type="button" onclick="window.location.href='products.php'">
    Produkte
</button>

<?php
require __DIR__ . '/blocks/footer.php';