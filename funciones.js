document.addEventListener("DOMContentLoaded", function(){

    //declara variables
    let imagenes = [
        {
            url:"imagenees/descarga.jpg",
            nombre: "silicon1"
        },
        {
            url:"imagenees/El-futuro-de-la-sede-de-Silicon-Valley.jpg",
            nombre: "silicon2"
        },
        {
            url:"imagenees/images.jpg",
            nombre: "silicon3"
        },
        {
            url:"imagenees/maxresdefault.jpg",
            nombre: "silicon4"
        },
        {
            url:"imagenees/Silicon_Valley_kGrsGzz.png",
            nombre: "silicon5"
        },
        {
            url:"imagenees/VCW_D_SiliconValley_Hero_20140708_Google_19 copy-1280x642_0.jpg",
            nombre: "silicon6"
        },
        {
            url:"imagenees/descarga.jpg",
            nombre: "silicon1"
        },
        {
            url:"imagenees/El-futuro-de-la-sede-de-Silicon-Valley.jpg",
            nombre: "silicon2"
        },
        {
            url:"imagenees/images.jpg",
            nombre: "silicon3"
        },
        {
            url:"imagenees/maxresdefault.jpg",
            nombre: "silicon4"
        },
        {
            url:"imagenees/Silicon_Valley_kGrsGzz.png",
            nombre: "silicon5"
        },
        {
            url:"imagenees/VCW_D_SiliconValley_Hero_20140708_Google_19 copy-1280x642_0.jpg",
            nombre: "silicon6"
        },
    ];
    //guardar eel nombre de la imagen
    let imgelegida = [];
    let imgelegidaPos = [];
    //guardar tablero
    let tablero = document.querySelector(".tablero");
    //contar de aciertos
    let contador = 0;
    let aciertos = document.querySelector(".aciertos");

    //colocar imagenes aleatoria
    imagenes.sort(()=>Math.random() -0.5);

    //funcion para agregar las imagenes al tablero
    function agregarimagenes(){
        for (let index = 0; index < imagenes.length; index++) {
            let img  = document.createElement("img");
            img.setAttribute("src", "imagenees/pregunta.png");
            img.setAttribute("width", "200px");
            img.setAttribute("height", "200px");
            img.setAttribute("data-posicion",index);
            img.addEventListener("click",mostrarImagen);
            //pasar al tabalero las imagenes
            tablero.appendChild(img);
        }
    }
agregarimagenes();


    function mostrarImagen(){
        let posicionImg=this.getAttribute("data-posicion");
        //cambiar la imagenpor las que estan guardadas
        this.setAttribute("src",imagenes[posicionImg].url);

        imgelegida.push(imagenes[posicionImg].nombre);
        imgelegidaPos.push([posicionImg]);

        //comparar imagenes cuando tenga dos guardadas    
        if(imgelegida.length === 2){
            setTimeout(compararImg,300);
        }
        
    }

    //FUNCION PARA COMPARAR
    function compararImg(){

        let todaslasImg = document.querySelectorAll(".tablero img");
        let opcion1 = imgelegidaPos[0];
        let opcion2 = imgelegidaPos[1];

        if (imgelegida[0] === imgelegida[1]){
            alert("Las dos imagenes son iguales");

            todaslasImg[opcion1].setAttribute("src","imagenees/silicon-valley-mensaje-de-la-matriz-ejemplo-del-139558169.jpg");
            todaslasImg[opcion2].setAttribute("src","imagenees/silicon-valley-mensaje-de-la-matriz-ejemplo-del-139558169.jpg");
            contador++;
            aciertos.textContent = contador;

        }else{
            alert("fatastes :(");
            todaslasImg[opcion1].setAttribute("src","imagenees/pregunta.png");
            todaslasImg[opcion2].setAttribute("src","imagenees/pregunta.png");
        }

        imgelegida = [];
        imgelegidaPos = [];
    }


})