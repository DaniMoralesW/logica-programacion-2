//Tuve problemas con el comando prompt, por lo que lo cambié a readline

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa la temperatura en grados Celsius: ', (answer) => {
  let celsius = parseInt(answer);
    if (isNaN(celsius)) {
        console.log(`Debe ingresar un número`);
        
    }



  let Fahrenheit = celtoFahr(celsius);
  let Kelvin = celtoKel(celsius);

  console.log(`${celsius}°C es igual a ${Fahrenheit}°F`);
  console.log(`${celsius}°C es igual a ${Kelvin}K`);

  rl.close();
});

function celtoFahr(celsius) {
  return (celsius * 9/5) + 32;
}

function celtoKel(celsius) {
  return celsius + 273.15;
}