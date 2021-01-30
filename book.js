var modal = document.getElementById("bookSuccess");
var btn = document.getElementById("submitBtn");
var span = document.getElementsByClassName("close")[0];
var form = document.getElementById("my-forms");

span.onclick = function() {
    window.location.reload();
}
window.onclick = function(event) {
  if (event.target == modal) {
    window.location.reload(); 
  }
}
form.onsubmit = function() {
  modal.style.display = "block";
  return false;
}