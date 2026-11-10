/**
 * Steuert das Formular für Kategorien.
 */
class CategoryDetailController {

    /**
     * Startet das Speichern der Kategorie.
     * @param event Ereignis beim Absenden des Formulars
     */
    static onSubmit(event) {
        // Verhindert das die Seinte neu geladen wird beim drücken des Buttons.
        event.preventDefault();
        CategoryDetailController.createUpdateCategory();
        //document.body.classList.add("loading");
    }

    /**
     * Erstellt oder bearbeitet eine Kategorie.
     */
    static async createUpdateCategory() {
        const params = new URLSearchParams(window.location.search);
        const categoryId = params.get("category_id");
        const name = document.getElementById("name").value;
        const active = document.getElementById("product_active").checked ? 1 : 0;

        document.body.classList.add("loading");

        try {
            let response;

            if (categoryId) {
                response = await ApiModel.updateCategory(categoryId, active, name);
            } else {
                response = await ApiModel.createCategory(active, name);
            }

            if (response.status === 401) {
                alert("Sie sind nicht angemeldet.");
                window.location.replace("/index.php");
                return;
            }

            if (!response.ok) {
                alert("Speichern fehlgeschlagen. Status: " + response.status);
                return;
            }

            alert("Kategorie erfolgreich gespeichert.");
            window.location.href = "categories.php";
        } catch (error) {
            alert("Kategorie konnte nicht gespeichert werden: " + error.message);
        } finally {
            document.body.classList.remove("loading");
        }
    }

    /**
     * Lädt die Kategorie und füllt das Formular.
     */
    static async loadDetailCategory() {
        const params = new URLSearchParams(window.location.search);
        const categoryId = params.get("category_id");

        if (!categoryId) {
            return;
        }

        document.body.classList.add("loading");

        const response = await ApiModel.getCategory(categoryId);

        if (response.status === 401) {
                alert("Sie sind nicht angemeldet.");
                window.location.replace("/index.php");
                return;
            }

        if (!response.ok) {
            throw new Error("Kategorie konnte nicht geladen werden. Status: " + response.status);
        }

        const category = await response.json();

        document.getElementById("category_id").value = category.category_id;
        document.getElementById("name").value = category.name;
        document.getElementById("product_active").checked = Number(category.active) === 1;
    }
}

CategoryDetailController.loadDetailCategory()
    .finally(() => document.body.classList.remove("loading"))
    .catch(error => alert(error.message));