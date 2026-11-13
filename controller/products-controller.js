/**
 * Steuert die Produktübersicht.
 */
class ProductsController {

    /**
     * Lädt die Produkte und zeigt sie in der Tabelle.
     */
    static async loadProducts() {
        document.body.classList.add("loading");

        try {
            const response = await ApiModel.getProducts();

            // Leitet nicht angemeldete Benutzer zur Loginseite weiter.
            if (response.status === 401) {
                alert("Sie sind nicht angemeldet.");
                window.location.replace("/index.php");
                return;
            }

            if (!response.ok) {
                alert("Produkte konnten nicht geladen werden. Status: " + response.status);
                return;
            }

            const products = await response.json();
            //console.log("API-Antwort:", products);

            const table = document.getElementById("products");
            // Leert Tabelle
            table.replaceChildren();

            // Erstellt für jedes Produkt eine Tabellenzeile.
            for (const product of products) {
                const row = table.insertRow();

                row.insertCell().textContent = product.sku;
                row.insertCell().textContent = product.name;
                row.insertCell().textContent = product.price;
                row.insertCell().textContent = product.stock;
                row.insertCell().textContent = product.active;
                row.insertCell().textContent = product.id_category;

                const lastCell = row.insertCell();
                const editButton = document.createElement("button");
                const deleteButton = document.createElement("button");

                deleteButton.classList.add("delete-button-table");
                editButton.textContent = "Details / Bearbeiten";
                deleteButton.textContent = "Löschen";
                editButton.addEventListener("click", () => {
                    window.location.href = "product-detail.php?sku=" + encodeURIComponent(product.sku);
                });

                //await sorgt dafür das die Seite erst neu geladen wird wenn das löschen fertig ist.
                deleteButton.addEventListener("click", async () => {
                    if (!confirm("Möchtest du dieses Produkt wirklich löschen?\n\nSKU: " + product.sku + "\nName: " + product.name)) {
                        return;
                    }
                    await ProductsController.deleteProduct(product.sku);
                    location.reload();
                });

                //Fügt Button in der letzten Zelle ein
                lastCell.appendChild(editButton);
                lastCell.appendChild(deleteButton);

            }
        } catch (error) {
            console.error(error);
            alert("Produkte konnten nicht geladen werden.");
        } finally {
            document.body.classList.remove("loading");
        }
    }

    /**
     * Löscht das ausgewählte Produkt.
     * @param sku SKU des Produkts
     */
    static async deleteProduct(sku) {
        document.body.classList.add("loading");

        try {
            const response = await ApiModel.deleteProduct(sku);

            if (response.status === 204) {
                alert("Produkt erfolgreich gelöscht: " + response.status);
            } else if (response.status === 404) {
                alert("Produkt nicht gefunden: " + response.status);
            } else if (!response.ok) {
                alert("Produkt konnte nicht gelöscht werden. Status: " + response.status);
                return;
            }
        } catch (error) {
            console.error(error);
            alert("Produkt konnte nicht gelöscht werden.");
        } finally {
            document.body.classList.remove("loading");
        }
    }
}
ProductsController.loadProducts();