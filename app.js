let tempCel = document.getElementById("cel")
tempCel.addEventListener("input",function(){

    let C = this.value
    let F = (C*9/5) + 32
    if(!Number.isInteger(F)){
        F = F.toFixed(4)
    }
    tempFah.value = F
})

let tempFah = document.getElementById("fah")
tempFah.addEventListener("input",function(){
    let F = this.value
    let C = (F - 32)*5/9
    if(!Number.isInteger(C)){
        C = C.toFixed(4)
    }
    tempCel.value = C
})