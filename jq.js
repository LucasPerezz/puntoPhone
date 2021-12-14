
let errorName = false
let errorSurname = false
let errorEmail = false
let errorPassword = false
let errorTypePassword = false

$(() => {
  $("#fname_error_message").hide()
  $("#surname_error_message").hide()
  $("#email_error_message").hide()
  $("#password_error_message").hide()
  $("#retype_password_error_message").hide()



  $("#form_fname").focusout(() => check_fname())
  $("#form_surname").focusout(() => check_surname())
  $("#form_email").focusout(() => check_email())
  $("#form_password").focusout(() => check_password())
  $("#form_retype_password").focusout(() => check_retype_password())

  
  
})
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

const check_surname = () => {
  let pattern = /^[a-zA-Z]*$/
  let surname = $("#form_surname").val()

  if (pattern.test(surname) && surname !== " ") {
    $("#fsurname_error_message").hide()
    $("#form_surname").css("border-bottom", "2px solid #34F458")
  } else {
    $("#fsurname_error_message").html("No utilizar simbolos")
    $("#fsurname_error_message").show()
    $("#form_surname").css("border-bottom", "2px solid #F90A0A")
    errorSurname = true
  }
}

const check_password = () => {
  let passwordLength = $("#form_password").val().length

  if (passwordLength < 8 ) {
    $("#password_error_message").html("Debe contener minimo 8 caracteres")
    $("#password_error_message").show()
    $("#form_password").css("border-bottom", "2px solid #F90A0A")
    errorPassword = true
  } else {
    $("#password_error_message").hide()
    $("#form_password").css("border-bottom", "2px solid #34F458")
  }
}

const check_retype_password = () => {
  let password = $("#form_password").val()
  let retypePassword = $("#form_retype_password").val()

  if (password !== retypePassword) {
    $("#retype_password_error_message").html("Contraseña incorrecta")
    $("#retype_password_error_message").show()
    $("#form_retype_password").css("border-bottom", "2px solid #F90A0A")
    errorTypePassword = true
  } else {
    $("#retype_password_error_message").hide()
    $("#form_retype_password").css("border-bottom", "2px solid #34F458")
  }
}

const check_email = () => {
  let pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  let email = $("#form_email").val()
  if (pattern.test(email) && email !== " ") {
    $("#email_error_message").hide()
    $("#form_email").css("border-bottom", "2px solid #34F458")
  } else {
    $("#email_error_message").html("Email invalido")
    $("#email_error_message").show()
    $("#form_email").css("border-bottom", "2px solid #F90A0A")
    errorEmail = true
  }
}

$("#registration_form").submit(() => {
  errorName = false
  errorSurname = false
  errorEmail = false
  errorPassword = false
  errorTypePassword = false

  check_fname()
  check_surname()
  check_email()
  check_password()
  check_retype_password()

  if (errorName === false && errorSurname === false && errorEmail === false && errorPassword === false && errorTypePassword === false) {
    alert("Su registro se ha realizado con exito")
    return true
  } else {
    alert("Ingrese los datos de forma correcta")
    return false
  }
})

