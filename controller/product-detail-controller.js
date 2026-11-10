/**
 * Steuert das Formular für Produkte.
 */
class ProductDetailController {

    /**
     * Startet das Speichern des Produkts.
     * @param event Ereignis beim Absenden des Formulars
     */
    static onSubmit(event) {
        // Verhindert das die Seinte neu geladen wird beim drücken des Buttons.
        event.preventDefault();
        ProductDetailController.createUpdateProduct();
        //document.body.classList.add("loading");
    }

    /**
     * Erstellt oder bearbeitet ein Produkt.
     */
    static async createUpdateProduct() {
        const sku = document.querySelector("#sku").value;
        const id_category = document.querySelector("#id_category").value;
        const name = document.querySelector("#name").value;
        const image = document.querySelector("#image").value;
        const price = document.querySelector("#price").value;
        const stock = document.querySelector("#stock").value;
        const description = document.querySelector("#description").value;
        const active = document.querySelector("#product_active").checked ? 1 : 0;

        document.body.classList.add("loading");

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
        } finally {
            document.body.classList.remove("loading");
        }
    }

    /**
     * Lädt die Kategorien für das Dropdown.
     */
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

    /**
     * Lädt das Produkt und füllt das Formular.
     */
    static async loadDetailProduct() {

        const params = new URLSearchParams(window.location.search);
        const sku = params.get("sku");

        if (!sku) {
            return;
        }

        const response = await ApiModel.getProduct(sku);

        if (!response.ok) {
            throw new Error("Produkt konnte nicht geladen werden. Status: " + response.status);
        }

        const product = await response.json();

        document.getElementById("sku").value = sku;
        document.getElementById("sku").readOnly = true;
        document.getElementById("id_category").value = product.id_category;
        document.getElementById("name").value = product.name;
        document.getElementById("image").value = product.image;
        document.getElementById("price").value = product.price;
        document.getElementById("stock").value = product.stock;
        document.getElementById("description").value = product.description;
        document.getElementById("product_active").checked = Number(product.active) === 1;
    }
}
document.body.classList.add("loading");
ProductDetailController.loadCategory()
    .then(() => ProductDetailController.loadDetailProduct())
    .finally(() => document.body.classList.remove("loading"))
    .catch(error => alert(error.message));