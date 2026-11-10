/**
 * Steuert die Kategorienübersicht.
 */
class CategoriesController {

    /**
     * Lädt die Kategorien und zeigt sie in der Tabelle.
     */
    static async loadCategories() {
        document.body.classList.add("loading");

        try {
            const response = await ApiModel.getCategories();

            if (!response.ok) {
                alert("Kategorien konnten nicht geladen werden. Status: " + response.status);
                return;
            }

            const categories = await response.json();
            //console.log("API-Antwort:", categories);

            const table = document.getElementById("categories");
            table.replaceChildren();

            for (const category of categories) {
                const row = table.insertRow();

                row.insertCell().textContent = category.category_id;
                row.insertCell().textContent = category.active;
                row.insertCell().textContent = category.name;

                const lastCell = row.insertCell();
                const editButton = document.createElement("button");
                const deleteButton = document.createElement("button");

                deleteButton.classList.add("delete-button-table");
                editButton.textContent = "Details / Bearbeiten";
                deleteButton.textContent = "Löschen";
                editButton.addEventListener("click", () => {
                    window.location.href = "category-detail.php?category_id=" + encodeURIComponent(category.category_id);
                });
                deleteButton.addEventListener("click", async () => {
                    if (!confirm("Möchtest du diese Kategorie wirklich löschen?\n\nKategorie-ID: " + category.category_id + "\nName: " + category.name)) {
                        return;
                    }

                    await CategoriesController.deleteCategorie(category.category_id);
                    location.reload();
                });

                //Fügt Button in der letzten Zelle ein
                lastCell.appendChild(editButton);
                lastCell.appendChild(deleteButton);
            }
        } catch (error) {
            console.error(error);
        } finally {
            document.body.classList.remove("loading");
        }
    }

    /**
     * Löscht die ausgewählte Kategorie.
     * @param categoryID ID der Kategorie
     */
    static async deleteCategorie(categoryID) {
        document.body.classList.add("loading");

        try {
            const response = await ApiModel.deleteCategory(categoryID);

            if (!response.ok) {
                alert("Status: " + response.status);
                return;
            } else if (response.status === 204) {
                alert("Kategorie erfolgreich gelöscht: " + response.status);
            } else if (response.status === 404) {
                alert("Kategorie nicht gefunden: " + response.status);
            }
        } catch (error) {
            console.error(error);
        } finally {
            document.body.classList.remove("loading");
        }
    }
}
CategoriesController.loadCategories();