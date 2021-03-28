function myFunction() {
  // Declare variables
  var input, filter, table, cr, txt, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  cards = document.getElementById("allcards");
  cr = cards.getElementsByClassName("card");
  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < cr.length; i++) {
    txt = cr[i].getAttribute("filtertext");
    if (txt) {
      if (txt.toUpperCase().indexOf(filter) > -1) {
        cr[i].style.display = "";
      } else {
        cr[i].style.display = "none";
      }
    }
  }
}
