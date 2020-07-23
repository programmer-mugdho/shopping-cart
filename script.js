// Phone plus button
const phonePlusBtn = document.getElementById("phone-plus-btn")
phonePlusBtn.addEventListener('click', function () {
    plusButtonWork('phone-quantity','phone-price', 'case-price', 1219)
})

// Phone minus button
const phoneMinusBtn = document.getElementById('phone-minus-btn')
phoneMinusBtn.addEventListener('click', function () {
    minusButtonWork('phone-quantity', 'phone-price', 'case-price', 1219)
})

// Case plus button
const casePlusBtn = document.getElementById("case-plus-btn")
casePlusBtn.addEventListener('click', function () {
    plusButtonWork('case-quantity', 'case-price', 'phone-price', 59)
})

// Case minus button
const caseMinusBtn = document.getElementById("case-minus-btn")
caseMinusBtn.addEventListener('click', function () {
    minusButtonWork('case-quantity', 'case-price', 'phone-price', 59)
})


function plusButtonWork(phoneQuantityId, phonePriceId, casePriceId, price) {
    const phoneQuantity = document.getElementById(phoneQuantityId).value;
    let phoneQuantityNumber = parseFloat(phoneQuantity)
    phoneQuantityNumber++
    document.getElementById(phoneQuantityId).value = phoneQuantityNumber;
    const phonePrice = document.getElementById(phonePriceId).innerText
    const phonePriceNumber = parseFloat(phonePrice)
    document.getElementById(phonePriceId).innerText = phonePriceNumber + price;
    document.getElementById(phoneQuantityId).value = phoneQuantityNumber;
    const casePrice = document.getElementById(casePriceId).innerText
    const casePriceNumber = parseFloat(casePrice)
    const subtotal = phonePriceNumber + price + casePriceNumber
    document.getElementById("subtotal").innerText = subtotal
    document.getElementById('total').innerText = subtotal
}

function minusButtonWork(phoneQuantityId, phonePriceId, casePriceId, price) {
    const phoneQuantity = document.getElementById(phoneQuantityId).value;
    let phoneQuantityNumber = parseFloat(phoneQuantity)
    if (phoneQuantityNumber == 0) {
        phoneMinusBtn.setAttribute('disabled')
    }
    phoneQuantityNumber--
    document.getElementById(phoneQuantityId).value = phoneQuantityNumber;
    const phonePrice = document.getElementById(phonePriceId).innerText
    const phonePriceNumber = parseFloat(phonePrice)
    document.getElementById(phonePriceId).innerText = phonePriceNumber - price;
    document.getElementById(phoneQuantityId).value = phoneQuantityNumber;
    const casePrice = document.getElementById(casePriceId).innerText
    const casePriceNumber = parseFloat(casePrice)
    const subtotal = phonePriceNumber - price + casePriceNumber
    document.getElementById("subtotal").innerText = subtotal
    document.getElementById('total').innerText = subtotal
}
