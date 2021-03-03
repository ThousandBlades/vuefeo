class propiedad {
    constructor(img, type, place, size, price) {
        this.img = img;
        this.type = type;
        this.place = place;
        this.size = size;
        this.price = price;
    }
}

ventaA = new propiedad("Assets/venta1.jpg", "Venta", "Washington D.C.", 10000, 130000000);
ventaB = new propiedad("Assets/venta2.jpg", "Venta", "Marte", 6500, 48000000);
ventaC = new propiedad("Assets/venta3.jpg", "Venta", "Palacio Imperial", 50000, 65000000);

arriendoA= new propiedad("Assets/arriendo1.jpg", "Arriendo", "Paris, le septieme arrondissement", 7090, 1);
arriendoB= new propiedad("Assets/arriendo2.jpg", "Arriendo", "Dubai", 45000, 2);
arriendoC= new propiedad("Assets/arriendo3.jpg", "Arriendo", "Hawaii", 1500, 1);

var ventas=[ventaA,ventaB, ventaC];
var arriendos=[arriendoA,arriendoB, arriendoC];

const random = Math.floor(Math.random() * ventas.length);
ventaRandom=(random, ventas[random]);
arriendoRandom=(random, arriendos[random]);
console.log(ventaRandom);
console.log(arriendoRandom);

var bienesRaices =new Vue ({
    el: '#app'
    
    })
