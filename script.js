document.getElementById("cropForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let N = parseInt(document.getElementById("nitrogen").value);
    let P = parseInt(document.getElementById("phosphorus").value);
    let K = parseInt(document.getElementById("potassium").value);
    let temp = parseFloat(document.getElementById("temperature").value);
    let humidity = parseFloat(document.getElementById("humidity").value);
    let rainfall = parseFloat(document.getElementById("rainfall").value);

    let crop = "";
    let fertilizer = "";

    // Crop Recommendation Logic
    if (rainfall > 200 && temp > 20 && temp < 35) {
        crop = "Rice 🌾";
    } else if (rainfall < 100 && temp > 20 && temp < 30) {
        crop = "Wheat 🌿";
    } else if (temp > 25 && rainfall < 150) {
        crop = "Maize 🌽";
    } else if (humidity > 60) {
        crop = "Sugarcane 🍬";
    } else {
        crop = "Pulses 🌱";
    }

    // Fertilizer Advisory
    if (N < 50) {
        fertilizer = "Use Nitrogen-rich fertilizer (Urea)";
    } else if (P < 50) {
        fertilizer = "Use Phosphorus-rich fertilizer (DAP)";
    } else if (K < 50) {
        fertilizer = "Use Potassium-rich fertilizer (MOP)";
    } else {
        fertilizer = "Soil nutrients are sufficient 👍";
    }

    document.getElementById("result").innerHTML = `
        <h3>✅ Advisory Result</h3>
        <p><strong>Recommended Crop:</strong> ${crop}</p>
        <p><strong>Fertilizer Advice:</strong> ${fertilizer}</p>
    `;
});
