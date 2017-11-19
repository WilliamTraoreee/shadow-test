// NAV

$(".menu-icon").click( function() {
  $("body").toggleClass("navopen");
});

// FORM

$(".request .accept").click( function() {
  $(".form").fadeIn();
});

$(".closeform").click( function() {
  $(".form").fadeOut();
});

var $form = $("form"),
  $successMsg = $(".alert");
$.validate({
  errorMessageClass: "error",
  onSuccess: function(){
    $successMsg.show();
    return false; // stops submitting
  }
});

// MODAL

$(".request .decline").click( function() {
  $(".modal").fadeIn();
});

$(".modal .decline").click( function() {
  $(".modal").fadeOut();
});
