function done(){
   var email= document.getElementById("el_mail").value;
   localStorage.setItem("e-mail",email);
   var passcode = document.getElementById("passcode_1").value;
   localStorage.setItem("passcode", passcode);
   var username = document.getElementById("user_your_name").value;
   localStorage.setItem("yourname",username) ;
   window.location="kwitter_room.html";
}