
function somar(){
    var tn1 = window.document.getElementById('txtn1') // valores sairam como texto!
    var tn2 = window.document.querySelector('input#txtn2')
    var res = window.document.getElementById('res')
    var n1 = Number(tn1.value) //Armazenar inputs em números
    var n2 = Number(tn2.value)
    var s = n1+n2
    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${s}`
}