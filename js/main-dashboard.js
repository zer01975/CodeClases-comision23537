var SUPABASE_URL = 'https://jfziwaejkmzukwgwwxda.supabase.co'
var SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impmeml3YWVqa216dWt3Z3d3eGRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU0OTA1MzIsImV4cCI6MjAxMTA2NjUzMn0.jqG4efSGLveVIpXkFujFPXN9WmvdEp813OI4HfL4GgI'


var supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY)
window.userToken = null

var userId = '';


const fetchUserId = () => {
    const currentUser = supabase.auth.user();
    if (currentUser) {
        return currentUser.id;
    } else {
        return null;
    }
}

userId = fetchUserId();

async function fetchCourseId() {
    try {
        let { data: cursos, error } = await supabase
            .from('cursos')
            .select('course_id')
            .eq('owner_id', userId) // Filtrar por owner_id igual a user_id
            .limit(1);

        if (error) {
            console.error('Error recibiendo el id del curso:', error);
            return null;
        }
        return cursos[0].course_id;

    } catch (err) {
        console.error('Error en fetchCourseId:', err)
        return null;
    }
}

document.addEventListener('DOMContentLoaded', async function () {
    try {
        const courseId = await fetchCourseId();

        if (!courseId) {
            console.error('ID de curso no encontrado.');
            return;
        }

        await displayCourses(courseId);
        await displayStudents(courseId);
    } catch (err) {
        console.error('Error en main:', err);
    }
});

async function displayCourses(courseId) {
    try {
        let { data: cursos, error } = await supabase
            .from('cursos')
            .select('*') // Seleccionar todas las columnas
            .eq('course_id', [courseId]);

        if (error) {
            console.error('Error recibiendo datos de curso:', error);
            return;
        }

        const coursesContainer = document.getElementById('coursesContainer');

        cursos.forEach((curso) => {
            // Crear un div para cada curso
            const card = document.createElement('div');
            card.className = 'course-card';

            // Crear elementos para cada dato de la fila
            const courseName = document.createElement('h2');
            courseName.textContent = curso.course_name;

            const courseDescription = document.createElement('p');
            courseDescription.textContent = curso.course_info;

            //Se pueden agregar mas campos

            // Agregar los elementos a la tarjeta (el div)
            card.appendChild(courseName);
            card.appendChild(courseDescription);

            // Agregar la tarjeta al contenedor
            coursesContainer.appendChild(card);
        });
    } catch (err) {
        console.error('Error en displayCourses:', err);
    }
}

async function displayStudents(courseId) {
    try {
        let { data: estudiantes, error } = await supabase
            .from('estudiantes')
            .select('*') // Seleccionar todas las columnas
            .contains('course_id', [courseId]);

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
