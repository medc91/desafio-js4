let container = document.querySelector("#propiedades");
const propiedades = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170,
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130,
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80,
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6,
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200,
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    rooms: 5,
    m: 500,
  },
];

const propiedadeS = document.querySelector("#listaPropiedades");
function mostrarPropiedad(propiedad) {
  let html = `
    <div class="propiedad">
        <div class="img" style="background-image: url(${propiedad.src})"></div>
        <section>
            <h5>${propiedad.name}</h5>
            <div class="d-flex justify-content-between">
                <p>Cuartos: ${propiedad.rooms}</p>
                <p>Metros: ${propiedad.m}</p>
            </div>
            <p class="my-3">${propiedad.description}</p>
            <button class="btn btn-info ">Ver más</button>
        </section>
    </div>`;
  propiedadeS.innerHTML += html;
}

propiedadeS.innerHTML = "";

for (let propiedad of propiedades) {
  mostrarPropiedad(propiedad);
}

let btnBuscar = document.querySelector("#btnBuscar");
let cuartoValue = document.querySelector("#cuartoValue");
let minValue = document.querySelector("#minValue");
let maxValue = document.querySelector("#maxValue");
let span = document.querySelector("#span");

btnBuscar.addEventListener("click", () => {
  propiedadeS.innerHTML = "";

  if (cuartoValue.value == 0 || minValue.value == 0 || maxValue.value == 0) {
    alert("Favor llenar todos los campos");
  } else {
    let contador = 0;
    for (let propiedad of propiedades) {
      if (
        propiedad.rooms == cuartoValue.value &&
        propiedad.m >= minValue.value &&
        propiedad.m <= maxValue.value
      ) {
        mostrarPropiedad(propiedad);
        contador++;
      }
    }

    span.innerHTML = contador;
  }
});
