var SUPABASE_URL = 'https://jfziwaejkmzukwgwwxda.supabase.co'
var SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impmeml3YWVqa216dWt3Z3d3eGRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU0OTA1MzIsImV4cCI6MjAxMTA2NjUzMn0.jqG4efSGLveVIpXkFujFPXN9WmvdEp813OI4HfL4GgI'

var supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY)
window.userToken = null

document.addEventListener('DOMContentLoaded', function (event) {
 var signUpForm = document.querySelector('#sign-up')
  signUpForm.onsubmit = signUpSubmitted.bind(signUpForm)

  
})

const signUpSubmitted = (event) => {
  event.preventDefault()
  const email = event.target[0].value
  const password = event.target[1].value

  supabase.auth
    .signUp({ email, password })
    .then((response) => {
      response.error ? alert(response.error.message) : setTokenRegistro(response)
    })
    .catch((err) => {
      alert(err)
    })
}


const logoutSubmitted = (event) => {
  event.preventDefault()

  supabase.auth
    .signOut()
    .then((_response) => {
      document.querySelector('#access-token').value = ''
      document.querySelector('#refresh-token').value = ''
    alert('Logout successful')
      
    })
    .catch((err) => {
      //alert("datos incorrectos")
      alert(err.response.text)
    })
}

function setToken(response) {
  if (response.user.confirmation_sent_at && !response?.session?.access_token) {
    alert('Confirmation Email Sent')
  } else {
    document.querySelector('#access-token').value = response.session.access_token
    document.querySelector('#refresh-token').value = response.session.refresh_token
    alert('Bienvenido ' + response.user.email)
    document.getElementById("log-in").reset();
    window.location="prueba.html";
  }
  
}
function setTokenRegistro(response) {
  if (response.user.confirmation_sent_at && !response?.session?.access_token) {
    alert('Confirmation Email Sent')
  } else {
    document.querySelector('#access-token').value = response.session.access_token
    document.querySelector('#refresh-token').value = response.session.refresh_token
    alert('usuario regsitrado con exito  ' + response.user.email)
    window.location="login.html";
  }
}

