let plusBtn = document.getElementById('plus')
console.log(plusBtn)

let minusBtn = document.getElementById("minus");
console.log(minusBtn);

let displayField = document.getElementById('display')
console.log(displayField)


let counter = 0
updateCounter()

plusBtn.addEventListener('click' , function(){
    counter++
    updateCounter();
})

minusBtn.addEventListener('click' , function(){
    counter--
    updateCounter();
})

function updateCounter(){
    displayField.innerHTML = counter
}