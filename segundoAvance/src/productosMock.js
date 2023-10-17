const products = [
  {
    id: "1",
    name: "Zapatillas Adidas",
    product: "Zapatillas",
    category: "Zapatillas",
    img: "https://res.cloudinary.com/dv0jgj3sv/image/upload/v1697542128/cld-sample-5.jpg",
    stock: 20,
    description: "lorem",
  },
  {
    id: "2",
    name: "vendas de box",
    product: "vendas",
    category: "vendas",
    img: "https://res.cloudinary.com/dv0jgj3sv/image/upload/v1697542285/vendas-boxeo-everlast-negra-45-mts_l0fpeo.jpg",
    stock: 20,
    description: "lorem",
  },
  {
    id: "3",
    name: "barra olimpica",
    product: "barra olimpica",
    category: "barras",
    img: "https://res.cloudinary.com/dv0jgj3sv/image/upload/v1697542384/515aqVuV4JL._AC_UF894_1000_QL80__ag8ib7.jpg",
    stock: 20,
    description: "lorem",
  },
];

export const getProducts = () => {
    return new Promise ((resolve) =>{
        setTimeout (() => {
            resolve (products)
        })  })
    }
