
$('form').on('submit',function(){
  alert('Uspešno ste se registrovali!');
  popupInfo();
});

$(document).on('click', 'input[type="reset"]', function(e){
  if(confirm("Da li sigurno želite da restartujete formu?")){alert("Forma će se resetovati!");}
  else{
   e.preventDefault();
   window.location="#";
  }
});


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
  if(document.getElementById("lecenjeDa").checked){
    var a = "da";
  }
  else{
    var a = "ne";
  }
  let lecenje = document.getElementsByName("lecenje").innerHTML = a;
       
  alert(`Uneli ste sledeće: \n` + `Username: ${username.value}\n` + `Email: ${email.value}\n` + 
  `Password: ${password.value}\n` + `Pol: ${pol.value}\n` + `Mesto: ${mesto.value}\n` + `Godine: ${godine.value}\n` + 
  `Da li ste se ranije lečili kod nas: ${lecenje}\n`);
}

$(".container").quietflow({
  theme : "cornerSpikes",
  backgroundCol : "#a6a6a6",
  specificColors : [
    "#3b76ec", 
    "#525b7a"
  ]
})