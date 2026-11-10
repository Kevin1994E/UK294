<?php
$page_title = 'Kategorie-Detail';
$page_controller_path = '/controller/category-detail-controller.js';

require __DIR__ . '/blocks/header.php';
?>

<h1>Kategorie-Detail</h1>
<p>Auf dieser Seite können Kategorien bearbeiten, erstellt oder Details angesehen werden.</p>

<button type="button" onclick="window.location.href='categories.php'">
    Zurück
</button>

<button type="button" onclick="window.location.href='category-detail.php'">
    Neue Kategorie erfassen
</button>

<form id="category-form" onSubmit="CategoryDetailController.onSubmit(event)"><br>
    <label for="category_id">Kategorie-ID:</label><br>
    <input type="text" id="category_id" readonly placeholder="Wird automatisch vergeben"><br>
    <label>Kategorie Name: <br>
        <input required maxlength="50" id="name" type="text" placeholder="Kategorie Name"><br></label>
    <label>Kategorie aktiv: <br>
        <input type="checkbox" id="product_active" name="active"></label><br>
    <button type="submit">Speichern</button>
</form>

<?php
require __DIR__ . '/blocks/footer.php';