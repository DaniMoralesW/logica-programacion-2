function celtoFahr(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  function celtoKel(celsius) {
    return celsius + 273.15;
  }

  
  while (true) {
    let celsius = prompt("Ingresa la temperatura en grados Celsius: ");

    let Celsius = parseFloat(celsius);

    if (isNaN(Celsius)) {
      alert('Por favor, ingresa un número válido.');
    } else {
      let Fahrenheit = celtoFahr(Celsius);
      let Kelvin = celtoKel(Celsius);
  
      document.write(`${Celsius}°C es igual a ${Fahrenheit}°F y a ${Kelvin}K<br>`);
      break;
    }
  }