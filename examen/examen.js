/*function CalcularSalario () {
    let salarioAnual = 21600
    return (salarioAnual / 12)
}
console.log (CalcularSalario())

function CalcularSalarioAnual () {
    let salarioMensual = 1500
    return (salarioMensual * 12)
}
console.log (CalcularSalarioAnual())
*/
let Nota1 = prompt  ('cual fue tu nota de el primer trimestre')
let Nota2 = prompt  ('cual fue tu nota de el segundo trimestre')
let Nota3 = prompt  ('cual fue tu nota de el tercer trimestre')
function Promedio(Nota1, Nota2, Nota3) {
    let promediodenotas = (Nota1 + Nota2 + Nota3 ) / 3
     return  promediodenotas

}
alert (Promedio(Nota1,Nota2,Nota3))


