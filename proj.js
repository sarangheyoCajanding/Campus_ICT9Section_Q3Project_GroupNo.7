function computeTotal(applyDiscount = null) {
    let start = parseFloat(document.getElementById("startPoint").value);
    let end = parseFloat(document.getElementById("endPoint").value);
    let customKM = parseFloat(document.getElementById("customKM")?.value) || 0;

    let minimumFare = 50;
    let includedKM = 2;
    let ratePerKM = 15;

    let totalDistance = Math.max(Math.abs(end - start) + customKM, 0);
    let excessKM = Math.max(totalDistance - includedKM, 0);

    let hasDiscount;
    if (applyDiscount === null) {
        hasDiscount = document.getElementById("discountBox").checked;
    } else {
        hasDiscount = applyDiscount;
    }

    let computedFare = minimumFare + (excessKM * ratePerKM);
    computedFare = computedFare * (1 - 0.20 * hasDiscount);

    document.getElementById("fareOutput").innerHTML = "₱ " + computedFare.toFixed(2);
}