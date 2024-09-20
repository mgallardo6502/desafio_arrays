const propertiesForSale = [
  {
    id: 1,
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    title: "Apartamento de lujo en zona exclusiva",
    description: `Este apartamento de lujo está ubicado en una
                    exclusiva zona residencial`,
    address: "123 Luxury Lane, Prestige Suburb, CA 45678",
    rooms: 4,
    bathrooms: 4,
    price: 5000,
    smoke: "no",
    pets: "no",
  },

  {
    id: 2,
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    title: "Apartamento acogedor en la montaña",
    description: `Este apartamento acogedor está situado en lo alto de una
                  montaña con impresionantes vistas`,
    address: "789 Mountain Road, Summit Peaks, CA 23456",
    rooms: 2,
    bathrooms: 1,
    price: 1200,
    smoke: "yes",
    pets: "yes",
  },

  {
    id: 3,
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    title: "Penthouse de lujo con terraza panorámica",
    description: `Este penthouse de lujo ofrece una terraza panorámica con
                  vistas espectaculares`,
    address: "567 Skyline Avenue, Skyview City, CA 56789",
    rooms: 3,
    bathrooms: 3,
    price: 4500,
    smoke: "no",
    pets: "yes",
  },

  {
    id: 4,
    src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Casa familiar en el corazón de la ciudad",
    description: `Amplia casa de 4 habitaciones y 3 baños, con jardín y piscina,
                ubicada cerca de escuelas y comercios`,
    address: "1202 Romrog Way, Belle Fourche, WY 57717",
    rooms: 4,
    bathrooms: 3,
    price: 3000,
    smoke: "yes",
    pets: "yes",
  },

  {
    id: 5,
    src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Moderno apartamento con vista al mar",
    description: ` Disfruta de la vida costera en este espectacular apartamento de 2 habitaciones y 2 baños.
                Con grandes ventanales que ofrecen vistas panorámicas al océano, este espacio luminoso es ideal para quienes buscan un refugio elegante y relajante`,
    address: "2523 Better Street, Peculiar, KS 64078",
    rooms: 2,
    bathrooms: 2,
    price: 3500,
    smoke: "yes",
    pets: "no",
  },

  {
    id: 6,
    src: "https://images.unsplash.com/photo-1505015920881-0f83c2f7c95e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Espaciosa casa de campo con piscina privada",
    description: `Escapa del bullicio de la ciudad en esta hermosa casa de campo de 4 habitaciones y 3 baños. Rodeada de naturaleza,
                cuenta con una piscina privada y amplias áreas exteriores, perfectas para disfrutar de momentos en familia y con amigos`,
    address: "3573 Heavner Avenue, Conyers, GA 30207",
    rooms: 4,
    bathrooms: 3,
    price: 5000,
    smoke: "yes",
    pets: "no",
  },

  {
    id: 7,
    src: "https://images.unsplash.com/photo-1531835551805-16d864c8d311?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Elegante dúplex en zona residencial",
    description: `Este sofisticado dúplex de 3 habitaciones y 2 baños combina modernidad y confort. Ubicado en una tranquila zona residencial,
                cuenta con acabados de alta calidad y un diseño contemporáneo que hará las delicias de sus nuevos propietarios`,
    address: "3349 Coal Street, Altoona, PA 16601",
    rooms: 3,
    bathrooms: 2,
    price: 4500,
    smoke: "no",
    pets: "yes",
  },

  {
    id: 8,
    src: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Cálido apartamento estudio en el centro histórico",
    description: `Ideal para solteros o parejas, este encantador estudio de 1 habitación y 1 baño se encuentra en el corazón del centro histórico.
                  Con un diseño funcional y acogedor, es perfecto para quienes desean vivir cerca de la cultura y la vida urbana`,
    address: "1153 Hickory Lane, Washington, DC 20005",
    rooms: 1,
    bathrooms: 1,
    price: 2000,
    smoke: "yes",
    pets: "no",
  },

  {
    id: 9,
    src: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Casa familiar con amplio jardín y garaje",
    description: `Esta espaciosa casa de 4 habitaciones y 2 baños es ideal para familias. Con un amplio jardín y un garaje,
                ofrece el espacio necesario para disfrutar de la vida diaria y organizar reuniones familiares en un entorno seguro y agradable`,
    address: "649 Tanglewood Road, Jackson, MS 39201",
    rooms: 4,
    bathrooms: 2,
    price: 1200,
    smoke: "yes",
    pets: "yes",
  },

  {
    id: 10,
    src: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Moderno loft en el centro de la ciudad",
    description: `Este impresionante loft de 1 habitación y 1 baño es perfecto para quienes buscan un estilo de vida urbano. Con techos altos y un diseño abierto,
                este espacio contemporáneo es ideal para disfrutar de la vida en la ciudad con todas las comodidades`,
    address: "1963 Callison Lane, Philadelphia, DE 19108",
    rooms: 1,
    bathrooms: 1,
    price: 3000,
    smoke: "yes",
    pets: "yes",
  },
];

