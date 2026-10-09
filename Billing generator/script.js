// PRODUCT DATABASE

let products = {

    "Laptop": 50000,

    "Mouse": 800,

    "Keyboard": 1500,

    "Monitor": 12000,

    "Headphone": 2000,

    "Mobile": 25000,

    "Charger": 1200

};


// GRAND TOTAL

let grandTotal = 0;


// PRODUCT COUNT

let productCount = 0;


// ADD PRODUCT FUNCTION

function addProduct() {

    let productName =
        document.getElementById("productName").value.trim();

    let productPrice =
        Number(document.getElementById("productPrice").value);

    let quantity =
        Number(document.getElementById("quantity").value);


    // VALIDATION

    if (productName === "") {

        alert("Please enter product name");

        return;
    }


    if (productPrice <= 0) {

        alert("Please enter a valid price");

        return;
    }


    if (quantity <= 0) {

        alert("Please enter a valid quantity");

        return;
    }


    // REMOVE EMPTY ROW

    let emptyRow =
        document.getElementById("emptyRow");

    if (emptyRow) {

        emptyRow.remove();
    }


    // CHECK PRODUCT

    let actualPrice =
        products[productName];


    let status;

    let total = 0;


    // PRODUCT FOUND

    if (actualPrice !== undefined) {


        // PRICE MATCH

        if (productPrice === actualPrice) {

            status = "MATCH";

            total = productPrice * quantity;

        }


        // PRICE MISMATCH

        else {

            status = "MISMATCH";

        }

    }


    // PRODUCT NOT FOUND

    else {

        status = "MISMATCH";

    }


    // PRODUCT NUMBER

    productCount++;


    // ADD ONLY MATCHED PRODUCT TO TOTAL

    if (status === "MATCH") {

        grandTotal = grandTotal + total;

    }


    // STATUS CLASS

    let statusClass =
        status === "MATCH"
            ? "match"
            : "mismatch";


    // DISPLAY TOTAL

    let displayTotal =
        status === "MATCH"
            ? "₹" + total.toLocaleString("en-IN")
            : "-";


    // CREATE TABLE ROW

    let row = `

        <tr>

            <td>${productCount}</td>

            <td>
                <strong>${productName}</strong>
            </td>

            <td>
                ₹${productPrice.toLocaleString("en-IN")}
            </td>

            <td>
                ${quantity}
            </td>

            <td>
                <strong>${displayTotal}</strong>
            </td>

            <td>
                <span class="${statusClass}">
                    ${status}
                </span>
            </td>

        </tr>

    `;


    // ADD ROW

    document
        .getElementById("billTable")
        .insertAdjacentHTML(
            "beforeend",
            row
        );


    // UPDATE GRAND TOTAL

    document
        .getElementById("grandTotal")
        .innerText =
        "₹" + grandTotal.toLocaleString("en-IN");


    // CLEAR INPUTS

    document.getElementById("productName").value = "";

    document.getElementById("productPrice").value = "";

    document.getElementById("quantity").value = "";

}
function printBill() {

    if (productCount === 0) {
        alert("Please add at least one product");
        return;
    }

    window.print();
}