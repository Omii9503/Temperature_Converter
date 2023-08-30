function convertToCelsius() {
    const celsiusInput = document.getElementById("celsius");
    const resultElement = document.getElementById("result");
  
    if (celsiusInput.value === "") {
      resultElement.textContent = "Please enter a temperature in Celsius.";
      return;
    }
  
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9/5) + 32;
    
    resultElement.textContent = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
  }