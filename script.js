/* -----------------------------------------------------------------------
  Made with code and care in Paris by Codingk8 - 2019 - Twitter: @codingk8
  Project made for the freeCodeCamp curriculum, "Responsive Web Design" Certification
  Project #1 - Tribute Page
  Title: Shooting for the moon - A tribute page to Katherine Johnson
------------------------------------------------------------------------ */

/* --------------------------------------------------------------------------------------- */
/* --- jQuery Fade in effect on main title => --- */
/* --------------------------------------------------------------------------------------- */

$(document).ready(function () { $('#header-div').fadeIn(3000); });

/* Rajouter un effet fadeIn fadeOut on mousse enter et mousse leave */

/* --------------------------------------------------------------------------------------- */
/* --- jQuery Toggle effect on Neil Armstrong quote => --- */
/* --------------------------------------------------------------------------------------- */

function toggle(hide) {
    if (hide === 1) {
        $('#moon-text').fadeIn(3000);
        hide = 0;
    }
    else {
        $('#moon-text').fadeOut(3000);
        hide = 1;
    }
    setTimeout("toggle("+hide+")", 3000);
}

$(document).ready(function(){
    toggle(1);
});


/* -------------------------- */
/* --- End of js file ;o) --- */
/* -------------------------- */
