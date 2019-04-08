/* -----------------------------------------------------------------------
  Made with code and care in Paris by Codingk8 - 2019 - Twitter: @codingk8
  Project made for the freeCodeCamp curriculum, "Responsive Web Design" Certification
  Project #1 - Tribute Page
  Title: Shooting for the moon - A tribute page to Katherine G. Johnson
------------------------------------------------------------------------ */


/* --------------------------------------------------------------------------------------- */
/* --- Makes the "back to top" arrow appear after scroll and disappear when back up => --- */
/* --------------------------------------------------------------------------------------- */

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 125 || document.documentElement.scrollTop > 125) {
    document.getElementById("btticon").style.display = "block";
  } else if (document.body.scrollBottom > 125 || document.documentElement.scrollBottom > 125) {
    document.getElementById("btticon").style.display = "none";
  } else {
    document.getElementById("btticon").style.display = "none";
  }
}


/* ---------------------------------------------------------- */
/* --- jQuery Bounce effect on the "back to top" arrow => --- */
/* ---------------------------------------------------------- */

$(document).ready(function(){
    $( "#btticon" ).on("mouseenter", function() {
        $(this).effect( "bounce", { times: 3 }, "slow" );
    })
})


/* ------------------------------------------ */
/* --- "Light mode | Dark mode" effect => --- */
/* ------------------------------------------ */

function toggleDarkLight() {
  let container = document.getElementById("container");
  let currentClass = container.className;
  container.className = currentClass == "dark" ? "light" : "dark";
}


/* ------------------ */
/* End of js file ;o) */
/* ------------------ */
