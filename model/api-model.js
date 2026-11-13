/**
 * Sendet die Anfragen an die API.
 */
class ApiModel {
    /**
     * Meldet den Benutzer an.
     * @param username Benutzername
     * @param password Passwort
     * @returns Promise mit der API-Antwort
     */
    static sendLogin(username, password) {
        return fetch("https://campus.csbe.ch/uek294/api/v1/authenticate", {
            method: "POST",
            credentials: "include",
            body: JSON.stringify({
                username: username,
                password: password
            })
        });
    }

    /**
     * Meldet den Benutzer ab.
     * @returns Promise mit der API-Antwort
     */
    static sendLogout() {
        return fetch("https://campus.csbe.ch/uek294/api/v1/unauthenticate", {
            method: "POST",
            credentials: "include"
        });
    }

    /**
     * Ruft alle Kategorien ab.
     * @returns Promise mit der API-Antwort
     */
    static getCategories() {
        return fetch("https://campus.csbe.ch/uek294/api/v1/categories", {
            method: "GET",
            credentials: "include"
        });
    }

    /**
     * Erstellt eine neue Kategorie.
     * @param active Status der Kategorie
     * @param name Name der Kategorie
     * @returns Promise mit der API-Antwort
     */
    static createCategory(active, name) {
        return fetch("https://campus.csbe.ch/uek294/api/v1/category", {
            method: "POST",
            credentials: "include",
            body: JSON.stringify({
                active : active,
                name : name
            })
        });
    }

    /**
     * Ruft eine Kategorie anhand ihrer ID ab.
     * @param categoryID ID der Kategorie
     * @returns Promise mit der API-Antwort
     */
    static getCategory(categoryID) {
        return fetch("https://campus.csbe.ch/uek294/api/v1/category/" + encodeURIComponent(categoryID), {
            method: "GET",
            credentials: "include"
        });
    }

    /**
     * Speichert Änderungen an einer Kategorie.
     * @param categoryID ID der Kategorie
     * @param active Status der Kategorie
     * @param name Name der Kategorie
     * @returns Promise mit der API-Antwort
     */
    static updateCategory(categoryID, active, name) {
        return fetch("https://campus.csbe.ch/uek294/api/v1/category/" + encodeURIComponent(categoryID), {
            method: "PATCH",
            credentials: "include",
            body: JSON.stringify({
                active: active,
                name: name
            })
        });
    }

    /**
     * Löscht die ausgewählte Kategorie.
     * @param categoryID ID der Kategorie
     * @returns Promise mit der API-Antwort
     */
    static deleteCategory(categoryID) {
        return fetch("https://campus.csbe.ch/uek294/api/v1/category/" + encodeURIComponent(categoryID), {
            method: "DELETE",
            credentials: "include"
        });
    }

    /**
     * Ruft alle Produkte ab.
     * @returns Promise mit der API-Antwort
     */
    static getProducts() {
        return fetch("https://campus.csbe.ch/uek294/api/v1/products", {
            method: "GET",
            credentials: "include"
        });
    }

    /**
     * Ruft ein Produkt anhand seiner SKU ab.
     * @param sku SKU des Produkts
     * @returns Promise mit der API-Antwort
     */
    static getProduct(sku) {
        return fetch("https://campus.csbe.ch/uek294/api/v1/product/" + encodeURIComponent(sku), {
            method: "GET",
            credentials: "include"
        });
    }

    /**
     * Erstellt oder bearbeitet ein Produkt.
     * @param sku SKU des Produkts
     * @param active Status des Produkts
     * @param categoryId ID der Kategorie
     * @param name Name des Produkts
     * @param image Link zum Produktbild
     * @param description Beschreibung des Produkts
     * @param price Preis des Produkts
     * @param stock Lagerbestand
     * @returns Promise mit der API-Antwort
     */
    static createUpdateProduct(sku, active, categoryId, name, image, description, price, stock) {
        return fetch("https://campus.csbe.ch/uek294/api/v1/product/" + encodeURIComponent(sku), {
            method: "PUT",
            credentials: "include",
            body: JSON.stringify({
                active: active,
                id_category: categoryId,
                name: name,
                image: image,
                description: description,
                price: price,
                stock: stock
            })
        });
    }

    /**
     * Löscht das ausgewählte Produkt.
     * @param sku SKU des Produkts
     * @returns Promise mit der API-Antwort
     */
    static deleteProduct(sku) {
        return fetch("https://campus.csbe.ch/uek294/api/v1/product/" + encodeURIComponent(sku), {
            method: "DELETE",
            credentials: "include"
        });
    }
}