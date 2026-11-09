class CategoriesController {

    static async loadCategories() {
        try {
            const response = await ApiModel.getCategories();

            if (!response.ok) {
                alert("Kategorien konnten nicht geladen werden. Status: " + response.status);
                return;
            }

            const categories = await response.json();
            console.log("API-Antwort:", categories);

            const table = document.getElementById("categories");
            table.replaceChildren();

            for (const category of categories) {
                const row = table.insertRow();

                row.insertCell().textContent = category.category_id;
                row.insertCell().textContent = category.active;
                row.insertCell().textContent = category.name;

                const lastCell = row.insertCell();
                const button = document.createElement("button");
                const button2 = document.createElement("button");
                button2.classList.add("delete-button-table");
                button.textContent = "Details / Bearbeiten";
                button2.textContent = "Löschen";
                button.addEventListener("click", () => alert(category.name));
                //Fügt Button in der letzten Zelle ein
                lastCell.appendChild(button);
                lastCell.appendChild(button2);

            }
        } catch (error) {
            console.error(error);
        }
    }
}
CategoriesController.loadCategories();
