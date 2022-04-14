const products = [
    {
        id: '1',
        category: 'romance',
        img: require('./productsImgs/orgullo-y-prejuicio.jpg'),
        name: 'Orgullo y Prejuicio',
        author: 'Jane Austen',
        price: 1200,
        stock: 10,
        sinopsis: 'Con la llegada del rico y apuesto Mr. Darcy a su región, las vidas de los Bennet y sus cinco hijas se vuelven del revés. El orgullo y la distancia social, la astucia y la hipocresía, los malentendidos y los juicios apresurados abocan a sus personajes al escándalo y al dolor, pero también a la comprensión, el conocimiento y el amor verdadero. Esta edición presenta al lector una nueva traducción al castellano que devuelve todo su esplendor al ingenio y la finísima ironía de la prosa de Austen. Satírica, antirromántica, profunda y mordaz a un tiempo, la obra de Jane Austen nace de la observación de la vida doméstica y de un profundo conocimiento de la condición humana.'
    },
    {
        id: '2',
        category: 'fantasia',
        img:require('./productsImgs/harry-potter.jpg'),
        name:'Harry Potter y la Piedra Filosofal',
        author:'J. K. Rowling',
        price:1450,
        stock: 15,
        sinopsis: 'Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y del insoportable primo Dudley. Harry se siente muy triste y solo, hasta que un buen día recibe una carta que cambiará su vida para siempre. En ella le comunican que ha sido aceptado como alumno en el colegio interno Hogwarts de magia y hechicería. A partir de ese momento, la suerte de Harry da un vuelco espectacular. En esa escuela tan especial aprenderá encantamientos, trucos fabulosos y tácticas de defensa contra las malas artes. Se convertirá en el campeón escolar de quidditch, especie de fútbol aéreo que se juega montado sobre escobas, y se hará un puñado de buenos amigos... aunque también algunos temibles enemigos. Pero sobre todo, conocerá los secretos que le permitirán cumplir con su destino. Pues, aunque no lo parezca a primera vista, Harry no es un chico común y corriente. ¡Es un verdadero mago!'
    },
    {
        id: '3',
        category: 'romance',
        img:require('./productsImgs/caballo-de-fuego-paris.png'),
        name:'Caballo de Fuego I: París',
        author:'Florencia Bonelli',
        price:1300,
        stock: 8,
        sinopsis: 'En la primera entrega de la trilogía «Caballo de fuego», París se convierte en el escenario de una historia de amor entre un señor de la guerra y una cirujana pediátrica que lucha por la paz. Eliah Al-Saud es un hombre excéntrico y poderoso, emparentado con la familia reinante de Arabia Saudí. Vive en París y dirige una empresa de seguridad que, en realidad, oculta actividades de defensa y de espionaje ofrecidas al mejor postor. Matilde Martínez, una mujer pequeña, de aspecto frágil y con una larga cabellera rubia, es una pediatra argentina que sueña con curar a los niños más desfavorecidos y trabajar para una ONG en África. Sus caminos se cruzan en un avión con destino a París, y es en la ciudad del amor donde inician un idilio lleno de anhelo y pasión. Sin embargo, los secretos que ambos guardan celosamente pondrán en riesgo no solo su relación, sino sus vidas. En el marco del siempre latente conflicto palestino-israelí y con una amenaza atómica como telón de fondo, Matilde y Eliah vivirán una aventura que los llevará a recorrer el mundo y los enfrentará a los peligros que acechan a quienes se atreven a desafiar a los imperios dominantes.'
    },
    {
        id: '4',
        category: 'no-ficcion',
        img: require('./productsImgs/el-diario-de-ana-frank.jpg'),
        name:'El Diario de Ana Frank',
        author:'Ana Frank',
        price:1100,
        stock: 5,
        sinopsis: '"El diario de Ana Frank" es un diario escrito por la niña Ana Frank entre el 12 de junio de 1942 y el 4 de agosto de 1944.Oculta con su familia y otros judíos en una buhardilla de unos almacenes de Ámsterdam durante la ocupación nazi de Holanda, Ana Frank con trece años cuenta en su diario la vida del grupo. Ayudados por varios empleados de la oficina, permanecieron durante más de dos años en el achterhuis (conocido como "el anexo secreto") hasta que, finalmente, fueron delatados. Ana escribió un diario entre el 12 de junio de 1942 y el 4 de agosto de 1944, tres días antes de que los ocupantes del anexo fueran traicionados. El 4 de agosto de 1944, agentes de la Gestapo detienen a todos los ocupantes y son llevados a diferentes campos de concentración.Después de permanecer durante un tiempo en los campos de concentración de Westerbork y Auschwitz, Ana y su hermana mayor, Margot, fueron deportadas a Bergen-Belsen, donde ambas murieron durante una epidemia entre finales de febrero y mediados de marzo de 1945. Su padre, Otto Frank, fue el único de los escondidos que sobrevivió a los campos de concentración. Cuando regresó a Ámsterdam, Miep Gies, una de las personas que les había ayudado durante su estancia en el anexo, le entregó el diario que su hija había escrito mientras estaban escondidos. En 1947 y según deseo de Ana, su padre decide publicar el diario y, desde entonces, se ha convertido en uno de los libros más leídos en todo el mundo.Tras el fallecimiento de Otto Frank en 1980, llegaron los escritos al Instituto Holandés para la Documentación de la Guerra. El Fondo Anne Frank (Suiza) es el heredero de los derechos de autor de los textos. En 1998 se publicaron cinco páginas más desconocidas del citado diario.'
    }
];

const categories = [
    {id: 'romance', description: 'Romance'},
    {id: 'fantasia', description: 'Fantasia'},
    {id: 'no-ficcion', description: 'No-ficcion'}
]

export const getCategories = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categories)
        }, 2000)
    })
}

export const getProducts = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        }, 2000)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 2000)
    })
}

// export const getProductsByCategory = (categoryId) => {
//     return new Promise (resolve => {
//         setTimeout(() => {
//             resolve(products.filter(prod => prod.category === categoryId))
//         }, 2000)
//     })
// }