const propertiesForRent = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    title: "Apartamento en el centro de la ciudad",
    description: `Este apartamento de 2 habitaciones está ubicado en el corazón
                  de la ciudad, cerca de todo`,
    address: "123 Main Street, Anytown, CA 91234",
    rooms: 2,
    bathrooms: 2,
    price: 2000,
    smoke: "no",
    pets: "yes",
  },

  {
    id: 2,
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Apartamento luminoso con vista al mar",
    description: `Este hermoso apartamento ofrece una vista impresionante al mar`,
    address: "56 Ocean Avenue, Seaside Town, CA 56789",
    rooms: 3,
    bathrooms: 3,
    price: 2500,
    smoke: "yes",
    pets: "yes",
  },

  {
    id: 3,
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    title: "Condominio moderno en zona residencial",
    description: `Este elegante condominio moderno está ubicado en una tranquila
                  zona residencial`,
    address: "123 Main Street, Anytown, CA 91234",
    rooms: 2,
    bathrooms: 2,
    price: 2200,
    smoke: "no",
    pets: "no",
  },

  {
    id: 4,
    src: "https://images.unsplash.com/photo-1562925246-25f01be5471c?q=80&w=1977&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Cálido apartamento estudio en el centro histórico",
    description: `Ideal para solteros o parejas, este encantador estudio de 1 habitación y 1 baño se encuentra en el corazón del centro histórico.
                  Con un diseño funcional y acogedor, es perfecto para quienes desean vivir cerca de la cultura y la vida urbana`,
    address: "1153 Hickory Lane, Washington, DC 20005",
    rooms: 1,
    bathrooms: 1,
    price: 2000,
    smoke: "yes",
    pets: "no",
  },

  {
    id: 5,
    src: "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Penthouse de lujo con terraza panorámica",
    description: `Este penthouse de lujo ofrece una terraza panorámica con
                  vistas espectaculares`,
    address: "567 Skyline Avenue, Skyview City, CA 56789",
    rooms: 3,
    bathrooms: 3,
    price: 4500,
    smoke: "yes",
    pets: "yes",
  },

  {
    id: 6,
    src: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Cálido apartamento estudio en el centro histórico",
    description: `Ideal para solteros o parejas, este encantador estudio de 1 habitación y 1 baño se encuentra en el corazón del centro histórico.
                  Con un diseño funcional y acogedor, es perfecto para quienes desean vivir cerca de la cultura y la vida urbana`,
    address: "1153 Hickory Lane, Washington, DC 20005",
    rooms: 1,
    bathrooms: 1,
    price: 2000,
    smoke: "no",
    pets: "yes",
  },

  {
    id: 7,
    src: "https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Casa familiar con amplio jardín y garaje",
    description: `Esta espaciosa casa de 4 habitaciones y 2 baños es ideal para familias. Con un amplio jardín y un garaje,
                ofrece el espacio necesario para disfrutar de la vida diaria y organizar reuniones familiares en un entorno seguro y agradable`,
    address: "649 Tanglewood Road, Jackson, MS 39201",
    rooms: 4,
    bathrooms: 2,
    price: 1200,
    smoke: "no",
    pets: "yes",
  },

  {
    id: 8,
    src: "https://plus.unsplash.com/premium_photo-1661962841993-99a07c27c9f4?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Penthouse de lujo con terraza panorámica",
    description: `Este penthouse de lujo ofrece una terraza panorámica con
                  vistas espectaculares`,
    address: "567 Skyline Avenue, Skyview City, CA 56789",
    rooms: 3,
    bathrooms: 3,
    price: 4500,
    smoke: "no",
    pets: "no",
  },

  {
    id: 9,
    src: "https://plus.unsplash.com/premium_photo-1661876449499-26de7959878f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Elegante dúplex en zona residencial",
    description: `Este sofisticado dúplex de 3 habitaciones y 2 baños combina modernidad y confort. Ubicado en una tranquila zona residencial,
                cuenta con acabados de alta calidad y un diseño contemporáneo que hará las delicias de sus nuevos propietarios`,
    address: "3349 Coal Street, Altoona, PA 16601",
    rooms: 3,
    bathrooms: 2,
    price: 4500,
    smoke: "yes",
    pets: "yes",
  },

  {
    id: 10,
    src: "https://images.unsplash.com/photo-1505015920881-0f83c2f7c95e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Casa familiar con amplio jardín y garaje",
    description: `Esta espaciosa casa de 4 habitaciones y 2 baños es ideal para familias. Con un amplio jardín y un garaje,
                ofrece el espacio necesario para disfrutar de la vida diaria y organizar reuniones familiares en un entorno seguro y agradable`,
    address: "649 Tanglewood Road, Jackson, MS 39201",
    rooms: 4,
    bathrooms: 2,
    price: 1200,
    smoke: "yes",
    pets: "no",
  },
];

