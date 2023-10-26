var SUPABASE_URL = 'https://jfziwaejkmzukwgwwxda.supabase.co'
var SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impmeml3YWVqa216dWt3Z3d3eGRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU0OTA1MzIsImV4cCI6MjAxMTA2NjUzMn0.jqG4efSGLveVIpXkFujFPXN9WmvdEp813OI4HfL4GgI'


var supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY)
window.userToken = null

document.addEventListener('DOMContentLoaded', function (event) {

  var logInForm = document.querySelector('#log-in');
  var logOutForm = document.querySelector('#logOut');

  const user = supabase.auth.user();
  const currentPagePath = window.location.pathname;

  if (user && currentPagePath !== '/logout.html') {
    window.location.href = 'dashboard.html';
  }

  if (logInForm) {
    logInForm.onsubmit = logInSubmitted.bind(logInForm)
  }

  if (logOutForm) {
    logOutForm.onsubmit = logoutSubmitted.bind(logOutForm);
  }
});

const logInSubmitted = (event) => {
  event.preventDefault()
  const email = event.target[0].value
  const password = event.target[1].value

  supabase.auth
    .signIn({ email, password })
    .then((response) => {
      response.error ? alert("datos incorrectos") : setToken(response)
    })
    .catch((err) => {
      //alert("datos incorrectos")
      alert(err.response.text)
    })
}


const logoutSubmitted = (event) => {
  event.preventDefault()

  supabase.auth
    .signOut()
    .then((_response) => {
      window.location = "index.html";
    })
    .catch((err) => {
      if (err && err.response) {
        console.error('Logout error:', err.response);
        alert('Hubo un error al cerrar sesion');
      } else {
        console.error('Error inesperado al cerrar sesion:', err)
        alert('Hubo un error al cerrar sesion');
      }
    })
}

function setToken(response) {
  if (response.user.confirmation_sent_at && !response?.session?.access_token) {
    alert('Confirmation Email Sent')
  } else {
    document.querySelector('#access-token').value = response.session.access_token
    document.querySelector('#refresh-token').value = response.session.refresh_token
    document.getElementById("log-in").reset();
    window.location.href = "dashboard.html";
    
  }
}
