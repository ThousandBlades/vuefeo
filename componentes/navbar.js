Vue.component('barranav',{
    template: //html
    `
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <h2>Laussure</h2>
                    <p>Immobiliaria</p>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item"><a href="#inicio">Inicio</a></li>
                        <li class="nav-item"><a href="#comprar">Comprar</a> </li>
                        <li class="nav-item"><a href="#arriendo">Arriendo</a></li>
                        <li class="nav-item"><a href="#servicios">Servicios</a></li>
                        <li class="nav-item"><a href="#ventas">Ventas</a></li>
                        <li class="nav-item"><a href="#contacto">Contáctenos</a></li>
                    </ul>
                </div>
            </div>        
        </nav>
    </div>
    `
} )
