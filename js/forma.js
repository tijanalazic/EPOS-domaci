$("#submit").click(function() {
  alert("Uspešno ste se registrovali!");
});
$("#reset").click(function() {
  alert("Forma je uspešno resetovana");
});
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

function potvrda()  {

  var rezultat = confirm("Da li želite da nastavite?");

  if(rezultat)  {
      alert("Nastavite sa popunjavanjem forme!");
  } else {
      alert("Doviđenja!");
  }
}
/* $("input:checkbox").on('click', function() {
  
  var $checkbox = $(this);
  if ($checkbox.is(":checked")) {
    
    var group = "input:checkbox[name='" + $checkbox.attr("name") + "']";
    
    $(group).prop("checked", false);
    $checkbox.prop("checked", true);
  } else {
    $checkbox.prop("checked", false);
  }
}); */
$("input:checkbox").on('click', function() {
  
  var $cekiraj = $(this);
  if ($cekiraj.is(":checked")) {
    
    var group = "input:checkbox[name='" + $cekiraj.attr("name") + "']";
    
    $(group).prop("checked", false);
    $cekiraj.prop("checked", true);
  } else {
    $cekiraj.prop("checked", false);
  }
});