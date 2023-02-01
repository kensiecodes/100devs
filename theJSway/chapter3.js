document.querySelector('#dayInput').addEventListener('click', printNextDay)

function printNextDay() {
    let currentDay = document.querySelector('#currentDay').value;
    currentDay = currentDay.toLowerCase()
    let nextDay;
    if (currentDay === 'sunday') {
        nextDay = 'Monday'
    } else if (currentDay === 'monday') {
        nextDay = 'Tuesday'
    } else if (currentDay === 'tuesday') {
        nextDay = 'Wednesday'
    } else if (currentDay === 'wednesday') {
        nextDay = 'Thursday'
    } else if (currentDay === 'thursday') {
        nextDay = 'Friday'
    } else if (currentDay === 'friday') {
        nextDay = 'Saturday'
    } else if (currentDay === 'saturday') {
        nextDay = 'Sunday'
    } else {
        nextDay = 'Sorry, that day is invalid.'
    }


    document.querySelector('#nextDay').innerText = nextDay;
}

document.querySelector('#compareNum').addEventListener('click', numCompare)



function numCompare() {
    const num1 = Number(document.querySelector('#numOneInput').value);
    const num2 = Number(document.querySelector('#numTwoInput').value);
    let result;

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        result = 'Inputs are invalid! Please try again.'
    } else {
        if (num1 > num2) {
            result = `${num1} is greater than ${num2}`
        } else if (num1 < num2) {
            result = `${num1} is less than ${num2}`
        } else if (num1 == num2) {
            result = `${num1} is equal to ${num2}`
        } else {
            result = 'Inputs are invalid! Please try again.'
        }
    }
    document.querySelector('#resultCompareNum').innerText = result
}

