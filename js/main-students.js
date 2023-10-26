var SUPABASE_URL = 'https://jfziwaejkmzukwgwwxda.supabase.co'
var SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impmeml3YWVqa216dWt3Z3d3eGRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU0OTA1MzIsImV4cCI6MjAxMTA2NjUzMn0.jqG4efSGLveVIpXkFujFPXN9WmvdEp813OI4HfL4GgI'


var supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY)
window.userToken = null

var userId = '';



const fetchUserData = () => {
    const currentUser = supabase.auth.user();
    if (currentUser) {
        return JSON.stringify(currentUser);
    } else {
        return null;
    }
}

const fetchUserId = () => {
    const currentUser = supabase.auth.user();
    if (currentUser) {
        return currentUser.id;
    } else {
        return null;
    }
}

userId = fetchUserId();


async function getAvailableStudents() {
    try {
        let { data: estudiantes, error } = await supabase
            .from('estudiantes')
            .select('*')
            .eq('teacher_id', userId);

        if (error) {
            console.error('Error recibiendo estudiantes:', error);
            return null;
        }

        return JSON.stringify(estudiantes);
    } catch (err) {
        console.error('Error en getAvailableStudents:', err);
        return null;
    }
}


async function main() {
    console.log(supabase.auth.user());
    console.log(supabase.auth.user().email);
    console.log(await fetchUserData());
    console.log(await getAvailableStudents());
    console.log(userId);
}

main();


document.addEventListener('DOMContentLoaded', function () {
    
    displayStudents();
    addStudent();

});

async function displayStudents() {
    try {
        let { data: estudiantes, error } = await supabase
            .from('estudiantes')
            .select('*') // Seleccionar todas las columnas
            .eq('teacher_id', userId);

        if (error) {
            console.error('Error recibiendo datos de estudiantes:', error);
            return;
        }

        const studentsContainer = document.getElementById('studentsContainer');

        estudiantes.forEach((estudiante) => {
            // Crear un div para cada curso
            const card = document.createElement('div');
            card.className = 'student-card';

            // Crear elementos para cada dato de la fila
            const studentName = document.createElement('h2');
            studentName.textContent = estudiante.student_name + ' ' + estudiante.student_lastname;

            const studentDescription = document.createElement('p');
            studentDescription.textContent = estudiante.student_description;

            //Se pueden agregar mas campos

            // Agregar los elementos a la tarjeta (el div)
            card.appendChild(studentName);
            card.appendChild(studentDescription);

            // Agregar la tarjeta al contenedor
            studentsContainer.appendChild(card);
        });
    } catch (err) {
        console.error('Error en displayStudents:', err);
    }
}


async function addStudent() {
    const card = document.createElement('div');
    card.className = 'student-card';

    const titulo = document.createElement('h2');
    titulo.textContent = "Nuevo Estudiante";

    // Agregar los elementos a la tarjeta (el div)
    card.appendChild(titulo);

    // Agregar la tarjeta al contenedor
    studentsContainer.appendChild(card);

    card.addEventListener('click', function() {
        window.location.href = 'addStudent.html';
    })
}