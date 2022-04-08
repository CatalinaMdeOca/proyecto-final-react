const products = [
    {
        id: 1,
        img: require('./productsImgs/orgullo-y-prejuicio.jpg'),
        name: "Orgullo y Prejuicio",
        author: "Jane Austen",
        price: 1200,
        stock: 10
    },
    {
        id:2,
        img:require('./productsImgs/harry-potter.jpg'),
        name:"Harry Potter y la Piedra Filosofal",
        author:"J. K. Rowling",
        price:1450,
        stock: 15
    },
    {
        id:3,
        img:require('./productsImgs/caballo-de-fuego-paris.png'),
        name:"Caballo de Fuego I: París",
        author:"Florencia Bonelli",
        price:1300,
        stock: 8
    },
    {
        id:4,
        img: require('./productsImgs/el-diario-de-ana-frank.jpg'),
        name:"El Diario de Ana Frank",
        author:"Ana Frank",
        price:1100,
        stock: 5
    }
];

export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}