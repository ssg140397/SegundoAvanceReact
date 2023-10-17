const products = [{
    id: '',
    name: '',
    product: '',
    category: '',
    img: '',
    stock: 20,
    description:'lorem'
    },
    {
    id: '',
    name: '',
    product: '',
    category: '',
    img: '',
    stock: 20,
    description:'lorem'
    },
    {
    id: '',
    name: '',
    product: '',
    category: '',
    img: '',
    stock: 20,
    description:'lorem'
    }
]

export const getProducts = () => {
    return new Promise ((resolve) =>{
        setTimeout (() => {
            resolve (products)
        })  })
    }
