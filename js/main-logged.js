let nav = `<nav class="nav-menu">
<input type="checkbox" id="menu">
<label for="menu">☰</label> <img id="logo-hamb" src="img/CodoACodo2.jpg" alt="LogoCodoACodo">
<ul class="menu-container">
    <a id="caja-logo" href="index.html"><img id="logo-menu" src="img/CodoACodo2.jpg" alt="LogoCodoACodo"></a>
    <li><a class="menu-item" href="dashboard.html">Inicio</a></li>
    <li><a class="menu-item" href="cursos.html">Cursos</a></li>
    <li><a class="menu-item" href="estudiantes.html">Estudiantes</a></li>
    <li><a class="menu-item" href="logout.html">Logout</a></li>
</ul>
</nav>`

let pie = `
    <div class="grupo-1">
                    <div class="logo">
                        <a href="#">
                            <img class="logo" src="img/CodoACodo.jpg" alt="Logo de SLee Dw">
                        </a>
                    </div>
                   
                <div class="grupo-2">
                    <p>&copy; 2023 <b>Clase-Codo a Codo</b> - Sitio desarrollado por:</p>
                    <span>Lucas González, Marcelo Pesoa, Lisandro Iguacel y Marcilia Nietto</span>
                </div>
    </div>
    `

document.querySelector(".nav-menu").innerHTML = nav
document.querySelector("#footer").innerHTML = pie