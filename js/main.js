function main() {
    //declarar
    var a,b,c,suma,mayor, msg, imagen;
    //obtencion de datos
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    c = document.getElementById("c").value;
    //convertir texto obtenido de html a tipo FLOAT
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);
    suma = parseFloat(suma);
    mayor = parseFloat(mayor);

    //ifs anidados para saber si los lados respetan el teorema
    if (a > 0 && b > 0 && c > 0)//validar que sean mayores a 0 y caracteres diferentes a numeros
    {
        //validar que sea posible el triangulo
        //obtener el mayor
        if (a > b && a > c) {
            //el mayor es a
            mayor = a;
            suma = b + c;
        }else if(b > c && b > a){
            //el mayor es b
            mayor = b;
            suma = a + c;
        }else{
            //el mayor es c
            mayor = c;  
            suma = a + b;
        }
        //preguntar si la suma de los menores es mayor o igual al lado mas grande
        if (suma >= mayor && ((a + b) > c)) {// ((a+b) > c) desigualdad de triangulos
            msg = "El triangulo es: " + tipoTriangulo(a, b, c);// mostrar el tipo
        }else{
            msg = "Esas medidas no son posibles, medida " + mayor + " no respeta el teorema";
            document.getElementById("imagen").innerHTML = "";
        }
    }
    else
    {
        msg = "Solo NUMEROS mayores a 0";
        document.getElementById("imagen").innerHTML = "";
    }

    //mostrar el resultado
    document.getElementById("resultado").innerHTML = msg;
}


//funcion para ver que tipo e triangulo  es, regresa un string
function tipoTriangulo(a, b, c) {
    if (a === b && b === c) {
        document.getElementById("imagen").innerHTML = String("<img src='img/equi.jpg'>");
        return 'Equilatero';
    } else if (a === b || a === c || b === c){
        document.getElementById("imagen").innerHTML = String("<img src='img/iso.jpg'>");
        return 'Isosceles';
    }else{
        document.getElementById("imagen").innerHTML = String("<img src='img/esca.jpg'>");
        return 'Escaleno';
    }
}

