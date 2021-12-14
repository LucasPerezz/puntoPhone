
const scrollUp = document.querySelector('.imagenScroll')

$('.imagenScroll').click(function(){

  $('html, body').animate({scrollTop: 0}, "slow")

})


$(() => {
  $("#fname_error_message").hide()
  $("#surname_error_message").hide()
  $("#email_error_message").hide()
  $("#password_error_message").hide()
  $("#retype_password_error_message").hide()


  let errorName = false
  let errorSurname = false
  let errorEmail = false
  let errorPassword = false
  let errorTypePassword = false

  $("#form_fname").focusout(() => check_fname())
  $("#form_surname").focusout(() => check_surname())
  $("#form_email").focusout(() => check_email())
  $("#form_password").focusout(() => check_password())
  $("#form_retype_password").focusout(() => check_retype_password())

  const check_fname = () => {
    let pattern = /^[a-zA-Z]*$/
    let fname = $("#form_fname").val()

    if (pattern.test(fname) && fname !== " ") {
      $("#fname_error_message").hide()
      $("#form_fname").css("border-bottom", "2px solid #34F458")
    } else {
      $("#fname_error_message").html("Debe contener solo caracteres")
      $("#fname_error_message").show()
      $("#form_fname").css("border-bottom", "2px solid #F90A0A")
      errorName = true
    }
    
    

  }
})