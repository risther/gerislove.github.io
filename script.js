let noButtonClickCount = 0; // Contador para el botón "No"
let noButtonState = 0; // Estado actual del botón "No"

// Mostrar el gif inicial
document.getElementById("gifContainer").style.display = "block";
document.getElementById("cartaBtn").style.display = "none";

document.getElementById("siBtn").addEventListener("click", function () {
  // Ocultar el gif triste y mostrar el gif feliz
  document.getElementById("sadGifContainer").style.display = "none";
  document.getElementById("sadGifContainer1").style.display = "none";
  document.getElementById("sadGifContainer2").style.display = "none";
  document.getElementById("gifContainer").style.display = "none";
  document.getElementById("happyGifContainer").style.display = "block";

  // Ocultar los botones "Pregunta Sí" y "No "
  document.getElementById("question").style.display = "none";
  document.getElementById("siBtn").style.display = "none";
  document.body.classList.add("bg-green");
  document.getElementById("noBtn").style.display = "none";
  document.getElementById("mensaje").style.display = "none";

  // Mostrar el mensaje específico
  document.getElementById("cartaBtn").style.display = "block";
  document.getElementById("messageContainer").style.display = "block";
  document.getElementById("messageContainer").innerHTML ="OWWW ACEPTASTE PEQUEÑITA 😊";

  // Mostrar otro gif después de 3 segundos
  setTimeout(function () {
    document.getElementById("happyGifContainer").style.display = "none";
    document.getElementById("happyGifContainer2").style.display = "block";
  }, 1000);

  setTimeout(function () {
    document.getElementById("happyGifContainer2").style.display = "none";
    document.getElementById("happyGifContainer3").style.display = "block";
  }, 2000);
  setTimeout(function () {
    document.getElementById("happyGifContainer3").style.display = "none";
    document.getElementById("happyGifContainer4").style.display = "block";
  }, 3000);
});

document.getElementById("noBtn").addEventListener("click", function () {
  switch (noButtonState) {
    case 0:
      // Primera vez haciendo clic en "No"
      document.getElementById("happyGifContainer").style.display = "none";
      document.getElementById("gifContainer").style.display = "none";
      document.getElementById("sadGifContainer").style.display = "block";
      document.getElementById("cartaBtn").style.display = "none";

      // Modificar el botón "No"
      document.getElementById("mensaje").innerHTML = "ESTAS SEGURA, CHIQUI?";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("siBtn").style.fontSize = "40px";
      document.getElementById("siBtn").style.padding = "20px 40px";

      noButtonClickCount++;
      noButtonState++;
      break;

    case 1:
      // Segunda vez haciendo clic en "No"

      document.getElementById("mensaje").innerHTML = "¡¿REALMENTE ESTAS SEGURA?!";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "block";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "50px";
      document.getElementById("siBtn").style.padding = "30px 50px";

      noButtonState++;
      break;

    case 2:
      document.getElementById("mensaje").innerHTML ="BABY, PIENSALO BIEEEN 😢";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "block";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "60px";
      document.getElementById("siBtn").style.padding = "40px 60px";

      noButtonState++;
      break;

    case 3:
      document.getElementById("mensaje").innerHTML = "AAALA QUE CONTRERAS JAJA";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "70px";
      document.getElementById("siBtn").style.padding = "50px 70px";

      noButtonState++;
      break;
    case 4:
      document.getElementById("mensaje").innerHTML = "PEQUEÑITA, HAY UN BOTON VERDE A LA IZQUIERDA JEJE";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "80px";
      document.getElementById("siBtn").style.padding = "60px 80px";

      noButtonState++;
      break;
    case 5:
      document.getElementById("mensaje").innerHTML = "AAALA REALMENTE NO QUIERES?";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "90px";
      document.getElementById("siBtn").style.padding = "70px 90px";

      noButtonState++;
      break;
    case 6:
      document.getElementById("mensaje").innerHTML ="BABYY, ACEPTA JEJE..";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "100px";
      document.getElementById("siBtn").style.padding = "80px 100px";

      noButtonState++;
      break;
    case 7:
      document.getElementById("mensaje").innerHTML = "CADA VEZ QUE APRETAS EL NO ME LASTIMAS :(";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "120px";
      document.getElementById("siBtn").style.padding = "90px 120px";

      noButtonState++;
      break;
    case 8:
      document.getElementById("mensaje").innerHTML = "PEQUEÑAAAAAAA CUENTAS VECES?";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("siBtn").style.fontSize = "140px";
      document.getElementById("siBtn").style.padding = "100px 140px";

      noButtonState++;
      break;

    case 9:
      document.getElementById("mensaje").innerHTML = "VOY A ESTAR MUY TRISTE u.u";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "160px";
      document.getElementById("siBtn").style.padding = "110px 160px";

      noButtonState++;
      break;

    case 10:
      document.getElementById("mensaje").innerHTML ="VA, DEJARE DE PREGUNTAR";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("siBtn").style.fontSize = "180px";
      document.getElementById("siBtn").style.padding = "120px 180px";

      noButtonState++;
      break;
    case 11:
      document.getElementById("mensaje").innerHTML = "JAJA MENTIRA, YA ACEPTA 🤷‍♀️";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("siBtn").style.fontSize = "200px";
      document.getElementById("siBtn").style.padding = "130px 200px";

      noButtonState++;
      break;

    case 12:
      document.getElementById("mensaje").innerHTML ="ME DUELEE";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "220px";
      document.getElementById("siBtn").style.padding = "140px 220px";

      noButtonState++;
      break;

    case 13:
      document.getElementById("mensaje").innerHTML = "ME QUEMAA";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("siBtn").style.fontSize = "240px";
      document.getElementById("siBtn").style.padding = "150px 240px";

      noButtonState++;
      break;

    case 14:
      document.getElementById("mensaje").innerHTML = "ME LASTIMA";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "260px";
      document.getElementById("siBtn").style.padding = "160px 260px";

      noButtonState++;
      break;

    case 15:
      document.getElementById("mensaje").innerHTML ="ANDA DI QUE SIIII 🌹";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "280px";
      document.getElementById("siBtn").style.padding = "170px 280px";

      noButtonState++;
      break;

    case 16:
      document.getElementById("mensaje").innerHTML = "ESTA SERA LA ULTIMA OPORTUNIDAD...";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "none";
      document.getElementById("gifContainer").style.display = "block";
      document.getElementById("happyGifContainer").style.display = "none";
      // Vuelve al estado 0
      noButtonState++;
      break;
    
    case 17:
      document.getElementById("mensaje").innerHTML = "ENVIANDO MENSAJE DE RECHAZO";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "none";
      document.getElementById("gifContainer").style.display = "block";
      document.getElementById("happyGifContainer").style.display = "none";
      // Vuelve al estado 0
      noButtonState++;
        break;
    
    case 18:
      document.getElementById("mensaje").innerHTML = "AHORA NO TIENES OPCION JEJE ❤💋";
      document.getElementById("noBtn").style.display = "none";
      ocument.getElementById("mensaje").style.display = "none";
      // Vuelve al estado 0
      noButtonState = 0;
      break;

    default:
      
      break;
  }
});
