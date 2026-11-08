class ProductsController {

    static async loginFailedAlert(response) {
        const errorData = await response.json();
        alert(response.status + ": " + errorData.error_message);
    }

    static async loadProducts() {
        try {
            const response = await ApiModel.getProducts();

            if (!response.ok) {
                alert("Produkte konnten nicht geladen werden. Status: " + response.status);
                return;
            }

            const products = await response.json();
            console.log("API-Antwort:", products);

            const table = document.getElementById("products");
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
                const button = document.createElement("button");
                const button2 = document.createElement("button");
                button2.classList.add("delete-button-table");
                button.textContent = "Details / Bearbeiten";
                button2.textContent = "Löschen";
                button.addEventListener("click", () => alert(item.name));
                //Fügt Button in der letzten Zelle ein
                lastCell.appendChild(button);
                lastCell.appendChild(button2);

            }
        } catch (error) {
            console.error(error);
        }
    }
}
ProductsController.loadProducts();
