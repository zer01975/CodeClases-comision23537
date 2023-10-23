let nav = `<nav class="nav-menu">
<input type="checkbox" id="menu">
<label for="menu">☰</label> <img id="logo-hamb" src="img/misclasesNav.png" alt="LogoCodoACodo">
        <ul class="menu-container">
            <a id="caja-logo" ><img id="logo-menu" src="img/misclasesNav.png" alt="LogoCodoACodo"></a>
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
                        <img src="./img/Copia de Circuit Technology Logo (4).png" alt="Logo del sitio">
                        </a>
                    </div>
                    <div class="box">
                        <h2>MIS CLASES</h2>
                       
                    </div>
                    <div class="box">
                        <h2>SIGUENOS</h2>
                        <div class="red-social">
                            <a href="https://es-la.facebook.com/" class="fa fa-facebook"></a>
                            <a href="https://www.instagram.com/" class="fa fa-instagram"></a>
                            <a href="https://twitter.com/?lang=es" class="fa fa-twitter"></a>
                            <a href="https://www.youtube.com/" class="fa fa-youtube"></a>
                        </div>
                    </div>
                </div>
                <div class="grupo-2">
                    <p>&copy; 2023 <b>Clase-Codo a Codo</b> - Sitio desarrollado por:</p>
                    <span>Lucas González, Marcelo Pesoa, Lisandro Iguacel y Marcilia Nietto</span>
                </div>
    `

document.querySelector(".nav-menu").innerHTML = nav
document.querySelector(".pie-pagina").innerHTML = pie