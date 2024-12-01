// Conversion rates
const conversionRates = {
    INR: { USD: 0.012, EUR: 0.011, GBP: 0.0098 },
    USD: { INR: 84.56, EUR: 0.94, GBP: 0.78 },
    EUR: { INR: 89.98, USD: 1.06, GBP: 0.83 },
    GBP: { INR: 107.69, USD: 1.28, EUR: 1.20 },
};

// Handle form submission
document.getElementById("converterForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    if (fromCurrency === toCurrency) {
        document.getElementById("result").textContent = `Converted Amount: ${amount} ${toCurrency}`;
        return;
    }

    const rate = conversionRates[fromCurrency][toCurrency];
    const convertedAmount = amount * rate;

    document.getElementById("result").textContent = `Converted Amount: ${convertedAmount.toFixed(2)} ${toCurrency}`;
});
