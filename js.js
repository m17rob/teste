// Dicționarul cu traduceri
var langDict = {
    "Acasa": {
      "ro": "Acasa",
      "en": "Home"
    },
    "Despre noi": {
      "ro": "Despre noi",
      "en": "About Us"
    },
    "Contact": {
      "ro": "Contact",
      "en": "Contact"
    },
    "Salut": {
        "ro": "Salut",
        "en": "Hi"
      }
  };
  
  // Variabila globala pentru a urmari limba curenta
  var currentLang = 'ro';
  
  // Funcția pentru a traduce textul
  function translateText() {
    var elements = document.querySelectorAll('[data-lang]');
    for (var i = 0; i < elements.length; i++) {
      var key = elements[i].getAttribute('data-lang');
      if (langDict[key]) {
        elements[i].innerHTML = langDict[key][currentLang];
      }
    }
  }
  
  // Evenimentul pentru a schimba limba
  document.querySelector('#lang-switcher').addEventListener('change', function() {
    currentLang = this.value;
    localStorage.setItem('selectedLang', currentLang); // salvam limba selectata in localStorage
    translateText(); // traducem textul
  });
  
  // Initializarea paginii cu limba salvata in localStorage sau cu limba implicita "ro"
  currentLang = localStorage.getItem('selectedLang') || currentLang;
  document.querySelector('#lang-switcher').value = currentLang;
  translateText();
  