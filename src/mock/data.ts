import { text } from "stream/consumers";

export const appData = {
    logo_img: {
        url: "./logo-pagina.png"
    },
    imagenesFondoVistas: {
        habitacion: "./img_habit.jpg",
        salonimg: "./img_salones.jpg",
        restaurant: "./img_restaurant.jpg",
        servicios: "./img_servicios.jpg",
        home: "./homepageimg.jpg",
        reservas: "./img_servicios.jpg"
    },

    hotel: {
        title: "El Plaza Hotel ",
        presentacion: [
            " está ubicado estratégicamente en el corazón de la ciudad de Tandil. Esta ubicación -frente a la plaza central le permite a los pasajeros una rápida conexión con los paseos típicos de la ciudad, el casino, el lago, las sierras aledañas, los campos de Golf y los lugares de esparcimiento que Tandil brinda",

            "La cordial atención que se brinda en el Plaza Hotel está garantizada por la profesionalidad del personal; combinada con la supervisión de sus propietarios, garantizando una placentera estadía en Tandil con un trato ameno"
        ]
    },
    restaurant: {
        title: "Restaurant",
        presentacion: [
            "El Restaurant del Plaza Hotel le ofrece diariamente un menú ejecutivo con opciones que usted podrá acomodar a sus horarios y reuniones de trabajo.",
            "No solo los pasajeros del hotel pueden deleitarse con la cocina internacional propuesta por el chef ya que el restaurant es abierto al público en general y en su cálido ambiente usted podrá disfrutar -en familia o entre amigos- de una amplia gama de platos y las sugerencias para todos los gustos."
        ],
        imagenesRestaurant: [
            {
                id: 1,
                url: "./restaurant01.jpg",
            },
            {
                id: 2,
                url: "./restaurant02.jpg",
            },
            {
                id: 3,
                url: "./restaurant03.jpg",
            },
            {
                id: 4,
                url: "./restaurant04.jpg",
            },
            {
                id: 5,
                url: "./restaurant05.jpg",
            },
            {
                id: 6,
                url: "./restaurant06.jpg",
            },
        ]
    },
    salon: {
        texts: [
            "Sala de reuniones",
            "El Plaza Hotel le ofrece una cómoda Sala de Reuniones con capacidad de hasta 50 personas, siendo el medio ideal para llevar a cabo: Congresos y Convenciones, Lanzamientos de productos, Comercialización de los mismos, Rondas de negocios, Entrenamiento laboral, Seminarios de actualización, Fiestas Cualquier otro evento que su empresa requiera."
        ],
        imagenesSalon: [
            {
                id: 1,
                url: "./salon01.jpg",
            },
            {
                id: 2,
                url: "./salon02.jpg",
            },

            {
                id: 3,
                url: "./salon04.jpg",
            },
            {
                id: 4,
                url: "./salon05.jpg",
            },

        ]
    },
    cafeteria: {
        imagenCafeteria: "./img_cafeteria.jpg",
        text: {
            data: "La Cafetería del Plaza Hotel, abierta a todo el público, le propone disfrutar del exquisito café recién molido en un desayuno inigualable con una imponente vista de la plaza central. El vermouth cerca del mediodía o la cerveza por la tardecita será el deleite en una reunión con amigos. Y por la noche... tragos largos y el afamado whisky."
        },
        imagenesCafe: [
            {
                id: 1,
                url: "./bar01.jpg"
            },
            {
                id: 2,
                url: "./bar02.jpg"
            },
            {
                id: 3,
                url: "./bar03.jpg"
            },
            {
                id: 4,
                url: "./spa04.jpg"
            },
            {
                id: 5,
                url: "./bar05.jpg"
            },
            {
                id: 6,
                url: "./bar06.jpg"
            },
            
    
        ],
    },
    spa: {
        imagenSpa: "./img_spa.jpg",
        imagenesSpa: [
            {
                id: 1,
                url: "./spa01.jpg"
            },
            {
                id: 2,
                url: "./spa02.jpg"
            },
            {
                id: 3,
                url: "./spa03.jpg"
            },
            {
                id: 4,
                url: "./spa04.jpg"
            },
            {
                id: 5,
                url: "./spa05.jpg"
            },
            {
                id: 6,
                url: "./spa06.jpg"
            },
            {
                id: 7,
                url: "./spa07.jpg"
            },
            {
                id: 8,
                url: "./spa08.jpg"
            },
            {
                id: 9,
                url: "./spa09.jpg"
            },

        ]
    },

    servicios: {

        descripcionTop: [
            "El Plaza Hotel es una excelente opción para descansar o bien para su viaje de negocios dado que se encuentra en el centro de Tandil",

        ],
        descripcionBottom: {
            firts_column: [
                { id: 1, text: "Desayuno Buffet" },
                { id: 2, text: "Room service las 24 hs" },
                { id: 3, text: "Confitería / Snack bar las 24 hs." },
                { id: 4, text: "Servicio de telefonía con DDN y DDI" },
                { id: 5, text: "Internet WiFi" },
                { id: 6, text: "Recepción y envío de fax" },
                { id: 7, text: "Servicio de lavandería y tintorería" },
                { id: 8, text: "Sala de estar en el lobby" },
                { id: 9, text: "Ambiente climatizado" },
                { id: 10, text: "Baby Sitter" },
                { id: 11, text: "Ascensores" },
                { id: 12, text: "Caja de seguridad" }
            ],
            secondColumn: [

                { id: 1, text: "Area médica protegida las 24 hs" },
                { id: 2, text: "Cocheras cubiertas." },
                { id: 3, text: "Traslados" },
                { id: 4, text: "Acceso gratuito al SPA y Piscina (no incluye sesión de masajes)" },
                { id: 5, text: "Servicios internos opcionales:" },
                { id: 6, text: "Restaurant a la carta" },
                { id: 7, text: "SnackBar" },
                { id: 8, text: "Sala de Reuniones" },
                { id: 9, text: "Masajes en nuestro SPA" }
            ],
            thirdColumn: [
                { id: 1, text: "Visitas guiadas y citi tours." },
                { id: 2, text: "Cabalgatas y vuelos turísticos" },
                { id: 3, text: "Caminatas nocturnas por los cerros" },
                { id: 4, text: "Circuitos en cuatriciclos" },
                { id: 5, text: "Trekking, escalada, rapel, cicloturismo" },
                { id: 6, text: "Asados campestres." },
                { id: 7, text: "Cines y teatros." },
                { id: 8, text: "Casino." }
            ]
        },
    },


    imagenesHome: [
        // ./
        // ../../publi/
        {
            id: 1,
            url: "./home_hotel.jpg",
        },
        {
            id: 2,
            url: "./home_hotel2.jpg",
        },
        {
            id: 3,
            url: "./home_hotel3.jpg",
        },
        {
            id: 4,
            url: "./home_interior_hotel.jpg",
        },
        {
            id: 5,
            url: "./home_interior_hotel2.jpg",
        },
        {
            id: 6,
            url: "./home_interior_hotel3.jpg",
        },
        {
            id: 7,
            url: "./home_perro.jpg",
        }
    ]






}