// ================= PRODUCT FILTER =================

const filterButtons = document.querySelectorAll(".filter-btn");
const products = document.querySelectorAll(".product-item");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active class
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        products.forEach(product => {

            if (filter === "all" || product.classList.contains(filter)) {

                product.style.display = "block";

            } else {

                product.style.display = "none";

            }

        });

    });

});


// ================= PRODUCT BUTTON =================

function showMessage(productName) {

    alert(productName + " selected! Thank you for choosing BREWORA.");

}


// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you, " + name +
        "! Your message has been received by BREWORA."
    );

    contactForm.reset();

});


// ================= CURRENT YEAR =================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ================= NAVBAR ACTIVE LINK =================

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});