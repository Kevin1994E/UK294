class ProductDetailController {

    static onSubmit(event) {
        // Verhindert das die Seinte neu geladen wird beim drücken des Buttons.
        event.preventDefault();
        ProductDetailController.createUpdateProduct();
        //document.body.classList.add("loading");
    }

    static async createUpdateProduct() {
        const sku = document.querySelector("#sku").value;
        const id_category = document.querySelector("#id_category").value;
        const name = document.querySelector("#name").value;
        const image = document.querySelector("#image").value;
        const price = document.querySelector("#price").value;
        const stock = document.querySelector("#stock").value;
        const description = document.querySelector("#description").value;
        const active = document.querySelector("#product_active").checked ? 1 : 0;

        try {
            const response = await ApiModel.createUpdateProduct(sku, active, id_category, name, image, description, price, stock);

            if (!response.ok) {
                alert("Status: " + response.status);
                return;
            } else if (response.status === 201) {
                alert("Produkt erfolgreich erstellt: " + response.status);
                window.location.href = 'products.php'
            } else if (response.status === 204) {
                alert("Update des Produkt erfolgreich: " + response.status);
                window.location.href = 'products.php'
            }
        } catch (error) {
            console.error(error);
        }
    }

    static async loadCategory() {
        const response = await ApiModel.getCategories();

        if (!response.ok) {
            throw new Error("Kategorien konnten nicht geladen werden.");
        }

        const categories = await response.json();
        const select = document.getElementById("id_category");

        for (const category of categories) {
            const option = document.createElement("option");
            option.value = category.category_id;
            option.textContent = category.name;
            select.appendChild(option);
        }
    }

}
ProductDetailController.loadCategory()
    .catch(error => alert(error.message));