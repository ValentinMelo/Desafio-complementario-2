let capital = parseInt(prompt('Ingresa el capital a pedir (máximo 5.000 USD)'))
let numeroCuotas = parseInt(prompt('Ingresa la cantidad de cuotas a pagar (entre 1 a 12 cuotas)'))

let maximoCapital = 5000
let maximoCuotas = 12

if(numeroCuotas<=6){
   alert('El interés a pagar es del 2% sobre la cuota mensual.')
} else {
    alert('El interés a pagar es del 5% sobre la cuota mensual.')
}


function montoCuota(prestamo){
    let interes = 0
    if(numeroCuotas<=6){
        interes = 2
    } else {
        interes = 5
    }
    let valorCuota = (capital/numeroCuotas)*(1+(interes/100))
    prestamo = valorCuota
    return prestamo
}

if (capital<=maximoCapital && numeroCuotas<=6){
    for(let i=1;i<=numeroCuotas;i++){
            console.log('Cuota ',i,': ',montoCuota(capital))
    }
} else if(capital<=maximoCapital && numeroCuotas>6 && numeroCuotas<=maximoCuotas) {
    for(let i=1;i<=numeroCuotas;i++){
        console.log('Cuota ',i,': ',montoCuota(capital))
}
} else alert ('Requisitos: máximo de capital 5.000 USD y máximo de cuotas 12')