function propertiesCard(propertiesArray, steps) {
  let property = "";
  for (i = 0; i < steps; i++) {
    property += `
            <div class="col-md-4 mb-4">
                <div class="card">
                  <img
                    src="${propertiesArray[i].src}"
                    class="card-img-top"
                    alt="Imagen del departamento"
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      ${propertiesArray[i].title}
                    </h5>
                    <p class="card-text">
                      ${propertiesArray[i].description}
                    </p>
                    <p>
                      <i class="fas fa-map-marker-alt"></i> ${
                        propertiesArray[i].address
                      }
                    </p>
                    <p>
                      <i class="fas fa-bed"></i> ${
                        propertiesArray[i].rooms
                      } Habitaciones |
                      <i class="fas fa-bath"></i> ${
                        propertiesArray[i].bathrooms
                      } Baños
                    </p>
                    <p><i class="fas fa-dollar-sign"></i> ${
                      propertiesArray[i].price
                    }</p>
                    ${(smoke =
                      propertiesArray[i].smoke == "yes"
                        ? "<p class='text-success'><i class='fas fa-smoking'></i> Permitido fumar</p>"
                        : "<p class='text-danger'><i class='fas fa-smoking-ban'></i> No se permite fumar</p>")}
                    ${(pets =
                      propertiesArray[i].pets == "yes"
                        ? "<p class='text-success'><i class='fas fa-paw'></i> Mascotas permitidas</p>"
                        : "<p class='text-danger'><i class='fas fa-ban'></i> No se permiten mascotas</p>")}
                   </div>
                </div>
            </div>`;
  }
  return property;
}

const forSaleSection = document.getElementById("forSale");
const forRentSection = document.getElementById("forRent");

switch (document.title) {
  case "Inmobiliaria ADL - Inicio":
    forSaleSection.innerHTML = propertiesCard(propertiesForSale, 3);
    forRentSection.innerHTML = propertiesCard(propertiesForRent, 3);
    break;
  case "Inmobiliaria ADL - Venta":
    forSaleSection.innerHTML = propertiesCard(
      propertiesForSale,
      propertiesForSale.length
    );
    break;
  case "Inmobiliaria ADL - Alquiler":
    forRentSection.innerHTML = propertiesCard(
      propertiesForRent,
      propertiesForRent.length
    );
    break;
}
