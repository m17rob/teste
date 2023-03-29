// let count = 4;
// let countCheck = localStorage.getItem('countCheck') || 1;

// if (count === parseInt(countCheck)) {
//   document.getElementById('myButton').textContent = 'Deja apăsat';
// }

// document.getElementById('myButton').addEventListener('click', function() {
//   if (count === parseInt(countCheck)) {
//     document.getElementById('myButton').textContent = 'Deja apăsat';
//   } else {
//     localStorage.setItem('countCheck', count);
//     document.getElementById('myButton').textContent = 'Apasă-mă';
//     countCheck = count;
//   }
// });

// if (count === parseInt(countCheck)) {
//   document.getElementById('myButton').textContent = 'Deja apăsat';
// } else {
//   document.getElementById('myButton').textContent = 'Apasă-mă';
// }

let count = 9;
let countCheck = parseInt(localStorage.getItem("countCheck")) || 1;
let buttonPressed = false;

// Verificăm localStorage și afișăm bulina dacă este necesar
if (count === countCheck) {
  document.querySelector(".dot").classList.remove("show");
} else {
  document.querySelector(".dot").classList.add("show");
}

// Funcția evenimentului de click pentru buton
function onClick() {
  if (!buttonPressed) {
    document.getElementById("bell-icon").classList.add("pressed");
    document.querySelector(".dot").classList.remove("show");
    countCheck = count;
    localStorage.setItem("countCheck", countCheck);
    buttonPressed = true;
  }
}

document.getElementById("bell-icon").addEventListener("click", onClick);



document.querySelector('#bell-icon').addEventListener('click', function() {
    document.querySelector('.card').classList.toggle('hide');
  });