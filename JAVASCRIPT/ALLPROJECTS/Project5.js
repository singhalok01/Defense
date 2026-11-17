const form = document.querySelector("#taxForm");

const incomeInput = document.querySelector("#income");

const taxAmount = document.querySelector("#taxAmount");

const taxMessage = document.querySelector("#taxMessage");

const resetBtn = document.querySelector("#resetBtn");


form.addEventListener("submit", (e) => {

    e.preventDefault();

    const income = Number(incomeInput.value);

    let tax = 0;


    // Validation
    if (income < 0 || incomeInput.value === "") {

        taxAmount.textContent = "₹0";

        taxMessage.textContent =
            "Please enter a valid income.";

        return;
    }


    /*
        Tax Slabs

        ₹0 - ₹12,00,000       → 0%
        ₹12,00,001 - ₹16,00,000 → 15%
        ₹16,00,001 - ₹20,00,000 → 20%
        ₹20,00,001 - ₹24,00,000 → 25%
        Above ₹24,00,000        → 30%
    */


    if (income <= 1200000) {

        tax = 0;

    }

    else if (income <= 1600000) {

        tax = (income - 1200000) * 0.15;

    }

    else if (income <= 2000000) {

        tax =
            (400000 * 0.15) +
            (income - 1600000) * 0.20;

    }

    else if (income <= 2400000) {

        tax =
            (400000 * 0.15) +
            (400000 * 0.20) +
            (income - 2000000) * 0.25;

    }

    else {

        tax =
            (400000 * 0.15) +
            (400000 * 0.20) +
            (400000 * 0.25) +
            (income - 2400000) * 0.30;

    }


    // Display result

    taxAmount.textContent =
        `₹${tax.toLocaleString("en-IN")}`;


    if (tax === 0) {

        taxMessage.textContent =
            "🎉 No tax estimated for this income.";

    }

    else {

        taxMessage.textContent =
            "Your estimated income tax has been calculated.";

    }

});


resetBtn.addEventListener("click", () => {

    form.reset();

    taxAmount.textContent = "₹0";

    taxMessage.textContent =
        "Enter your income to calculate tax.";

});