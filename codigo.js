var salidaB1 = "";
var salidaB2 = "";
var salidaB3 = "";
var salidaB4 = "";
var salidaF = "";
var salidaF2 = "";
var cantidad = 1000000;
var cantidad2 = 1000000 / 2;
var cantidad3 = parseInt(1000000 / 2.5);
var cantidad4 = parseInt(1000000 / 6.66666);
var contador = 0;

function guardar() {
  var nom = document.getElementById("nom").value;
  var ape = document.getElementById("ape").value;
  var edad = parseFloat(document.getElementById("edad").value);
  var estrato = document.getElementById("selecEstrato").value;

  /*  var a = document.getElementById("uno").value-1;
  var b = document.getElementById("dos").value; */

  if (edad >= 15 && edad <= 16) {
    salidaB1 +=
      "<tr><th>" +
      nom +
      "</th>" +
      "<th>" +
      ape +
      "</th>" +
      "<th>" +
      edad +
      "</th>" +
      "<th>" +
      estrato +
      "</th>" +
      "<th>" +
      cantidad +
      "</th></tr>";
    document.getElementById("beca1").innerHTML = salidaB1;
  } else {
    if (edad >= 17 && edad <= 19) {
      salidaB2 +=
        "<tr><th>" +
        nom +
        "</th>" +
        "<th>" +
        ape +
        "</th>" +
        "<th>" +
        edad +
        "</th>" +
        "<th>" +
        estrato +
        "</th>" +
        "<th>" +
        cantidad2 +
        "</th></tr>";
      document.getElementById("beca2").innerHTML = salidaB2;
    } else {
      if (edad >= 20 && edad <= 22) {
        salidaB3 +=
          "<tr><th>" +
          nom +
          "</th>" +
          "<th>" +
          ape +
          "</th>" +
          "<th>" +
          edad +
          "</th>" +
          "<th>" +
          estrato +
          "</th>" +
          "<th>" +
          cantidad3 +
          "</th></tr>";
        document.getElementById("beca3").innerHTML = salidaB3;
      } else {
        if (edad >= 22 && edad <= 25) {
          salidaB4 +=
            "<tr><th>" +
            nom +
            "</th>" +
            "<th>" +
            ape +
            "</th>" +
            "<th>" +
            edad +
            "</th>" +
            "<th>" +
            estrato +
            "</th>" +
            "<th>" +
            cantidad4 +
            "</th></tr>";
          document.getElementById("beca4").innerHTML = salidaB4;
        }
      }
    }
  }
  limpiarcaja();
  /* funtion Limpliar cajas */
  // myFunction();

  salidaF += "<tr><th>" + estrato + "</th><th>" + uno + "</th></tr>";
  document.getElementById("cuerpoFinal").innerHTML = salidaF;
}

function limpiarcaja() {
  document.getElementById("nom").value = "";
  document.getElementById("ape").value = "";
  document.getElementById("edad").value = "";
  document.getElementById("nom").focus();
}

function myFunction() {
  let elem = document.querySelectorAll("#selecEstrato");
  elem.forEach((element) => {
    element.addEventListener("click", (e) => {});
  });
}
