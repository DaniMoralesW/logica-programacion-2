document.getElementById("convertirBtn").addEventListener("click", function() {
    // Este código se ejecutará cuando se haga clic en el botón "Convertir"
  
    // Obtener el valor ingresado por el usuario
    let inputCelsius = document.getElementById("inputCelsius").value;
    let celsius = parseInt(inputCelsius);
  
    // Verificar si la entrada es un número válido
    if (isNaN(celsius)) {
      alert('Por favor, ingresa un número válido.');
    } else {
      // Realizar las conversiones
      let Fahrenheit = celtoFahr(celsius);
      let Kelvin = celtoKel(celsius);
  
      // Mostrar los resultados en los elementos <h2>
      document.getElementById("Fahrenheit").innerText = `Temperatura en Fahrenheit: ${Fahrenheit}°F`;
      document.getElementById("Kelvin").innerText = `Temperatura en Kelvin: ${Kelvin}K`;
    }
  });
  
  function celtoFahr(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  function celtoKel(celsius) {
    return celsius + 273.15;
  }
  document.write(`${Fahrenheit}`)
  document.write(`${Kelvin}`)