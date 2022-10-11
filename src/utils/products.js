export const products = [
    {id: 1, title:'product 1', category:'cat1', description:'categoria 1', price:'100', pictureUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Campbells.jpg/250px-Campbells.jpg', stock:'number'},
    {id: 2, title:'product 2', category:'cat2', description:'categoria 2', price:'200', pictureUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Campbells.jpg/250px-Campbells.jpg', stock:'number'},
    {id: 3, title:'product 3', category:'cat1', description:'categoria 1', price:'300', pictureUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Campbells.jpg/250px-Campbells.jpg', stock:'number'},
    {id: 4, title:'product 4', category:'cat2', description:'categoria 2', price:'400', pictureUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Campbells.jpg/250px-Campbells.jpg', stock:'number'}
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