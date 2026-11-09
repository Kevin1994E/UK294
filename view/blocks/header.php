<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CsBe ★ <?= $page_title ?></title>
    <link rel="stylesheet" type="text/css" href="/view/stylesheets/style.css">
    <script defer src="/model/api-model.js"></script>
    <script defer src="/controller/logout-controller.js"></script>
    <?php if ($page_controller_path): ?>
        <script defer src="<?= $page_controller_path ?>"></script>
    <?php endif; ?>
</head>

<body>
    <?php if ($page_title !== "Login"): ?>
        <nav>
            <button type="button" onclick="window.location.href='products.php'">
                Produkte
            </button>

            <button type="button" onclick="window.location.href='categories.php'">
                Kategorien
            </button>

            <button type="button" onclick="LogoutController.onSubmit(event)">
                Abmelden
            </button>
        </nav>
    <?php endif; ?>
    <main>