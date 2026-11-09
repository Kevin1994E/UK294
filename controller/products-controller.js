class ProductsController {

    static async loadProducts() {
        try {
            const response = await ApiModel.getProducts();

            if (!response.ok) {
                alert("Produkte konnten nicht geladen werden. Status: " + response.status);
                return;
            }

            const products = await response.json();
            //console.log("API-Antwort:", products);

            const table = document.getElementById("products");
            // Leert Tabelle
            table.replaceChildren();

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
                editButton.addEventListener("click", () => alert(product.sku));
                //await sorgt dafür das die Seite erst neu geladen wird wenn das löschen fertig ist.
                deleteButton.addEventListener("click", async () => {
                    await ProductsController.deleteProduct(product.sku);
                    location.reload();
                });
                //Fügt Button in der letzten Zelle ein
                lastCell.appendChild(editButton);
                lastCell.appendChild(deleteButton);

            }
        } catch (error) {
            console.error(error);
        }
    }

    static async deleteProduct(sku) {

        try {
            const response = await ApiModel.deleteProduct(sku);

            if (!response.ok) {
                alert("Status: " + response.status);
                return;
            } else if (response.status === 204) {
                alert("Produkt erfolgreich gelöscht: " + response.status);
            } else if (response.status === 404) {
                alert("Produkt nicht gefunden: " + response.status);
            }
        } catch (error) {
            console.error(error);
        }
    }
}
ProductsController.loadProducts();
