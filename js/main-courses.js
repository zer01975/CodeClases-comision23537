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


async function getAvailableCourses() {
    try {
        let { data: cursos, error } = await supabase
            .from('cursos')
            .select('*');

        if (error) {
            console.error('Error fetching cursos:', error);
            return null; // or handle the error as needed
        }

        return JSON.stringify(cursos);
    } catch (err) {
        console.error('Error in getCursos:', err);
        return null; // or handle the error as needed
    }
}

async function getCourseName() {
    try {
        let { data: cursos, error } = await supabase
            .from('cursos')
            .select('course_name')
            .eq('owner_id', userId); // Filter by owner_id equal to userId

        if (error) {
            console.error('Error recibiendo el nombre del curso:', error);
            return null;
        }
        return JSON.stringify(cursos);

    } catch (err) {
        console.error('Error en getCOurseName:', err)
        return null;
    }

}

// async function main() {
//     console.log(supabase.auth.user());
//     console.log(supabase.auth.user().email);
//     console.log(await fetchUserData());
//     console.log(await getAvailableCourses());
//     console.log(await getCourseName());
//     console.log(userId);
// }

// main();
document.addEventListener('DOMContentLoaded', function() {


    async function displayCourses() {
        try {
          let { data: cursos, error } = await supabase
            .from('cursos')
            .select('*') // Select all columns
            .eq('owner_id', userId);
      
          if (error) {
            console.error('Error receiving course data:', error);
            return;
          }
      
          const coursesContainer = document.getElementById('coursesContainer');
      
          cursos.forEach((curso) => {
            // Create a card container div for each course
            const card = document.createElement('div');
            card.className = 'course-card';
      
            // Create elements for each piece of course data
            const courseName = document.createElement('h2');
            courseName.textContent = curso.course_name;
      
            const courseDescription = document.createElement('p');
            courseDescription.textContent = curso.course_info;
      
            // You can create more elements for other data as needed
      
            // Append the elements to the card
            card.appendChild(courseName);
            card.appendChild(courseDescription);
      
            // Append the card to the container
            coursesContainer.appendChild(card);
          });
        } catch (err) {
          console.error('Error in displayCourses:', err);
        }
      }
      
      displayCourses();
      

});