Vue.component('cuerpo',{
    template: //html
    `
    <div class="row align-items-start">
        <div class="col-md-3">
            <h5 class="p-2">Conservador de bienes raíces</h5>
            <hr>
            <p class="p-2">"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae "</p>
            <hr>
            <div>
                <div class="p-2">
                    <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"</p>
                    <a href="">Leer más</a>
                </div>
                <div class="p-2">
                    <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"</p>
                    <a href="">Leer más</a>
                </div>
            </div>
        </div>
        <div class="col-md-9 row">
            <div class="card col-md m-2">
                <img class="card-img-top property border" v-bind:src="venta.imagen" alt="">
                <div class="card-body">
                  <h5 class="card-title">Venta</h5>             
                    <p class="card-text">Ubicación: {{venta.lugar}}</p>
                    <p class="card-text">Metros Construidos: {{venta.tamano}} hectáreas </p>
                    <p class="card-text">Precio: {{venta.precio}} usd</p>
                    <a href="#" class="btn btn-primary">Comprar</a>
                </div>
            </div>
            <div class="card col-md m-2">
                <img class="card-img-top property border" v-bind:src="arriendo.imagen" alt="">
                <div class="card-body">
                  <h5 class="card-title">Arriendo</h5>             
                    <p class="card-text">Ubicación: {{arriendo.lugar}}</p>
                    <p class="card-text">Metros Construidos: {{arriendo.tamano}} litros </p>
                    <p class="card-text">Precio: {{arriendo.precio}} riñón/mes</p>
                    <a href="#" class="btn btn-primary">Arrendar</a>
                </div>
            </div>    
        </div>
    </div>
    `,

    data(){
        return{
            venta: {
                imagen: ventaRandom.img,
                tipo: ventaRandom.type,
                lugar: ventaRandom.place,
                tamano: ventaRandom.size,
                precio: ventaRandom.price,
            },
            arriendo:{
                imagen: arriendoRandom.img,
                tipo: arriendoRandom.type,
                lugar: arriendoRandom.place,
                tamano: arriendoRandom.size,
                precio: arriendoRandom.price,
            }
        }
    }
} )
