
$('form').on('submit',function(){
  alert('Uspešno ste se registrovali!');
  popupInfo();
});

$("#reset").click(function() {
  alert("Forma je uspešno resetovana");
});
/* function funkcija() {
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
} */









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


// popup info
function popupInfo(){
  let username = document.forms["form"]["korisnickoIme"];
  let email = document.forms["form"]["emailAdresa"];
  let password = document.forms["form"]["password"];
  let pol = document.forms["form"]["Pol"];  
  let mesto = document.forms["form"]["mesto"];  
  let godine = document.forms["form"]["Godine"]; 
  let lecenje = document.forms["form"]["lecenje"];     
  alert(`Uneli ste sledeće: \n` + `Username: ${username.value}\n` + `Email: ${email.value}\n` + 
  `Password: ${password.value}\n` + `Pol: ${pol.value}\n` + `Mesto: ${mesto.value}\n` + `Godine: ${godine.value}\n` + 
  `Da li ste se ranije lečili kod nas: ${lecenje.value}\n`);
}