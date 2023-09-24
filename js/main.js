var SUPABASE_URL = 'https://dxbvxrzjngnsfetmqite.supabase.co'
var SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4YnZ4cnpqbmduc2ZldG1xaXRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU0ODIzODEsImV4cCI6MjAxMTA1ODM4MX0.shFIYIVqyEvNBMFbxBjAdSmCHKoWw3yF-ADnAdPks4c'

var supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY)
window.userToken = null

document.addEventListener('DOMContentLoaded', function (event) {
 
  var logInForm = document.querySelector('#log-in')
  logInForm.onsubmit = logInSubmitted.bind(logInForm)
  
})


const logInSubmitted = (event) => {
  event.preventDefault()
  const email = event.target[0].value
  const password = event.target[1].value

  supabase.auth
    .signIn({ email, password })
    .then((response) => {
     //response.error ? alert(response.error.message) : setToken(response)
      response.error ? alert("datos incorrectos") : setToken(response)
    })
    .catch((err) => {
      //alert("datos incorrectos")
      alert(err.response.text)
    })
}

const fetchUserDetails = () => {
  alert(JSON.stringify(supabase.auth.user()))
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

