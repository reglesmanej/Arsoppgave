
let counter = 0;
let sum = 0;

function karakterKnapp(fag) {
    sum += Number(fag.innerText);
    counter++;
    console.log(fag.innerText)
    fag.classList.add("active");
}

function snitt() {
    let average = sum / counter;
    result.textContent = `The avarage is: ${average}`;
    console.log(average)
}
