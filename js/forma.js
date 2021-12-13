document.getElementById("submit").addEventListener("click", funkcija);

  function funkcija() {
   alert ("Uspesno ste se registrovali!");
  } 
 
  document.getElementsById("reset").addEventListener("click", funkcija2);

  function funkcija2() {
    return confirm("Forma je uspesno resetovana");
  }