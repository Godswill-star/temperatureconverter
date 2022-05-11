const celsius = document.querySelector("#celsius")
const fahrenheit = document.querySelector("#fahrenheit")
const kelvin = document.querySelector("#kelvin")

celsius.addEventListener('input' , (e)=>{
    celsiusValue = e.target.value
    document.getElementById("fahrenheit").value = (celsiusValue*9/5)+32
    document.getElementById("kelvin").value = (+celsiusValue + 273)
})

fahrenheit.addEventListener('input' , (e)=>{
    fahrenheitValue = e.target.value
    document.getElementById("celsius").value = (5/9)*(fahrenheitValue-32)
    document.getElementById("kelvin").value =((5/9)*(fahrenheitValue-32)+273)
})

kelvin.addEventListener('input' , (e)=>{
    kelvinValue = e.target.value
    document.getElementById("celsius").value = (+kelvinValue - 273)
    document.getElementById("fahrenheit").value = ((9/5*(kelvinValue - 273)) + 32)
})

