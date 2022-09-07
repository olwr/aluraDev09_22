function Converter() {
    var valueElement = document.querySelector("input");
    var value = valueElement.value;
    var valueDolar = parseFloat(value);

    var valueReal = valueDolar * 5.17;

    var convertedValue = document.querySelector("h2");
    var conversion = "R$" + valueReal;
    convertedValue.innerHTML = conversion;
    return true;
}