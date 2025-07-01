const qualTriangulo = function(lado1, lado2, lado3) {
    if(lado1 == lado2 && lado1 == lado3 )   {
        return 'Equilatero'
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return 'Isóseles'
    } else {
        return 'Escaleno'
    }
}

console.log(qualTriangulo(2, 2, 2))
console.log(qualTriangulo(2, 3, 3))
console.log(qualTriangulo(2, 3, 4))