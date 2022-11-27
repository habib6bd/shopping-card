function updateProductInput(productId, price, isIncreasing) {
    const productInput = document.getElementById(productId + '-number');
    let productNumber = productInput.value;
    if (isIncreasing) {
        productNumber = parseInt(productNumber) + 1;
    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }

    productInput.value = productNumber;

    const updateProduct = document.getElementById(productId + '-total');
    updateProduct.innerText = productNumber * price;

    calculateTotal()
}

function updataProductInput(product) {
    const productNumber = document.getElementById(product + '-number');
    const productQuantity = parseInt(productNumber.value);
    return productQuantity;
}

function calculateTotal() {
    const phonAmmount = updataProductInput('phone') * 1219;
    const caseAmmount = updataProductInput('case') * 59;
    const subTotal = phonAmmount + caseAmmount;
    const tax = subTotal / 10;
    const total = subTotal + tax;

    //set in html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-ammount').innerText = tax;
    document.getElementById('total-price').innerText = total;
}


//phone number update and minus
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductInput('phone', 1219, true);

})

document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductInput('phone', 1219, false);
})

// case number update
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductInput('case', 59, true);
})

document.getElementById('case-minus').addEventListener('click', function () {
    updateProductInput('case', 59, false);
})