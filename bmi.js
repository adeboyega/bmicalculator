let namevar= document.querySelector(".user-nam")
let weight = document.querySelector(".user-weight")
let height = document.querySelector(".user-height")
let btn = document.querySelector(".btn")
let display = document.querySelector(".display")

btn.addEventListener("click",function(){
    let msqur=height.value*height.value
    let bmi = weight.value/msqur
    if(bmi>=25.0){
        display.innerHTML =`${namevar} Your bmi is = ${bmi}<br> ${namevar.value} you are overweight!`
    }else if(bmi>=18.5){
        display.innerHTML =`${namevar} Your bmi is = ${bmi}<br> ${namevar.value} you are healthy!`
    }else{
        display.innerHTML =`${namevar} Your bmi is = ${bmi} <br>${namevar.value} you are underweight!`
    }
    weight.value+="kg"
    height.value+="m"
})

btn.addEventListener("dblclick",function(){
    window.location.reload()
})