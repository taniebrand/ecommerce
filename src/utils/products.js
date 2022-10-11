export const products = [
    {id: 1, title:'pizza1', category:'cat1', description:'string', price:'100', pictureUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Campbells.jpg/250px-Campbells.jpg', stock:'number'},
    {id: 2, title:'hamburguesa2', category:'cat2', description:'string', price:'200', pictureUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Campbells.jpg/250px-Campbells.jpg', stock:'number'},
    {id: 3, title:'ensalada1', category:'cat1', description:'string', price:'300', pictureUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Campbells.jpg/250px-Campbells.jpg', stock:'number'},
    {id: 4, title:'empanadas2', category:'cat2', description:'string', price:'400', pictureUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Campbells.jpg/250px-Campbells.jpg', stock:'number'}
  ]

  export const getProducts = () => {
    const promise = new Promise ((resolve) => {
        setTimeout(() => {
            return resolve (products); 
        }, 2000);
        
    })
    return promise
  }

export const getAllProduct = (id) =>{
    const promise = new Promise ((resolve) => {
        const result = products.find((product) => product.id === parseInt(id));
        setTimeout(() => {
            return resolve (result); 
        }, 2000);
        
    })

    return promise
  }

  export const getProductsByCategory = (categoryId) => {
    const promise = new Promise ((resolve) => {
      const results = products.filter((product) => product.category === categoryId);
        setTimeout(() => {
            return resolve (results); 
        }, 2000);
        
    })
    return promise
  }