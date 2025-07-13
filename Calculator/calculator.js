function appendValue(value) {
  document.getElementById("result").value += value;
}

function clearResult() {
  document.getElementById("result").value = ""; //kosong
}

function calculateResult() {
  try {
    const resultField = document.getElementById("result");
    resultField.value = eval(resultField.value);
  } catch (error) {
    alert("Input tidak valid!");
  }
}
