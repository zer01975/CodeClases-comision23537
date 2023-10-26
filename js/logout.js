var SUPABASE_URL = 'https://jfziwaejkmzukwgwwxda.supabase.co'
var SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impmeml3YWVqa216dWt3Z3d3eGRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU0OTA1MzIsImV4cCI6MjAxMTA2NjUzMn0.jqG4efSGLveVIpXkFujFPXN9WmvdEp813OI4HfL4GgI'


var supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY)
window.userToken = null


const logoutButton = document.getElementById('logoutButton');

// Poner un eventListener para encargarse de cerrar sesion al hacer click
logoutButton.addEventListener('click', async () => {
    try {
        // Cerrar sesion de supabase
        const { error } = await supabase.auth.signOut();

        if (error) {
            console.error('Error cerrando sesion:', error.message);
        } else {
            // Redirigir al usuario a la pagina principal
            window.location.href = 'index.html';
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
