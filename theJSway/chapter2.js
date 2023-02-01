document.querySelector('#improvedhello').addEventListener('click', improvedHello)


function improvedHello() {
    const fullName = prompt('What is your first and last name?:')
    alert(`Hello, ${fullName}.`)
}

document.querySelector('#vatcalc').addEventListener('click', VATcalculation)

function VATcalculation() {
    const rawPrice = prompt('Enter a price to find total with VAT rate:')
    const withVat = parseInt((rawPrice * 1.206));
    console.log(`The amount of $${rawPrice} with VAT added is $${withVat.toFixed(2)}`)
}


document.querySelector('#calcCelcius').addEventListener('click', convert)

function convert() {
    let temp = document.querySelector('#celciusInput').value;
    temp = ((temp * 1.8) + 32);
    document.querySelector('#fahrenheit').innerText = temp;
}
