
function productCalculation(btnId, valueId, totalId, prise, isIncrease) {
    document.getElementById(btnId).addEventListener('click', function () {
        let myInput = document.getElementById(valueId)
        let myCount = parseInt(myInput.value)
        if (isIncrease) {
            myNewCount = myCount + 1
        } else if (!isIncrease && myCount > 0) {
            myNewCount = myCount - 1
        }
        myInput.value = myNewCount
        let currentTotal = document.getElementById(totalId)
        let currentTotalCount = parseInt(currentTotal.innerText)
        let total = myNewCount * prise
        currentTotal.innerText = total
        calculateTotal()
    })
}

// Increasing & Decreasing Prise of Device according to Quantity
productCalculation('increaseBtn', 'deviceAmount', 'currentTotal', 1219, true)
productCalculation('decreaseBtn', 'deviceAmount', 'currentTotal', 1219, false)

// Increasing & Decreasing Prise of Case according to Quantity
productCalculation('increaseBtn2', 'caseAmount', 'currentTotal2', 59, true)
productCalculation('decreaseBtn2', 'caseAmount', 'currentTotal2', 59, false)

function calculateTotal() {
    let deviceCount = getInput('deviceAmount')
    let caseCount = getInput('caseAmount')

    let totalPrice = deviceCount * 1219 + caseCount * 59;
    document.getElementById('subTotal').innerText = totalPrice

    let tax = totalPrice * 0.1
    let totalTax = Math.round(tax)
    document.getElementById('tax').innerText = totalTax

    grandTotal = totalPrice + totalTax
    document.getElementById('grand-total').innerText = grandTotal
}

function getInput(id) {
    let productInput = document.getElementById(id)
    let productCount = parseInt(productInput.value)
    return productCount
}

let checkOutBtn=document.getElementById('checkOut')
checkOutBtn.addEventListener('click', function () {
    alert(`You've to Pay $ ${grandTotal}`)
})