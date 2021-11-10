var numeros = 100;

for (i = 1; i <= numeros ; i++) {
  var entero = false;
  
  if (divisible(i, 3) == true) {
    document.write("Fizz");
    entero = true;
  }

  if (divisible(i, 5) == true) {
    document.write("Buzz");
    entero = true;
  }

  if (entero == false) {
    document.write(i);
  }

  document.write("<br>");
}

function divisible(indice, divisor)
{
  var x = indice % divisor;

  if (x == 0) {
    return true;
  }

  if (x !== 0) {
    return false;
  }
}
