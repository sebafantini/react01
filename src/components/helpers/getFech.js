const productos = [
    { id: '1', title: 'Curry de Pollo', category: 'proteina', price: 1200, maridaje: 'cerveza IPA',kcal: 450 , pictureUrl:'/curry_pollo.JPG'},
    { id: '2', title: 'Cuscus de Verduras', category: 'vegetariano', price: 1300, maridaje: 'vino blanco seco (Pinot Blanc)',kcal: 330 , pictureUrl:'/cuscus.jpg' },
    { id: '3', title: 'Asado', category: 'proteina', price: 1400, maridaje: 'vino tinto (Malbec)',kcal: 70 , pictureUrl:'/asado.JPG' },
    { id: '4', title: 'Verduras Grilladas',  category: 'vegetariano', price: 1500, maridaje: 'vino tinto (Cabernet Sauvignon) ',kcal: 300 , pictureUrl:'/verduras.JPG' }
  ]

  export const getFetch = (category) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
                const query = category ? productos.filter(producto => producto.category == category ) : productos                                  
                resolve( query )                           
            }, 2000)
        })            
    
}