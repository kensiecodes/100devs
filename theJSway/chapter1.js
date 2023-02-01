document.querySelector('#presentation').addEventListener('click', presentation)
document.querySelector('#calculator').addEventListener('click', minimalisticCalculator)

function presentation() {
    const name = 'Mackensie'
    const age = 25
    console.log(name)
    console.log(age)
}

function minimalisticCalculator() {
    console.log(`${6} + ${3} = ${6 + 3}`)
    console.log(`${6} - ${3} = ${6 - 3}`)
    console.log(`${6} * ${3} = ${6 * 3}`)
    console.log(`${6} / ${3} = ${6 / 3}`)
}