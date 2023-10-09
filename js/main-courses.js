import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jfziwaejkmzukwgwwxda.supabase.co';
const supabaseApiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impmeml3YWVqa216dWt3Z3d3eGRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU0OTA1MzIsImV4cCI6MjAxMTA2NjUzMn0.jqG4efSGLveVIpXkFujFPXN9WmvdEp813OI4HfL4GgI';

const supabase = supabase.createClient(supabaseUrl, supabaseApiKey);



async function recibirCursos() {
    let { data: cursos, error } = await supabase
        .from('cursos')
        .select('*');

    if (error) {
        console.error('Error recuperando cursos:', error);
        return;
    }

    tarjetaCurso = ``

    for (let curso of data) {
        tarjetaCurso = tarjetaCurso + `
    <h2> ${curso.course_name} </h2>
    <p> ${curso.course_info}
    `
    }
    document.querySelector("main").innerHTML = tarjetaCurso;
}

recibirCursos();

