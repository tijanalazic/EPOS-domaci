function funkcija() {
  let text;
  let osoba = prompt("Unesite Vaše ime:", "Ivana Petrović");
  if (osoba == null || osoba == "") {
    text = "Niste uneli svoje ime.";
  } else {
    text = "Zdravo " + osoba + "! U toku je mesec besplatnih preventivnih pregleda!";
  }
  document.getElementById("poruka").innerHTML = text;
}
  $("#submit").click(function() {
    alert("Uspešno ste se registrovali!");
 });
 
  document.getElementsById("reset").addEventListener("click", funkcija2);

  function funkcija2() {
    return confirm("Forma je uspesno resetovana");
  }
/*   $(document).ready(function(){
    $("#submit").click(function(){
      alert("Uneta vrednost: " + $("#inputID").val());
    });
  }); */
  function potvrda()  {

    var rezultat = confirm("Do you want to continue?");

    if(rezultat)  {
        alert("Nastavite sa popunjavanjem forme!");
    } else {
        alert("Doviđenja!");
    }
}